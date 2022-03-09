let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n' + users.map(v => '✯ @' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.help = ['everyone']
handler.tags = ['group']
handler.command = /^everyone$/i

handler.admin = true
handler.group = true

module.exports = handler
