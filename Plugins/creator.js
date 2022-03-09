function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '4915905890216', '꧁༺「✯ꌛ℮ꁣꁣꊛꈛ✯ī.am 」༻꧂⁩', m)
  conn.reply(m.chat, `wa.me/+4915905890216`, m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
