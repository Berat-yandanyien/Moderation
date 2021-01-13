const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(!["764893496682348564","764893494296051723","764893503934300160","764893501329637396","794285242974208020"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
    return message.reply("Komutu kullanmak için yetkin bulunmamakta.");

  if (!message.member.voice.channel)
    return message.reply("Ses kanalında olman lazım!");
  let pixelien = message.mentions.members.first();
  if (!pixelien)
    return message.reply(
      "Bir Kullanıcı Belirt."
    );
  if (!pixelien.voice.channel)
    return message.reply("Etiketlenen Kullanıcı Ses Kanalında Değil.");

  pixelien.voice.setChannel(message.member.voice.channelID);
  message.channel.send("<@"+pixelien + "> İsimli Kişi Yanına Taşındı.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "çek"
};


