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
class help {
    constructor() {
        this._command = "help";
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
                .addField("?purge", "Command clears number of messages you want to delete!");
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVzQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBZ0N2QyxDQUFDO0lBOUJHLElBQUk7UUFDQSxPQUFPLGlEQUFpRCxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUssS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbkIsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztpQkFDdEIsUUFBUSxDQUFDLHVCQUF1QixDQUFDO2lCQUNqQyxZQUFZLEVBQUU7aUJBQ2QsUUFBUSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQztpQkFDckMsUUFBUSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQztpQkFDMUMsUUFBUSxDQUFDLGFBQWEsRUFBRSx5Q0FBeUMsQ0FBQztpQkFDbEUsUUFBUSxDQUFDLFdBQVcsRUFBRSx1Q0FBdUMsQ0FBQztpQkFDOUQsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQzFCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7aUJBQ25DLFFBQVEsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUM7aUJBQ3hDLFFBQVEsQ0FBQyxRQUFRLEVBQUUscUNBQXFDLENBQUM7aUJBQ3pELFFBQVEsQ0FBQyxPQUFPLEVBQUUsOENBQThDLENBQUM7aUJBQ2pFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsZ0RBQWdELENBQUM7aUJBQ3JFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUM7aUJBQzFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsdURBQXVELENBQUMsQ0FBQTtZQUU1RixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUFBO0NBQ0o7QUFsQ0QsdUJBa0NDIn0=