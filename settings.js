const fs = require('fs')
const pack = require('./package.json')
global.pairing = false // false = pairing code | true = scan QR
global.PaiCode = "PAIRCODE" // Wajib 8 digit pairing code (custom)
global.broswer = "Firefox" // Server Browser 
global.sessionName = "session" // Nama file session

global.botname = "Aupa Bot" // Bot name
global.ownername = "Aupa Macak Casual" // Owner name
global.owner = "6285236804124" // Owner number
global.botNumber = "6285823603677" //  Bot number
global.version = pack.version // Version

global.packname = "stiker pack" // Sticker packname 
global.author = "by aupabot" // Sticker author

global.wm = "Aupaxyz code" // Watermark thumbnail
global.chjid = "120363385712257684" // Channel Id Gaush pakai @
global.gcjid = "120363385712257684" // Group Id Gaush pakai @
global.sch = "https://whatsapp.com/channel/0029Vamlg4UBPzjQtN7FPL0S"
global.sgc = "https://chat.whatsapp.com/BigxKARbkkgK4d5JIPosQ7"
global.thumb = "https://files.catbox.moe/yrw8je.png" // Thumbnail bot 
global.payment = {
  dana: "-", // Dana
  gopay: "-", // Gopay
  ovo: "-", // Ovo
  qris: "https://files.catbox.moe/t3ig7y.png"
}

global.domain = "http://github.com/aupax/" // Domain harus diakhiri tanda [ / ]
global.apikey = "" // Plta
global.capikey = "" // Pltc
global.eggs = "15"
global.locc = "1"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})