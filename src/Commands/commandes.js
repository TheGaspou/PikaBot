const Command = require("../Structures/Command.js");
const assets = require("../data/assets.json");
const {MessageEmbed} = require("discord.js");
module.exports = new Command({
    name: "help",
    description: "Show the commmand's helper",

    async run(message, args, client){
        const embed = new MessageEmbed();
        embed.setColor("RANDOM");
        embed.setTitle("Toutes les commandes / All commands");
        embed.setAuthor( assets.attributes.name , "https://cdn.discordapp.com/avatars/879464820221558884/a704f5b32679db3b624437e4e4eeb7d4.webp?size=128")
        embed.setFooter(assets.attributes.description);
        embed.addFields(
            {name: "=ping", value: "Affiche la latence en ms :nerd:", inline: true},
            {name: "=help", value: "Affiche toutes les commandes :grin:", inline: true },
            {name: "=register", value: "Une commande complexe qui permet de créer une carte de présentation de toi !!!"},
            {name: "=carte @<quelqu'un>", value: "Permet de voir la carte créer par celui que tu ping !!\n Pour en faire une : =register"},
            {name: "=cartedit", value: "Une commande permettant de modifier sa carte, elle peut aussi être utile pour s'enregistrer (=register) plus facilement puisqu'elle ne demande pas de syntaxe difficile à respecter !! :grin: "}
        )
        embed.setURL("https://fr.pornhub.com/view_video.php?viewkey=ph5c75286c26a70")
        message.reply({embeds: [embed]})
    }
})