const Command = require("../Structures/Command.js");
const fs = require("fs");

module.exports = new Command({
    name: "cartedit",
    description: "Allows the user to change their cards",

    async run(message, args, client){
        fs.readFile(`src/data/cards.json`, 'utf-8', (err, data) =>{
            if (err) console.log(err);
            else{
                const database = JSON.parse(data);
                let exist = false;
                var j = 0;
                var i = 0;
                database.forEach(it => {
                    if (message.author.id == it.userId){
                        exist = true;
                        i = j;
                    }
                    j ++;
                });
                if (!exist) message.reply("Créer toi une carte avant cha bg !!! =register :grin:");
                else{
                    if (args.length < 3) message.reply("Veuillez choisir quel champs modifier (entre nom, prénom, sexe, age, passion, autre) \n puis ajoutez avec ce par quoi vous voulez changer.");
                    else{
                        console.log("here");
                        const toChange = args[1];
                        let changed ;
                        for (let k = 0; k<args.length; k++){
                            if (k > 1){
                                changed += args[k] + " ";
                            }
                        }
                        changed = changed.split("undefined")[1];
                        console.log(changed);
                        if (toChange == "nom"){
                            database[i].name = changed;
                            fs.writeFile(`src/data/cards.json`, JSON.stringify(database, null, 4), (err) =>{
                                if (err) {
                                    console.log(`error: ${error}`);
                                    message.reply("Oups... Quelque chose s'est mal passé !!");
                                }else{
                                    message.reply(`Votre nom a été changé en ${database[i].name}`);
                                }
                            })
                        }
                        else if (toChange == "prénom"){
                            database[i].firstName = changed;
                            fs.writeFile(`src/data/cards.json`, JSON.stringify(database, null, 4), (err) =>{
                                if (err) {
                                    console.log(`error: ${error}`);
                                    message.reply("Oups... Quelque chose s'est mal passé !!");
                                }else{
                                    message.reply(`Votre prénom a été changé en ${database[i].firstName}`);
                                }
                            });
                        }
                        else if (toChange == "sexe"){
                            database[i].sexe = changed;
                            fs.writeFile(`src/data/cards.json`, JSON.stringify(database, null, 4), (err) =>{
                                if (err) {
                                    console.log(`error: ${error}`);
                                    message.reply("Oups... Quelque chose s'est mal passé !!");
                                }else{
                                    message.reply(`Votre sexe a été changé en ${database[i].sexe}`);
                                }
                            })
                        }
                        else if (toChange == "age"){
                            database[i].age = changed;
                            fs.writeFile(`src/data/cards.json`, JSON.stringify(database, null, 4), (err) =>{
                                if (err) {
                                    console.log(`error: ${error}`);
                                    message.reply("Oups... Quelque chose s'est mal passé !!");
                                }else{
                                    message.reply(`Votre age a été changé en ${database[i].age}`);
                                }
                            })
                        }
                        else if (toChange == "passion"){
                            database[i].passion = changed;
                            fs.writeFile(`src/data/cards.json`, JSON.stringify(database, null, 4), (err) =>{
                                if (err) {
                                    console.log(`error: ${error}`);
                                    message.reply("Oups... Quelque chose s'est mal passé !!");
                                }else{
                                    message.reply(`Vos passions ont été changés en ${database[i].passion}`);
                                }
                            })
                        }
                        else if (toChange == "autre"){
                            database[i].otherInfos = changed;
                            fs.writeFile(`src/data/cards.json`, JSON.stringify(database, null, 4), (err) =>{
                                if (err) {
                                    console.log(`error: ${error}`);
                                    message.reply("Oups... Quelque chose s'est mal passé !!");
                                }else{
                                    message.reply(`Vos autres informations ont été changés en ${database[i].otherInfos}`);
                                }
                            })
                        }
                        else message.reply("Le champs n'est pas valide, choisissez entre nom, prénom, sexe, age, passion, autre");
                    }
                }
            }
        });
        
    }
});