module.exports = {
    name: 'ban',
    description: 'ban a member',
    execute (message) {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if(
         member.hasPermission('BAN_MEMBERS')
        ) {
            const target = message.mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.ban()
                message.channel.send(`${tag} The user has been banned.`)
            } else {
                message.channel.send(`${tag} please specify someone to ban`)
            }
        } else {
            message.channel.send(
                `${tag} you do not have permission to use this command`               
            )
        }
    }
}
