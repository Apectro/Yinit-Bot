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
class purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "(Admin Only) Deletes the desired number of messages from the channel";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete();
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`This command is only for Admins`)
                    .then(msg => {
                    msg.delete(5000);
                });
                return;
            }
            if (!args[0]) {
                msgObject.channel.send(`You need to supply a number to delete messages`)
                    .then(msg => {
                    msg.delete(5000);
                });
                return;
            }
            let numberOfMessagesToDelete = Number(args[0]);
            if (isNaN(numberOfMessagesToDelete)) {
                msgObject.channel.send(`You need to supply a number to delete messages`)
                    .then(msg => {
                    msg.delete(5000);
                });
                return;
            }
            numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);
            msgObject.channel.bulkDelete(numberOfMessagesToDelete)
                .catch(console.error);
        });
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFFc0IsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQW9EeEMsQ0FBQztJQWxERyxJQUFJO1FBQ0EsT0FBTyxzRUFBc0UsQ0FBQztJQUNsRixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFbkIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUNuRDtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztxQkFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxPQUFPO2FBQ1Y7WUFHRCxJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUNSLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDO3FCQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU87YUFDVjtZQUdELElBQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRy9DLElBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQ2xDO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDO3FCQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU87YUFDVjtZQUVELHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFHcEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7aUJBQ2pELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUFBO0NBQ0o7QUF0REQsd0JBc0RDIn0=