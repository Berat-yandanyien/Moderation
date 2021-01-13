const { MessageEmbed } = require('discord.js');
const config = require("../ayarlar.json")

exports.run = async(client, message, args) => {
  
if(!["764893496682348564","764893494296051723","764893503934300160","764893501329637396","794285242974208020"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} <a:Cros:788055287768678421>**Bir Hata Oluştu**<a:Cros:788055287768678421>\n\`Komutu kullanmak için yetkin bulunmamakta.\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const kanal = message.member.voiceChannel
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return;
if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, <a:Cros:788055287768678421> Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
message.guild.member(member.id).voice.setChannel(null)
 
   message.channel.send(new MessageEmbed().setDescription(`${member} Kullancısının ${message.author} Tarafından Bağlantısı Kesildi.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#7289D').setTimestamp()).then(x => x.delete({timeout: 10000}));
}
exports.conf = { 
enabled: true, 
guildOnly: true, 
aliases: ["ses-kes",'bk']
}

exports.help = {
name: "kes" 
}

//code creator: sadxmamy