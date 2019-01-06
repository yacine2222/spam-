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
     var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }

 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on("ready", () => {
let channel =     client.channels.get("531565085974593536")
setInterval(function() {
channel.send(`**spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam**`);
}, 25)
})




client.login(process.env.TOKEN);// لا تغير فيها شيء
client.login(process.env.TOKEN2);// لا تغير فيها شيء
