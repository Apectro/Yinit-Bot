import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {
    console.log("Ready to go!");

    //Set the bot's activity
    client.user.setActivity("yinit.gg| ?help", { type: "PLAYING" });
})

client.on("guildMemberAdd", member => {

    let welcomeChannel = member.guild.channels.find(channel => channel.name === "welcome") as Discord.TextChannel;
    welcomeChannel.send(`Welcome **${member.displayName}**, We hope you enjoy your time here, Be sure to check #rules !`);

    let memberRole = member.guild.roles.find(role => role.id == "605397282065612831");
    member.addRole(memberRole);

    member.send("Have fun in our server!")

})

client.on("guildMemberRemove", member => {

    let welcomeChannel = member.guild.channels.find(channel => channel.name === "welcome") as Discord.TextChannel;
    welcomeChannel.send(`**${member.displayName}**, We are sorry that you had to go.`);
})

client.on("message", msg => {



    //Ignore the message if it was send by the bot
    if (msg.author.bot) { return; }

    //Ignore the message if it was send in dms
    if(msg.channel.type == "dm") { return; }

    //Ignore messages that don't start with the prefix
    if(!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

   //Handle the command
   handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {

    //Split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    //Loop throught all of our loaded commands
    for(const commandsClass of commands){

        //Attempt to execute code but ready in case of a possible error
        try{

            //Check if our command class is the correct one
            if(!commandsClass.isThisCommand(command)){

                //Go to the next ireration of the loop if this isnt the correct command class
                continue;
            }

            //Pause execution whilst we run the command's code
            await commandsClass.runCommand(args, msg, client);
        }
        catch(exception){

            //If there is an error, then log the exception
            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string){

    //Exit if there is no commands
    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Loop through all of the commands in our config file
    for (const commandName of ConfigFile.config.commands as string[]) {

        //Load the command class
        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        //Cast as our custom IBotCommand interface
        const command = new commandsClass() as IBotCommand;

        //Add to our commands list for later when commands are used
        commands.push(command);
    }
}

client.login(ConfigFile.config.token);