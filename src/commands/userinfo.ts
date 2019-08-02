import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class userinfo implements IBotCommand{

    private readonly  _command = "userinfo"

    help(): string {
        return "This command does absolutely nothing! How fun:)";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        let embed = new Discord.RichEmbed()
                        .setColor([67,198,219])
                        .setThumbnail(`${msgObject.member.user.avatarURL}`)
                        .setTitle(`${msgObject.member.user.username}`)
                        .addField(`ID:`, `${msgObject.member.id}`, true)
                        .addField(`Nickname:`, `${msgObject.member.nickname !== null ? `${msgObject.member.nickname}` : 'None'}`, true)
                        .addField(`Created At:`, `${msgObject.member.user.createdAt}`, true)
                        .addField(`Joined Server:`, `${msgObject.member.joinedAt}`, true)
                        .addField(`Status:`, `${msgObject.member.presence.status}`, true)
                        .addField(`Roles:`, `${msgObject.member.roles.map(roles => `${roles.name}`).join(', ')}`)
                        

        msgObject.channel.send(embed)
            .catch(console.error);
    }
}