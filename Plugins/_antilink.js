let handler = m => m

let linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply
    if (isAdmin) return m.reply
    if (!isBotAdmin) return m.reply('*Bot ist kein admin mache ihn admin -_-*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol send your own group link :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
