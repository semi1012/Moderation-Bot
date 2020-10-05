const { MessageEmbed } = require('discord.js');
const { execute } = require('./kick');

module.exports = {
    name: "invite",
    category: "info",
    description: "invite to the bot server",
    
    async execute(client, message, args) {
        const embed = new MessageEmbed()

        .setColor('RED')
        .setTitle('Invite to server')
        .setURL('https://discord.gg/WW7xMAT')
        .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription('here\'s an Invite to the bot server.')
        .setTimestamp()
        .setFooter('powered by myself')
        .setImage('https://cdn.discordapp.com/attachments/737801028195582025/761984605057450025/y0s.png')
        .addFields(
            {
                name: "Invite: ",
                value: 'https://discord.gg/WW7xMAT',
                inline: true,
            }
        )
        await message.channel.send(embed)
    }
}