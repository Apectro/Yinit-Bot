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
class unmute {
    constructor() {
        this._command = "unmute";
    }
    help() {
        return "This command does absolutely nothing! How fun:)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!msgObject.member.hasPermission("MANAGE_ROLES") || !msgObject.guild.owner) {
                (msgObject.channel.send("You dont have permission to use this command!"))
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!msgObject.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
                (msgObject.channel.send("I dont have permission to add roles!"))
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            let mutee = msgObject.mentions.members.first() || msgObject.guild.members.get(args[0]);
            if (!mutee) {
                msgObject.channel.send("Please supply a user to be muted!")
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            let reason = args.slice(1).join(" ");
            if (!reason)
                reason = "No reason given";
            let muterole = msgObject.guild.roles.find(r => r.name === "Muted");
            if (!muterole) {
                msgObject.channel.send("There is no mute role to remove")
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            mutee.removeRole(muterole.id).then(() => {
                mutee.send(`You have been unmuted in **${msgObject.guild.name}** for: ${reason}`).catch(err => console.log(err));
                msgObject.channel.send(`${mutee.user.tag} was unmuted!`);
            });
        });
    }
}
exports.default = unmute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3VubXV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBcUIsTUFBTTtJQUEzQjtRQUVzQixhQUFRLEdBQUcsUUFBUSxDQUFBO0lBOER6QyxDQUFDO0lBNURHLElBQUk7UUFDQSxPQUFPLGlEQUFpRCxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUM1RTtnQkFDSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUM7cUJBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUVELElBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUMsRUFDdkU7Z0JBQ0ksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO3FCQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsSUFBRyxDQUFDLEtBQUssRUFDVDtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztxQkFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNWO1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDcEMsSUFBRyxDQUFDLE1BQU07Z0JBQUUsTUFBTSxHQUFHLGlCQUFpQixDQUFBO1lBRXRDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7WUFDbkUsSUFBRyxDQUFDLFFBQVEsRUFDWjtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztxQkFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNWO1lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVcsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFBO1lBQzVELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBQ0o7QUFoRUQseUJBZ0VDIn0=