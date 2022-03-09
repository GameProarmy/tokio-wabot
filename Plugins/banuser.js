let handler = async (m, { conn, text }) => {
    if (!text) throw 'Keine nummer erkannt!'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag one'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `User erfolgreich von bot gebannt`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
