 const Discord = require('discord.js');
const client = new Discord.Client();

 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By King_Power");


client.on("ready", () => {
let channel =     client.channels.get("id room")
setInterval(function() {
channel.send(`spam spam spam`);
}, 25)
})

client.login(process.env.BOT_TOKEN);
