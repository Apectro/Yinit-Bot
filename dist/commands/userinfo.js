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
class userinfo {
    constructor() {
        this._command = "userinfo";
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
                .setThumbnail(`${msgObject.member.user.avatarURL}`)
                .setTitle(`${msgObject.member.user.username}`)
                .addField(`ID:`, `${msgObject.member.id}`, true)
                .addField(`Nickname:`, `${msgObject.member.nickname !== null ? `${msgObject.member.nickname}` : 'None'}`, true)
                .addField(`Created At:`, `${msgObject.member.user.createdAt}`, true)
                .addField(`Joined Server:`, `${msgObject.member.joinedAt}`, true)
                .addField(`Status:`, `${msgObject.member.presence.status}`, true)
                .addField(`Roles:`, `${msgObject.member.roles.map(roles => `${roles.name}`).join(', ')}`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = userinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdXNlcmluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixRQUFRO0lBQTdCO1FBRXNCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUEyQjNDLENBQUM7SUF6QkcsSUFBSTtRQUNBLE9BQU8saURBQWlELENBQUM7SUFDN0QsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNsQixRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QixZQUFZLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDbEQsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQzdDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQztpQkFDL0MsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUM7aUJBQzlHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUM7aUJBQ25FLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDO2lCQUNoRSxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDO2lCQUNoRSxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBR3pHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDSjtBQTdCRCwyQkE2QkMifQ==