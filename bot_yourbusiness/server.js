const Discord = require("discord.js");
const client = new Discord.Client();
function presencia(){
  client.user.setPresence({
     status: "online",
     game: {
        name: "| 𝐁𝐄𝐓𝐀 𝐓𝐄𝐒𝐓𝐄𝐑",
        type: "PLAYING"
     }
  });
}

client.on("ready", function () {
    console.log("Bot encendido y listo para dar ayuda");
    presencia();
  });
 
 client.on("message", (message) => {
   if(message.content.startsWith("/support")) {
     message.channel.send("**𝐁𝐎𝐓 𝐁𝐄𝐓𝐀**");
   }
 
 });

 client.on("message", (message) => {
  if(message.content.startsWith("/help")) {
    message.channel.send("**𝐏𝐎𝐑 𝐄𝐋 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 𝐄𝐒𝐓𝐄 𝐁𝐎𝐓 𝐄𝐒𝐓𝐀 𝐄𝐍 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐁𝐄𝐓𝐀**");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("/dormir")) {
    message.author.send("**𝐍𝐎 𝐓𝐄 𝐏𝐔𝐄𝐃𝐎 𝐋𝐄𝐄𝐑 𝐔𝐍 𝐂𝐔𝐄𝐍𝐓𝐎 𝐀𝐍𝐓𝐄𝐒 𝐃𝐄 𝐃𝐎𝐑𝐌𝐈𝐑**");
  }

});

 client.login("Nzc4MDIxMTY4ODMzMjMyOTM3.X7L6rQ.Xn167LDuFlOzHbd2ki5t8b_dalo");