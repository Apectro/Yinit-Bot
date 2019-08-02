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
class unban {
    constructor() {
        this._command = "unban";
    }
    help() {
        return "This command does absolutely nothing! How fun:)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!msgObject.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
                (msgObject.channel.send(`You don't have permission to unban other users!`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                }));
                return;
            }
            let bannedMember = yield client.fetchUser(args[0]);
            if (!msgObject.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
                (msgObject.channel.send(`Please provide a user ID to unban them`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                }));
                return;
            }
            if (!msgObject.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
                (msgObject.channel.send(`I don't have permission to perform this command!`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                }));
                return;
            }
            try {
                msgObject.guild.unban(bannedMember.tag);
                msgObject.channel.send(`${bannedMember.tag} has been unbanned from the server`);
            }
            catch (e) {
                console.log(e.message);
            }
            ;
        });
    }
}
exports.default = unban;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5iYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdW5iYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFFc0IsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQXNEcEMsQ0FBQztJQXBERCxJQUFJO1FBQ0EsT0FBTyxpREFBaUQsQ0FBQztJQUM3RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsRUFDcEU7Z0JBR1EsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQztxQkFDekUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNYLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDSixPQUFPO2FBQ1Y7WUFFRyxJQUFJLFlBQVksR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEQsSUFBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQyxFQUN0RTtnQkFFUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDO3FCQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1gsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNKLE9BQU87YUFDVjtZQUVMLElBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsRUFDdEU7Z0JBRVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrREFBa0QsQ0FBQztxQkFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNYLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDSixPQUFPO2FBQ1Y7WUFFRCxJQUFJO2dCQUNBLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyxDQUFBO2FBQzlFO1lBQUMsT0FBTSxDQUFDLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDekI7WUFBQSxDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUF4REwsd0JBd0RLIn0=