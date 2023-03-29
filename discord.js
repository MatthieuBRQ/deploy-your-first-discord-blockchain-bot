const Discord = require('discord.js'); // Importation de la bibliothèque discord.js
const client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      // Ajoutez d'autres intents ici si nécessaire
    ],
  });
const prefix = "/"; // Le préfixe des commandes

client.on('ready', () => { // Lorsque le bot est connecté et prêt
  console.log(`Logged in as ${client.user.tag}!`); // Affiche un message dans la console
});

client.on('message', message => { // Lorsqu'un message est reçu
  if (!message.content.startsWith(prefix) || message.author.bot) return; // Si le message ne commence pas par le préfixe ou s'il a été envoyé par un bot, ne rien faire

  const args = message.content.slice(prefix.length).trim().split(/ +/); // Sépare la commande et les arguments
  const command = args.shift().toLowerCase(); // Récupère la commande et la transforme en minuscules

  if (command === 'ping') { // Si la commande est "ping"
    message.reply('Pong!'); // Répond avec "Pong!"
  } else if (command === 'server') { // Si la commande est "server"
    message.channel.send(`Nom du serveur: ${message.guild.name}\nNombre de membres: ${message.guild.memberCount}`); // Envoie le nom du serveur et le nombre de membres dans le canal où la commande a été envoyée
  } else if (command === 'user-info') { // Si la commande est "user-info"
    message.channel.send(`Ton pseudo: ${message.author.username}\nTon ID: ${message.author.id}`); // Envoie le pseudo et l'ID de l'utilisateur qui a envoyé la commande dans le canal où la commande a été envoyée
  }
});

client.login(MTA3NTgzNDAxNzk0NzA3ODY1Ng.Gde-Xa.Xt1wbOrNYt6fNeHqPn7DGkag0ZnvhbUiB0IFL0); // Connexion du bot à Discord avec un jeton (à remplacer par votre propre jeton)
