import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class poll implements IBotCommand{

    private readonly  _command = "poll"

    help(): string {
        return "Creates a boll";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        msgObject.delete(0);

        if(args.length < 1) { return; }

        let pollEmbed = new Discord.RichEmbed()
            .setColor([67,198,219])
            .setTitle(`**${msgObject.member.displayName}** Created a Poll`)
            .setTimestamp()
            .setDescription(args.join(" "))

        let pollMessage = await msgObject.channel.send(pollEmbed);
        await (pollMessage as Discord.Message).react("✅");
        await (pollMessage as Discord.Message).react("❎");
        await (pollMessage as Discord.Message).react("🤷");

        
        const filter = (reaction: Discord.MessageReaction) => reaction.emoji.name === "✅" || reaction.emoji.name === "❎" || reaction.emoji.name === "🤷"
        //const results = await (pollMessage as Discord.Message).awaitReactions(filter, { time: 10000 })

        //let resultsEmbed = new Discord.RichEmbed()
            //.setTitle("Poll Results")
            //.setDescription(`Results For The Poll: **${args.join(" ")}**`)
            //.addField("✅:",`${results.get("✅")} Votes`)
            //.addField("❎:",`${results.get("❎")} Votes`)
            //.addField("❎:",`${results.get("🤷")} Votes`)

        //msgObject.channel.send(resultsEmbed);
        //(pollMessage as Discord.Message).delete(0);
    }
}