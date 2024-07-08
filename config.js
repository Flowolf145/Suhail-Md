const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_26_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldCUmhkWm1tYWJrQVFwaHZFekV4M0pLRVdBTDVpdWR0NVFKbExwaTMrQlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9ZeVF0dWpQUWFDRUJPVWpKaWUzbmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDJkNWQ5OGYtNzBkNy00MGZlLWI4OTUtYWY0ZGJjZDMyZGJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMjE1LFxuICAgICAgMjM0LFxuICAgICAgNDUsXG4gICAgICAxOSxcbiAgICAgIDU2LFxuICAgICAgMSxcbiAgICAgIDczLFxuICAgICAgMzEsXG4gICAgICAzNyxcbiAgICAgIDE2MCxcbiAgICAgIDEsXG4gICAgICAxOTUsXG4gICAgICAyNTUsXG4gICAgICAyMTcsXG4gICAgICAyMzAsXG4gICAgICAxOTAsXG4gICAgICA3MixcbiAgICAgIDI5LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgMTUwLFxuICAgICAgMjIwLFxuICAgICAgMzAsXG4gICAgICAxMTksXG4gICAgICAxNzYsXG4gICAgICAxODcsXG4gICAgICAxLFxuICAgICAgMjAzLFxuICAgICAgMjA4LFxuICAgICAgMTA0LFxuICAgICAgMjI2LFxuICAgICAgMTQ4LFxuICAgICAgOTAsXG4gICAgICA5OSxcbiAgICAgIDEsXG4gICAgICAyNDcsXG4gICAgICAyMjksXG4gICAgICAxODUsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFZaQVFXSkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjY1Mjg2NTk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY4NDg0Mjc4MTUwODU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcmY3ZjhQRVA2bHNMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRQaXNsQUVXcXhjN3lRdHRLcTMzMjV3dlA1bEVadW93WHpKZ0RmNmR3UUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic3BFVEtneE5qc0dXbFRxaHlmSk5KeU1IeGJ2enNVYVlta3lCSWhPWCtCME1VRjFSV01NcmgrNno4anJjN2swWnVMS2w5S2JaQzNzY3BxN3ZFODU4REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmdURWpPdkVGZ0VyMDlDTXROdm4yV3JRQStCWFJ5NkxIZjNIS0V0OGRPVmZub0gxcXl5YVZiZ1RHQU5UOWZCN3lON05JaGtQZWZ0YlRreCs3RlZpaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNjUyODY1OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDU1OTM2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
