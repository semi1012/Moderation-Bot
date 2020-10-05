const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "clear",
    category: "Moderation",
    description: "bulkdelete messages",
    async execute(client, message, args) {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send(
            `${message.author.username} You do not have the right permissions to do this, if you think this is an error please contact VapiX#9672 on discord or a server staff`
        );
    if (!args[0]) {
        return message.channel.send(`Please enter a amount of 1 to 100`)
    }
    
    let deleteAmount;

    if (parseInt(args[0]) > 100 ) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    await message.channel.bulkDelete(deleteAmount, true);
    }
}
