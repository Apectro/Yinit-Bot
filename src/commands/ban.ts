import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class ban implements IBotCommand{

    private readonly  _command = "ban"

    help(): string {
        return "(Admin Only) Bans the mentioned user";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${msgObject.author.username}: ${suppliedReason}`;

        //let embed = new Discord.RichEmbed()
                        //.setColor([67,198,219])
                        //.setDescription("**Usage**: ?ban @Teeqo Noob")
                        //.setTimestamp()

            //msgObject.channel.send(embed)
            //.catch(console.error);

        msgObject.delete()
            .catch(console.error);
                     
         if(!msgObject.member.hasPermission("ADMINISTRATOR"))
        {


                (msgObject.channel.send(`You don't have permission to ban other users!`)
                .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            }));
            return;
        }

        if(!mentionedUser)
        {
            msgObject.channel.send(`Sorry, I couldn't find user to ban them`)
                .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            });
            return;
        }


        msgObject.guild.member(mentionedUser).ban(banLog)
        .then(console.log)
        .catch(console.error)
    }   
}