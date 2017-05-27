const commando = require('discord.js-commando');

module.exports = class Bing extends commando.Command{
    constructor(client){
        super(client,   {
                            name: 'bing',
                            group: 'misc',
                            memberName: 'bing',
                            description: 'bing bong'
                        });
    }

    async run(msg, args){
        return msg.reply('bong');
    }
}
