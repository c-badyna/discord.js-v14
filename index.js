// This handler was made by vike.y#9306, specially for ARTEMKA PUTISHESTINIK#0391
// Visit github vike.y

require('colors');

const { Client, Collection } = require("discord.js");
const client = new Client({
    intents: 3276543
});

const config = require('./config/example.json')
client.login(config.token);

const fs = require('fs');
client.commands = new Collection( );
client.commands_array = [ ];

require('./handlers/events').init(client);


 // ***
module.exports = client;