const commando = require('discord.js-commando');

module.exports = class Roll extends commando.Command{
    constructor(client){
        super(client,   {
                            name: 'roll',
                            group: 'misc',
                            memberName: 'roll',
                            description: 'roll a dice!',

                            args: [
                                {
                                    key:'size',
                                    label:'size',
                                    prompt:'what size dice do you want to roll?',
                                    type:'integer'
                                }
                            ]
                        });
    }

    async run(msg, args){
        var o = Math.floor(Math.random()*args['size'] + 1);
        return msg.reply('You rolled a ' + Math.abs(o) + ' on a D'+Math.abs(args['size'])+'!');
    }
}
