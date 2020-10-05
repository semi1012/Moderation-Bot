const { MessageEmbed } = require('discord.js');
const { execute } = require("./kick");

module.exports = {
    name: "unmute",
    description: "unmute someone",
    usage: "mute <@mention> <reason>",
    async execute(client, message, args) {

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("Sorry, but you do not have permission to unmute anyone.");
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission to manage roles");
        }

        const user = message.mentions.members.first();

        if(!user) {
            return message.channel.send("Please mention the member you want to unmute.");
        }

        let muterole = message.guild.roles.cache.find(x => x.name == "Muted");

        if(user.roles.cache.has(muterole)) {
            return message.channel.send("Given user does not have muted role.");
        }

        user.roles.remove(muterole)

        await message.channel.send(`**${message.mentions.users.first().username}** is unmuted`)

        user.send(`You are now unmuted from **${message.guild.name}**`);
    }
}