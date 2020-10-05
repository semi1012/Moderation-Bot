module.exports = {
    name: 'av',
    aliases: ["avatar", "pfp"],
    category: "info",
    description: 'display avatar/pfp of the user',
    async execute(client, message, args) {
        if(args[0]) return message.channel.send(client.users.cache.get(args[0]).displayAvatarURL());
        message.channel.send(message.author.displayAvatarURL());
    }
}