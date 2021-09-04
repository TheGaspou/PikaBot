const Command = require("../Structures/Command.js");
const Card = require("../data/cards.json");
const fs = require("fs");
const { type } = require("os");


class Carte{
    constructor(id, name, fn, s,  a, p, of, ps, av){
        this.userId = id;
        this.name = name;
        this.firstName = fn;
        this.sexe = s;
        this.age = a;
        this.passion = p;
        this.otherInfos = of;
        this.pseudo = ps;
        this.avatar = av;
    }
}



module.exports = new Command({
    name: "register",
    description: "s'inscrit sur la 'plateforme' de rencontre",
    
    async run(message, args, client){
        if (!args[1]){
            message.reply(`${message.author}Pour t'enregistrer retape la commande puis écrit tes réponses en les séparant par un espace, si tu veux mettre un espace dans tes réponses, sépare par un '.' : \nQuel est ton nom ? Ton prénom ? Ton sexe ? Ton age ? Tes passions ? As tu d'autres choses à dire ? \n \n  Si tu veux modifier une réponse ou pas te compliquer pour les espaces des réponses longues mets une fausse réponse puis modifie là avec =cartedit <ce que tu veux changer> <la réponse>, pas obliger de se soucier des espaces avec cette commande !!! :grin: \n\n(exemple de réponse: =register Pika Bot 10 Code.Amis Je.suis.beau)`);
        }
        else{

            if (args.length < 7) message.reply("Tu n'as pas tout répondu !!!");
            else{
                const userId =  message.author.id;
                const name = args[1];
                const firstName = args[2];
                const sexe = args[3]
                const age = args[4];
                let p = args[5];
                let of = args[6];
                p = p.split('.');
                of = of.split('.');
                let passion;
                let otherInfos;
                if (p instanceof Array){
                    p.forEach(it => {
                        passion += it + " ";
                    });
                    passion = passion.split('undefined');
                    if (passion instanceof Array){
                        passion = passion[1];
                    }
                }else{
                    passion = p;
                }
                if (of instanceof Array){
                    of.forEach(it => {
                        otherInfos += it + " ";
                    });
                    otherInfos = otherInfos.split('undefined');
                    if (otherInfos instanceof Array){
                        otherInfos = otherInfos[1];
                    }
                }else{
                    otherInfos = of;
                }
                

                fs.readFile(`src/data/cards.json`, 'utf-8', (err, data)=>{
                    if (err) console.log(`Error ${err}`);
                    else{
                        let exist = false;
                        const databases = JSON.parse(data);
                        databases.forEach(it =>{
                            if (it.userId == userId){
                                message.reply("Vous avez déjà créer un compte.");
                                exist = true;
                            }
                        });

                        if (!exist){
                            databases.push(new Carte(userId, name, firstName,sexe, age, passion, otherInfos, message.author.username, message.author.avatar));

                            fs.writeFile(`src/data/cards.json`, JSON.stringify(databases, null, 4), 'utf-8', (err) => {
                                if (err) console.log(`Error ${err}`);
                                else console.log("Success");
                            });
                            message.reply("C'est bon bg !");
                        }
                    }
                });
            }      
        }
        
    }
});