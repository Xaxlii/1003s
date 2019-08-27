const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "344105580631293962") return message.channel.send("Hey! You're not me")
    bot.user.setActivity(args.join(" "), { type: "WATCHING"})
}
module.exports.config = {
    name: "setwatching",
    description: "says hello",
    usage: "*setwatching",
    accessableby: "Members",
    aliases: ["k"]
}