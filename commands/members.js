const { execute } = require("./help");

module.exports = {
    name: "members",
    category: "info",
    description: "tell how many members are in this server",
    async execute(client, message, args) {
        message.channel.send(`This server currently have **${message.guild.memberCount}** members`)
    }
}