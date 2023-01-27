const {Client, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json');
const roleClaim = require('./utils/role-claim');
const client = new Client( { intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions] } );

client.once('ready', () => {
    console.log('Ready!');
    roleClaim(client);
});

client.login(token);
