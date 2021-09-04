const Command = require("../Structures/Command.js");
const fetch = require("node-fetch");
const fs = require("fs");
const Pokedex = require('pokedex-promise-v2');

module.exports = new Command({
    name: "pokemon",
    description: "Shows the pokemon card infos",

    async run(message, args, client){
        if (args.length < 2) message.reply("il faut un nom de pokemon !");
        else{
            const id = args[1];
            const Poke = new Pokedex();

            Poke.getPokemonByName(args[1], function(response, error) { // with callback
                if(!error) {
                    console.log(response);
                    message.reply(response.forms[0].name);
                } else {
                    console.log(error);
                    message.reply("Ce pokemon n'existe pas ou est mal orthographié. (le nom doit être écrit en anglais !!!)");
                }
            });

        }
        
    }
});