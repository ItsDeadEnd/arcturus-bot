const commando = require('discord.js-commando');

module.exports = class Wolfram extends commando.Command{
    constructor(client){
        super(client,   {
                            name: 'wolfram',
                            aliases: ['solve'],
                            group: 'math',
                            memberName: 'wolfram',
                            description: 'Ask WolframAlpha a question',
                            examples: ['wolfram 2*2']
                            args:[{
                                key: 'query',
                                prompt: 'The question to be asked.',
                                type: 'string'
                                }]
                        });
    }

    async run(msg, args){

    }
}
