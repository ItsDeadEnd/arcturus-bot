const commando = require('discord.js-commando');
const WClient = require('node-wolfram');

const wolfram = new WClient('6PTAH7-P2LVJQ8KR4');

module.exports = class Wolfram extends commando.Command{
    constructor(client){
        super(client,   {
                            name: 'wolfram',
                            aliases: ['solve'],
                            group: 'math',
                            memberName: 'wolfram',
                            description: 'Ask WolframAlpha a question',
                            examples: ['wolfram 2*2'],
                            args:[{
                                key: 'query',
                                prompt: 'The question to be asked.',
                                type: 'string'
                                }]
                        });
    }

    async run(msg, args){
        wolfram.query(args[0], function(err, result){
            
        });
    }
}
