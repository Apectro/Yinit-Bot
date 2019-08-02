"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class serverinfo {
    constructor() {
        this._command = "serverinfo";
    }
    help() {
        return "This command does absolutely nothing! How fun:)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .setColor([67, 198, 219])
                .setAuthor(`${msgObject.guild.name}`, `${msgObject.guild.iconURL}`)
                .setFooter(`ID: ${msgObject.guild.id} | Server Created`)
                .setTimestamp(msgObject.guild.createdTimestamp)
                .addField("Owner", `${msgObject.guild.owner.user.tag}`, true)
                .addField("Region", `${msgObject.guild.region}`, true)
                .addField("Text Channels", `${msgObject.guild.channels.size}`, true)
                .addField("Voice Channels", `${msgObject.guild.channels.filter(channel => channel.type === `voice`).size}`, true)
                .addField("Members", `${msgObject.guild.memberCount}`, true)
                .addField("Roles", `${msgObject.guild.roles.size}`, true);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = serverinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVzQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBNEI3QyxDQUFDO0lBMUJHLElBQUk7UUFDQSxPQUFPLGlEQUFpRCxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEIsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztpQkFDdEIsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2xFLFNBQVMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxtQkFBbUIsQ0FBQztpQkFDdkQsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDO2lCQUM1RCxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUM7aUJBQ3JELFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUM7aUJBQ25FLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDO2lCQUNoSCxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUM7aUJBQzNELFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUd6RSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUFBO0NBQ0o7QUE5QkQsNkJBOEJDIn0=