const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(!['764893496682348564',"764893494296051723","764893503934300160","764893501329637396","794285242974208020"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\  
  
  
let ramo;
let ramo1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let ramo2 = message.guild.members.cache.get(args[0]);
if(!ramo1) return message.channel.send(new MessageEmbed() .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setTimestamp().setColor('0x800d0d').setDescription(`Bir ID Girmelisin Veya Kullanıcı Etiketlemelisin.`))
if (ramo1) {
ramo = ramo1;
}
if (ramo2) {
ramo = ramo2;
}
if (!ramo) {
ramo = message.member;
}
let ses = ramo.voice.channel;
if (!ses) {
 message.channel.send(new MessageEmbed().setColor('0x800d0d') .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})) .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("**<@"+ramo.id+"> Bir Sesli Kanalda Değil!**"));
}
if (ses) { 
message.channel.send(new MessageEmbed().setColor('#7289D') .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})) .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"**<@"+ramo.id+"> İsimli Kişi `"+ses.name+"` İsimli Kanalda!**"
));
}};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sorgula",'ses'],
    permLevel: 0,
    name: "sorgula"
  }
  
  exports.help = {
    name: "kontrol"
  };
  
  