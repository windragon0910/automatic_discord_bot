const Discord = require('discord.js')

module.exports = {
    name:'setyt',
    description:'Sets YT notifs for a server',

    async execute(message, args,client){

       
        
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Invalid Perms')
        if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send('I do not have perms for this command')
        const yt = (args[0]);
        const channel = message.mentions.channels.first() || client.channels.cache.get(args[1])  || message.channel
        let Notification = args.slice(3).join(" ") || client.YTP.options.defaults.Notification;
        let preventDuplicates = true;


        if(!yt.startsWith('https://www.youtube.com/')) return message.channel.send('Invalid Channel Link, Please Only Enter Youtube Channels')

        client.YTP.setChannel(yt,channel, Notification);


        message.channel.send(`Youtube Poster for channel ${yt} set to ${channel}`)



    }

}