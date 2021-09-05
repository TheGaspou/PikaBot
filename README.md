# Pikabot
A french discord bot. // Un bot discord en français.
This bot is used to create some "cards" which are made for users to meet other ones. <br/>
A lot of answers are used to be quite cringe, so you can change the strings if you want it to be cringeless. <br/>
// <br/>
Ce bot est fait pour créer des "cartes" faites pour permettre aux utilisateurs d'en rencontrer d'autres. <br/>
Une bonne partie des réponses sont faîtes pour être gênantes, vous pouvez changez les chaînes de caractères des réponses si vous voulez être moins gêné. 

# Requirements / Configuration requise
- node.js 
# Install / Installation
1 . <br/> You have to create a discord app with discord develloper portal then create a bot and copy it's token. Create a config.json file and paste the token. <br/>
// <br/>
Vous devez créer une application discord sur le site discord develloper portal puis créez un bot et copiez son token. Ensuite créez une fichier config.json et collez le token.
<br/> <br/>
2. <br/> Install discord.js with the following command on the shell => npm install discord 
<br/> <br/>
3 . <br/> You have to create a cards.json in this location => data/cards.json <br/>
// <br/>
Créez un fichier cards.json à la location => data/cards.json <br/>

4 . <br/> in index.js add an channel id (replace with the channel that you want the bot to say hi when he is connected [warning it will delete the last 10 messages, if you don't want you can delete the clearPikaStatusChannel() function in index.js]) in the function bot.on("ready") => bot.channels.cache.get("change here")
in quitbot.js change this => client.channels.cache.get("change here with the same thing than before") and change this => if (message.author.id == "change here with the id of the bot's owner")  <br/>
// <br/> 
Dans le fichier index.js ajoutez un channel id (remplacez avec l'id du salon dans lequel vous voulez que le bot dise bonjour quand il se connecte [attention cela va supprimer les 10 derniers messages du salon, si vous ne voulez pas supprimez la fonction clearPikaStatusChannel() inclus dans ce même fichier]) dans la fonction bot.on("ready") => bot.channels.cache.get("Changez ici")
Dans le fichier quitbot.js changez cela => client.channels.cache.get("changez ici avec la même chose qu'avant") et changez également cela => if (message.author.id == "changez ici avec l'id du possesseur du bot")  <br/> <br/>

If you are not french, you should change all the strings in the projects file.

# All Commands / Toutes les commandes
- =ping => gives the ping / donne le ping 
- =help => display all the commands / Montre toutes les commandes
- =register => Permits the user to create a card (command will be easier to use, work in progress)/ Permet à l'utilisateur de créer la carte (la commande va être plus à utiliser, attendez quelques mise à jour)
- =carte @<someone/quelqu'un> => Display the card of someone that has been registred / Montre la carte de quelqu'un qui s'est enregistré.
- =cartedit <nom/prénom/sexe/age/passion/autre> <new/nouveau> => Permits the user to change it's card element (element are in french change it in the code if you want) / Permet à l'utilisateur de changer un élément de sa carte.
<br/>
<br/>
PikaBot 0.1 
