let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝑪𝒔𝒂𝒓𝒇𝒇𝒙𝑩𝒐𝒕: ${pesan}`
let teks = `Creador Wa.me/56922224359 SI QUIERES BOT COMUNICAME
𝑫𝒆𝒔𝒑𝒊𝒆𝒓𝒕𝒆𝒏 𝑷𝒖𝒕𝒐𝒔 - 𝑪𝒔𝒂𝒓𝒇𝒇𝒙𝑩𝒐𝒕 \n\n❏ ${oi}\n❏ 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🐉 @${mem.id.split('@')[0]}\n`}
teks += `➥𝑪𝒔𝒂𝒓𝒇𝒇𝒙𝑩𝒐𝒕`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
