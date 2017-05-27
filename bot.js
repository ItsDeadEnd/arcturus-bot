//set bot dependencies
const discord = require('discord.js');
const commando = require('discord.js-commando');
const path = require('path');

//initialize client var
const bot = new commando.Client({owner: '225409009941872640', commandPrefix: '-'});

//manage command registry
bot.registry
    //register all command groups here
    .registerGroup('misc', 'Miscellaneous commands')
    .registerGroup('math', 'Math commands')
    //add default commands (like help)
    .registerDefaults()
    //add the file in which individual commands will be written
    .registerCommandsIn(path.join(__dirname, 'commands'));

//login with token (you should probably do somthing about this)
bot.login('MzE1NjkwNDQ3OTU3Nzg2NjI1.DAp7bQ.7ZHhpMDp0__bhSyCi6uKg0MbwSs')
