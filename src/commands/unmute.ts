import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class unmute implements IBotCommand{

    private readonly  _command = "unmute"

    help(): string {
        return "This command does absolutely nothing! How fun:)";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        if(!msgObject.member.hasPermission("MANAGE_ROLES") || !msgObject.guild.owner)
        {
            (msgObject.channel.send("You dont have permission to use this command!"))
            .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            });
            return;
        }
        
        if(!msgObject.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
        {
            (msgObject.channel.send("I dont have permission to add roles!"))
            .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            });
            return;
        }

        let mutee = msgObject.mentions.members.first() || msgObject.guild.members.get(args[0]);
        if(!mutee)
        {
            msgObject.channel.send("Please supply a user to be muted!")
            .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            });
            return;
        }

        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given"

        let muterole = msgObject.guild.roles.find(r => r.name === "Muted");
        if(!muterole)
        {
            msgObject.channel.send("There is no mute role to remove")
            .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            });
            return;
        }

        mutee.removeRole(muterole.id).then(() =>{
            mutee.send(`You have been unmuted in **${msgObject.guild.name}** for: ${reason}`).catch(err => console.log(err))
            msgObject.channel.send(`${mutee.user.tag} was unmuted!`)
        });
    }   
}