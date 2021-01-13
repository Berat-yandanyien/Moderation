const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let kişi = message.mentions.members.first()
  let rol = ayarlar.vipROL
  
  if(![].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("VIEW_AUDIT_LOG"))) 
    return message.reply("Komutu kullanmak için yetkin bulunmamakta.");  
  
  
  if(!kişi) return message.channel.send('Vip alacağın kişiyi etiketlemelisin.')
  var role = message.guild.roles.cache.find(role => role.id === rol); 
  kişi.roles.remove(role);
  message.channel.send(`**${kişi.user.tag}** adlı kullanıcının viprolü alındı.`).then(m =>m.delete({timeout : '4000'}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-al','vip al'],
  permLevel: 0
};

exports.help = {
  name: 'vipal'
};