const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "344105580631293962") return message.channel.send("Hey! You're not me")
    const embed = new Discord.RichEmbed()
    .setColor("#228B22")
    .setDescription(args.join(" "))
    .setFooter("Selfbot made by | Xaxlii#1337")
    message.channel.send(embed);
}

module.exports.config = {
    name: "sendembed",
    description: "says hello",
    usage: "?sendembed",
    accessableby: "Members",
    aliases: ["k"]
}