const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
    client.channels.cache.get('697083905580204032').messages.fetch("699051219699892358").then(message => {
        const embed = new Discord.MessageEmbed()
            .setColor("#1FCEE3")
            .setDescription('If some emojis are missing restart discord by doing \`CTRL + R\` \nPlease only react once as the bot may be slow\nIf the reactions are currently not working or experiencing issues, please come back and try again later.');

        message.edit(embed);
    })
}
//name this whatever the command name is.
module.exports.help = {
    name: "editembed"
}