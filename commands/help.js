const pagination = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { execute } = require('./clear');

module.exports = {
    name: "help",
    description: "The help command, what did you exepect?",

    async execute(client, message, args) {

        //sort your command Into categories, and make seperate embed for different categories

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`;kick`', 'Kicks a member from your server via mention or ID.')
        .addField('`;ban`', 'Bans a member from your server via mention or ID.')
        .addField('`;clear`', 'Bulkdelete\'s messages from 1 - 100.')
        .addField('`;mute`', 'Mute\'s a member In the server.')
        .addField('`;unmute`', 'Unmute\'s a member in the server.')
        .setTimestamp()

        const info = new Discord.MessageEmbed()
        .setTitle('Info')
        .addField('`;av`', 'Sends the avatar of a person in the chat via mention or ID.')
        .addField('`;invite`', 'Invites you to the bot\'s server.')
        .addField('`;members`', 'Tell you how many members are in this server.')
        .addField('`;ping`', 'Tells you the bot\'s API ping.')
        .addField('`;server`', 'Show Info about the server.')
        .addField('`;user`', 'Show Info about a user')
        .setTimestamp()

        const pages = [
            moderation,
            info
        ]

        const emojiList = ["⏮️", "⏭️"];
        
        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}