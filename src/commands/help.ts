import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class help implements IBotCommand{

    private readonly  _command = "help"

    help(): string {
        return "This command does absolutely nothing! How fun:)";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        let  embed = new Discord.RichEmbed()
                        .setColor([67,198,219])
                        .setTitle("List of our Commands!")
                        .setTimestamp()
                        .addField("General Commands", " ‏‏‎ ")
                        .addField("?poll", "Command makes a poll!")
                        .addField("?serverinfo", "Command shows information about Server!")
                        .addField("?userinfo", "Command shows information about User!")
                        .addField(" ‏‏‎ ", " ‏‏‎ ")   
                        .addField("Admin Commands", " ‏‏‎ ")      
                        .addField("?ban", "Command bans a User!") 
                        .addField("?unban", "Command unbans a user by they'r ID!")  
                        .addField("?mute", "Command mutes a user by they'r ID or Mention")    
                        .addField("?unmute", "Command unmutes a user by they'r ID or Mention")       
                        .addField("?kick", "Command kicks a User!") 
                        .addField("?purge", "Command clears number of messages you want to delete!")              

        msgObject.channel.send(embed)
            .catch(console.error);
    }
}