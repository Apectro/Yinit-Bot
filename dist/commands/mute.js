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
class mute {
    constructor() {
        this._command = "mute";
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
                (msgObject.channel.send("You dont have permission to use this command"))
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!msgObject.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
                (msgObject.channel.send("I don't have permission to add roles!"))
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            let mutee = msgObject.mentions.members.first() || msgObject.guild.members.get(args[0]);
            if (!mutee) {
                (msgObject.channel.send("Please supply a user to be muted!"))
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
                try {
                    muterole = yield msgObject.guild.createRole({
                        name: "Muted",
                        color: "#514f48",
                        permissions: []
                    });
                    msgObject.guild.channels.forEach((channel, id) => __awaiter(this, void 0, void 0, function* () {
                        yield channel.overwritePermissions(muterole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            SEND_TTS_MESSAGES: false,
                            ATTACH_FILES: false,
                            SPEAK: false
                        });
                    }));
                }
                catch (e) {
                    console.log(e.stack);
                }
            }
            mutee.addRole(muterole.id).then(() => {
                mutee.send(`You have been muted in **${msgObject.guild.name}** for: ${reason}`);
                msgObject.channel.send(`${mutee.user.tag} has been muted!`);
            });
        });
    }
}
exports.default = mute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixJQUFJO0lBQXpCO1FBRXNCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUF5RXZDLENBQUM7SUF2RUcsSUFBSTtRQUNBLE9BQU8saURBQWlELENBQUM7SUFDN0QsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQzVFO2dCQUNJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztxQkFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNWO1lBRUQsSUFBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQyxFQUN2RTtnQkFDSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7cUJBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUVELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFHLENBQUMsS0FBSyxFQUNUO2dCQUNJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztxQkFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNWO1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBRyxDQUFDLE1BQU07Z0JBQUUsTUFBTSxHQUFHLGlCQUFpQixDQUFBO1lBRXRDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUE7WUFDbEUsSUFBRyxDQUFDLFFBQVEsRUFBRTtnQkFDVixJQUFHO29CQUNDLFFBQVEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO3dCQUN4QyxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsV0FBVyxFQUFFLEVBQUU7cUJBQ2xCLENBQUMsQ0FBQTtvQkFDRixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBTyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUU7d0JBQ25ELE1BQU0sT0FBTyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRTs0QkFDekMsYUFBYSxFQUFFLEtBQUs7NEJBQ3BCLGFBQWEsRUFBRSxLQUFLOzRCQUNwQixpQkFBaUIsRUFBRSxLQUFLOzRCQUN4QixZQUFZLEVBQUUsS0FBSzs0QkFDbkIsS0FBSyxFQUFFLEtBQUs7eUJBQ2YsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7aUJBQ0w7Z0JBQUMsT0FBTSxDQUFDLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7WUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLDRCQUE0QixTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxNQUFNLEVBQUUsQ0FBQyxDQUFBO2dCQUMvRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFBO1lBQy9ELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBQ0o7QUEzRUQsdUJBMkVDIn0=