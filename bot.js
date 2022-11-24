const { Telegraf } = require('telegraf');

const bot = new Telegraf('5617904218:AAG9ztrx9SqnSO1OwgYu7OnDn8lJN7HgyrM');
bot.start((ctx) => ctx.reply('selamat datang'));
bot.help((ctx) => ctx.reply('Ada Yang Bisa Gw Bantu'));
bot.on('sticker',(ctx) => ctx.reply('👍'));
bot.hears('km siapa', (ctx) => ctx.reply('aku adalah saitama'));
//
bot.on('text',(ctx) => ctx.reply('i am caming mamang'));
//
bot.mention('noufalsjp',(ctx) => ctx.reply('itu noufal bro'))

bot.launch();

