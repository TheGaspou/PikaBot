const Command = require("../Structures/Command.js");
const fs = require("fs");
const { MessageEmbed } = require("discord.js");
const assets = require("../data/assets.json");

module.exports = new Command({
    name: "carte",
    description: "Shows the 'id' card of someone",

    async run(message, args, client){
        if (args.length < 2) message.reply("Ping quelqun sur le serveur ! (=carte @tonpote) \n Si tu veux créer ta propre carte tape =register ! :grin:");
        else{
            if (args[1].includes("<@!")){
                let pingedUserId = args[1].split("<@!");
                pingedUserId = pingedUserId[1]
                pingedUserId = pingedUserId.split(">");
                pingedUserId = pingedUserId[0];
                console.log(pingedUserId);

                fs.readFile(`src/data/cards.json`, 'utf-8', (err, data)=>{
                    if (err) console.log(`Error ${err}`);
                    else{
                        let exist = false;
                        data = JSON.parse(data);
                        console.log(data);
                        let object;
                        data.forEach(it => {
                            if (it.userId == pingedUserId){
                                exist = true;
                                object = it;
                            }
                        });
                        if (!exist){
                            message.reply("La personne ne s'est pas encore enregistrée !! :pensive:");
                        }else{
                            const embed = new MessageEmbed();
                            embed.setColor('RANDOM');
                            embed.setTitle(`Carte de ${object.pseudo}`);
                            embed.setThumbnail(`https://cdn.discordapp.com/avatars/${object.userId}/${object.avatar}`);
                            embed.setFooter(assets.attributes.description);
                            embed.addFields({
                                name: object.name, 
                                value: "Nom",
                                inline: true
                            },{
                                name: object.firstName,
                                value: "Prénom",
                                inline: true
                            }, {
                                name: object.sexe,
                                value: "Sexe",
                                inline: true
                            },{
                                name: object.age,
                                value: "Ans",
                                inline: true
                            },{
                                name: "Passion(s) :",
                                value: object.passion,
                                inline: true
                            }, {
                                name: "Autres infos: ",
                                value: object.otherInfos,
                                inline: false
                            });
                            message.reply({ embeds: [embed]});
                        }
                    }
                });


            } else{
                message.reply("Ce n'est pas un utilisateur valide.")
            }
        }
    }
}); 