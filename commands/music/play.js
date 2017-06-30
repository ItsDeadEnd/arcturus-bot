const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

module.exports = class Play extends commando.Command{
    constructor(client){
        super(client,   {
                            name: 'play',
                            group: 'music',
                            memberName: 'play',
                            description: 'add a song to the music queue',
                            args: [
                                {
                                    key:'song',
                                    prompt:'what song do you want to play',
                                    type:'string'
                                }
                            ]
                        });
    }

    async run(msg, args){

    }
}
