const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: "ping",
    description: "says the ping for the bot.",

    async execute(client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`);


        message.channel.send(ping);
    }
}