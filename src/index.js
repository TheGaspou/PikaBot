

const config = require("./data/config.json");

const Client = require("./Structures/Client.js");

const Command = require('./Structures/Command.js')

const bot = new Client();

const assets = require('./data/assets.json');

const { MessageEmbed, DiscordAPIError } = require("discord.js");

const fs = require("fs");


fs.readdirSync("./src/Commands").filter(file => file.endsWith(".js")).forEach(file => {

    /**
     * @type {Command}
     */

    const command = require(`./Commands/${file}`);
    console.log(`Command ${command.name} loaded`);
    bot.commands.set(command.name, command);

});

bot.on("ready", () => { 
    console.log("____READY____");
    async function clearPikaStatusChannel(){
        bot.channels.cache.get("change here").bulkDelete(10);
    }
    clearPikaStatusChannel(); //delete this if you dont want the bot to delete messages
    bot.channels.cache.get("change here").send(choose(assets.Hello)); //delete this if you dont want the bot to say hi when it connects
    bot.user.setActivity('Pokemon go', {type: 'PLAYING'});
    bot.user.setPresence({game: {
        name: 'Pokemon Go',
        type: 'PLAYING'
    }});
});

bot.on("messageCreate", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)){
        if (message.content.toLowerCase().includes("quoi")){
            let a = choose(assets.feur);
            console.log(a);
            if (a.includes(".gif")){
                const embed = new MessageEmbed();
                embed.setColor('RANDOM');
                embed.setTitle("Feur");
                embed.setImage(a);
                embed.setFooter(assets.attributes.description);
                message.reply({ embeds: [embed] })
            }
            else if (a == "feur embed"){
                embed = new MessageEmbed();
                embed.addField("FEUR", ":flushed:", false);
                message.reply({ embeds: [embed] });
            }else{
                message.reply(a);
            }
            
        }
        return;
    }else{
        const args = message.content.substring(config.prefix.length).split(/ +/);
        
        const command = bot.commands.find(cmd => cmd.name == args[0]);

        if (!command) return message.reply(`${args[0]} n'est pas une commande ! \nTape =help pour les découvrirs !! :flushed: :grin:`);

        command.run(message, args, bot);

    }
});

function choose(choices){
    let index = Math.floor(Math.random()* choices.length);
    return choices[index];
}


bot.login(config.token);

