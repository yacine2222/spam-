const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Yacine");

client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});


client.on("ready", () => {
let channel =     client.channels.get("511953071363063811")
setInterval(function() {
channel.send(`**spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam**`);
}, 25)
})




client.login(process.env.TOKEN);// لا تغير فيها شيء
