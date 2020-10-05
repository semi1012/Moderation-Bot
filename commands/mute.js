const { MessageEmbed } = require('discord.js');
const { execute } = require("./kick");

module.exports = {
    name: "mute",
    description: "mute someone",
    usage: "mute <@mention> <reason>",
    async execute(client, message, args) {

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("Sorry, but you do not have permission to mute anyone.");
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission to manage roles");
        }

        const user = message.mentions.members.first();

        if(!user) {
            return message.channel.send("Please mention the member you want to mute.");
        }

        if(user.id === message.author.id) {
            return message.channel.send("I won't mute yourself");
        }

        let reason = args.slice(1).join(" ")

        if(!reason) {
            return message.channel.send("Please give a reason to mute a member.")
        }
        
        let muterole = message.guild.roles.cache.find(x => x.name == "Muted");

        if(user.roles.cache.has(muterole)) {
            return message.channel.send("Given user is already muted");
        }

        if(!muterole) {
            return message.channel.send("this channel does not have a role named 'Muted'.");
        }

        user.roles.add(muterole)

        await message.channel.send(`You muted **${message.mentions.users.first().username}** for \`${reason}\``);

        user.send(`You have been muted in **${message.guild.name}** for \`${reason}\``)
    }
}