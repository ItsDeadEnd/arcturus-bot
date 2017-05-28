const commando = require('discord.js-commando');

module.exports = class sum extends commando.Command{
    constructor(client){
        super(client,   {
                            name: 'sum',
                            aliases: ['add'],
                            group: 'math',
                            memberName: 'sum',
                            description: 'Add a number to another number. exciting stuff...',
                            examples: ['add 1 1'],
                            args: [
                                {
                                    key: 'num1',
                                    //label: 'num1',
                                    prompt: 'the first of the two numbers to be added.',
                                    type: 'float'
                                },
                                {
                                    key: 'num2',
                                    prompt: 'the second of the two numbers to be added.',
                                    type: 'float'
                                }
                            ]
        });
    }

    async run(msg, args){
        var sum = args['num1'] + args['num2'];
        return msg.reply('the sum of ' + args['num1'] + ' and ' + args['num2'] + ' is ' + sum);
    }
}
