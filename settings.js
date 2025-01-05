/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtsaE9pV005MEhqQlV2ZlNZSWNSMGhZVzlGTE9jNk9ROHF3ZkEyRmlXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzlZMnZaeXA2d0dOZTd0RFlNRmltdHdCaXdUWUtTMmNPSVJRaS9VNFJCaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVT2t6RERrc0ttWUJCMEZmVEowQTliT1NjeHJ2Q1FDZTB2NTkwdnZkdldFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2Si9GYTcyekNRdytmb0NYVllJMGFrTlBVYXM3RkFjUGR4aUVOeGRtQlM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGOHB1WXNGWS9GeUtzaHhaNUFOTTdLM0UwMisxc1lOVzU2M2xVV0ZCbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRWWllBM3dGU3N5bkpHV21COXFlN3V2QzN6dkRTeGh2ZEQrVzlFMHBmbFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0haaVdWeEwxamhpWGJmQStOTWxOY3RWb0doRzgxODVDQm4rMmloME8wdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTUxQThWLzcvdjhwelBjNlZteXBWclk2YWdUMk9iSzAyeC9DYkRCVndRST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR1VXhuTEV6ZDRKOFYzV1h5L21mSkJQRkRqUUNhTDBrL0x1Wk5oaVFiU0pMWXV5TnJ3VHNTODcrblQ2dCtkSWNHc21PTlJBT2ZaWEltcUlhdFlvd0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJYMVpXcjYwT2VnRGE2MUpJUGZFWUVWWEVwcXp3c0FnaGQ2L3JBVzlPSG5rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQwNzMxMTg2NDAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI2RTc2OThBNUM4MjRFNEI3MTk0NkIwRUIzREMyMEE5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzYxMDI5MDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQwNzMxMTg2NDAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUzNkQ2NUNGOEU4REJFNEVFNUQwMzFBQTVBRTlEMjkzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzYxMDI5MDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhrUE95Und1VEN1aWlwSWtzZERIelEiLCJwaG9uZUlkIjoiZGJlNzk2Y2MtZTllYy00ZWMzLWIwOGEtNmM2NmYzNjA0NmIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPaklqbVc0SWxuTG9xcWJBb1NRSXQxSXdLUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJraitJSE1KT1o2UmNkQVFiRWVDU0NmbXpXckU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVk5LVFpKS0QiLCJtZSI6eyJpZCI6IjQwNzMxMTg2NDAyOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoia2lraSByZWdlbGUgcGUgcHNpaGljIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcjYrdWNCRU91bjY3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlL1ZPdWw4cndqdVM4eVJtZnZjamdkaEYzenA3cVBBckp3emdvVjBERzMwPSIsImFjY291bnRTaWduYXR1cmUiOiJ2SzBxMmxwd0ZLcm4vbC9FdGJkNmlRRG1tVmZKaEYyUGNtdlRJM1I1VWdZNS9OdHRWTzRTbkN2ZEtEcXlNSHYzLzVmMm9zNDE1OXh2NGg1aXRjQWNBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicmlaa3BFK1g3RG9INjFTb0MvTVBqM1FsVlJETVFvNzFNRDBvVjN5RUJCZ1hNejRDSm1SMi9uMzVFdDl3VWxvN3F1Y1B6UmIwd05XUWY1eWtIK2laQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDczMTE4NjQwMjo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh2MVRycGZLOEk3a3ZNa1puNzNJNEhZUmQ4NmU2andLeWNNNEtGZEF4dDkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYxMDI5MDR9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "263";
const author = process.env.STICKER_AUTHOR || 'Akii;
const packname = process.env.PACKNAME || 'akii';
const dev = process.env.DEV || '263714757857';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || '𝙰𝙺𝙸𝙾-𝙼𝙳';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
