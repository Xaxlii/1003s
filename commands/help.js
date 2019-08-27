const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "344105580631293962") return message.channel.send("Hey! You're not me")
    const embed = new Discord.RichEmbed()
    .setColor("#228B22")
    .addField("Netrix selfbots", "This is its functionalitys")
    .addField("Prefix", `**${botconfig.prefix}**`)
    .addField("Commands", "*.*")
    .addField("setstreaming", `Sets your status to streaming **x** usage: ${botconfig.prefix}setstreaming **x**`)
    .addField("setwatching", `Sets your status to watching **x** usage: ${botconfig.prefix}setwatching **x**`)
    .addField("setplaying", `Sets your status to playing **x** usage: ${botconfig.prefix}setplaying **x**`)
    .addField("setlistening", `Sets your status to listening **x** usage: ${botconfig.prefix}setlistening **x**`)
    .addField("help", "`sends a message with all the commands`")
    .addField("Need any extra help dm the creator of the bot his tag is just down below", "`Xaxlii#1337`")
    .setFooter("Selfbot made by | Xaxlii#1337")
    message.channel.send(embed);
}

module.exports.config = {
    name: "help",
    description: "says hello",
    usage: "'help",
    accessableby: "Members",
    aliases: ["k"]
}