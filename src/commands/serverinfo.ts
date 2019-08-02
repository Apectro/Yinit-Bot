import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class serverinfo implements IBotCommand{

    private readonly  _command = "serverinfo"

    help(): string {
        return "This command does absolutely nothing! How fun:)";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        let embed = new Discord.RichEmbed()
                        .setColor([67,198,219])
                        .setAuthor(`${msgObject.guild.name}`, `${msgObject.guild.iconURL}`)
                        .setFooter(`ID: ${msgObject.guild.id} | Server Created`)
                        .setTimestamp(msgObject.guild.createdTimestamp)
                        .addField("Owner", `${msgObject.guild.owner.user.tag}`, true)  
                        .addField("Region", `${msgObject.guild.region}`, true)
                        .addField("Text Channels", `${msgObject.guild.channels.size}`, true)
                        .addField("Voice Channels", `${msgObject.guild.channels.filter(channel => channel.type === `voice`).size}`, true)
                        .addField("Members", `${msgObject.guild.memberCount}`, true)
                        .addField("Roles", `${msgObject.guild.roles.size}`, true)
                        

        msgObject.channel.send(embed)
            .catch(console.error);
    }
}