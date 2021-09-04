const Command = require("../Structures/Command.js");
const assets = require('../data/assets.json');

module.exports = new Command({
    name: "quitbot",
    description: "send a message before stopping the bot",
    async run(message, args, client){
        if (message.author.id == "change here with the owner of the bot"){
            message.reply("Oki bg je vais me coucher !! :flushed: ")
            client.channels.cache.get("change here again").send(choose(assets.Goodbye)).then(()=>{
                process.exit();
            })
        }else{
            message.reply("vous n'avez pas la permission pour celà.");
        }
    }
});

function choose(choices){
    let index = Math.floor(Math.random()* choices.length);
    return choices[index];
}
