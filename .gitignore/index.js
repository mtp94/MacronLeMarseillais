const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("C bn oklm")
})

bot.login(proccess.env.TOKEN)

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
  })

 

  bot.on('message', message => {
    if (message.content === 'alexandre') {
      message.reply('la couille')
    }
  })

  bot.on('message', message => {
    if (message.content === 'bvn') {
      message.reply('yo les gens salem alekoum a tous mes frère et bvn sur mon serveur discord')
    }
  })

  bot.on('message', message => {
    if (message.content === 'bvn') {
    message.reply('yo les gens salem alekoum a tous mes frère et bvn sur mon serveur discord');
  }
});



  bot.on('message', message => {
    if (message.content === 'alex') {
      message.reply('le sexe')
    }
  })

  bot.on('message', message => {
    if (message.content === 'enzo') {
      message.reply('le gros gay')
    }
  })

  bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('On passe le Salam a ' + member.displayName)
    }).catch(console.error)
  })


  bot.on('message', message => {
    if (message.content === 'yo les ramoutcho') {
      message.reply('yo mon ramoutcho préféré')
    }
  })

  bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenu sur Celestel ' + member.displayName + ` amuse toi bien !`)
    }).catch(console.error)
  })
