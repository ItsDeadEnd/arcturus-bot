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
            //copied  from https://www.npmjs.com/package/node-wolfram
            if(err)
                console.log(err);
            else{
                for(var a=0; a<result.queryresult.pod.length; a++){
                    var pod = result.queryresult.pod[a];
                    console.log(pod.$.title,": ");
                    for(var b=0; b<pod.subpod.length; b++){
                        var subpod = pod.subpod[b];
                        for(var c=0; c<subpod.plaintext.length; c++){
                            var text = subpod.plaintext[c];
                            console.log('\t', text);
                        }
                    }
                }
            }
        });
    }
}
