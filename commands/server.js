const { MessageEmbed }= require('discord.js');
const { truncate } = require('fs');

module.exports = {
    name: "server",
    category: "info",
    description: "show info about the server",
    async execute(client, message, args) {

            let region;
            switch (message.guild.region) {
                case "europe":
                    region = 'EU Europe';
                    break;
                case "us us-east":
                    region = 'US us-east';
                    break;
                case "us-west":
                    region = 'US us-west';
                    break;
                case "us-south":
                    region = 'US us-south';
                    break;
                case "us-central":
                    region = 'US us-central';
                    break;
             }

                const embed = new MessageEmbed()
                    .setThumbnail(message.guild.iconURL({dynamic : true}))
                    .setColor('#f3f3f3')
                    .setTitle(`${message.guild.name}server stats`)
                    .addFields(
                        {
                            name: "Owner: ",
                            value: message.guild.owner.user.tag,
                            inline: true
                        },
                        {
                            name: "Members: ",
                            value: `There are ${message.guild.memberCount} users`,
                            inline: true 
                        },
                        {
                            name: "Members Online: ",
                            value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online`,
                            inline: true
                        },
                        {
                            name: "Total bots: ",
                            value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots`,
                            inline: true 
                        },
                        {
                            name: "Creation Date: ",
                            value: message.guild.createdAt.toLocaleDateString("en-us"),
                            inline: true
                        },
                        {
                            name: "Roles Count: ",
                            value: `There are ${message.guild.roles.cache.size} roles in this server`,
                            inline: true 
                        },
                        {
                            name: "Region: ",
                            value: region,
                            inline: true 
                        },
                        {
                            name: "Verified: ",
                            value: message.guild.verified ? 'Server is verified' : `Server is not verified`,
                            inline: true 
                        },
                        {
                            name: "Boosters: ",
                            value: message.guild.permiumSubscriptionCount >= 1 ? `There are ${message.guild.permiumSubscriptionCount} Boosters` : `There are no boosters`,
                            inline: true 
                        },
                        {
                            name: "Emojis: ",
                            value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis` : 'There are no emojis',
                        }
                    )
                await message.channel.send(embed)
    }
}