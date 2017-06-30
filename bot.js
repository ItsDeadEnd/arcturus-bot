//set bot dependencies
const discord = require('discord.js');
const commando = require('discord.js-commando');
const path = require('path');
const ini = require('ini');
const fs = require('fs');

//get options from file
var options = ini.parse(fs.readFileSync('./options.ini', 'utf-8'));

//assign options to variables
var token = options.bot_token;
var oid = options.owner_id;
var prefix = options.command_prefix;

//initialize client var
const bot = new commando.Client({owner: oid, commandPrefix: prefix});

//manage command registry
bot.registry
    //register all command groups here
    .registerGroup('misc', 'Miscellaneous commands')
    .registerGroup('math', 'Math commands')
    .registerGroup('music', 'Music Commands')
    //add default commands (like help)
    .registerDefaults()
    //add the file in which individual commands will be written
    .registerCommandsIn(path.join(__dirname, 'commands'));

//login with token (you should probably do somthing about this)
bot.login(token);
