 const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);  
});

client.on('ready', async() => {
var server = "592756954842136643"; // ايدي السررفر
var channel = "592756954854719586";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Superspam , Superspam , Superspam , Superspam, Magic   , ')
    },400);
})

client.login(process.env.BOT_TOKEN);
