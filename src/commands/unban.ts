import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class unban implements IBotCommand{

    private readonly  _command = "unban"

    help(): string {
        return "This command does absolutely nothing! How fun:)";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        if(!msgObject.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
        {


                (msgObject.channel.send(`You don't have permission to unban other users!`)
                .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            }));
            return;
        }  

            let bannedMember = await client.fetchUser(args[0])
            if(!msgObject.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
            {
    
                    (msgObject.channel.send(`Please provide a user ID to unban them`)
                    .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                }));
                return;
            }  

        if(!msgObject.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
        {

                (msgObject.channel.send(`I don't have permission to perform this command!`)
                .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            }));
            return;
        }  
        
        try {
            msgObject.guild.unban(bannedMember.tag)
            msgObject.channel.send(`${bannedMember.tag} has been unbanned from the server`)
            } catch(e) {
                console.log(e.message)
            };
        }
    }
