const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');
async function anime_gif(ex_q) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!ex_q) throw new Error ('Missing Query!!')
  var Snippet = ''
  var rootData = ''
  if (ex_q == 'normal') {
    var root = new Array ()
    root[0] = "bully";
    root[1] = "cuddle";
    root[2] = "cry";
    root[3] = "hug";
    root[4] = "kiss";
    root[5] = "lick";
    root[6] = "pat";
    root[7] = "smug";
    root[8] = "bonk";
    root[9] = "yeet";
    root[10] = "blush";
    root[11] = "smile";
    root[12] = "wave";
    root[13] = "highfive";
    root[14] = "handhold";
    root[15] = "nom";
    root[16] = "bite";
    root[17] = "glomp";
    root[18] = "slap";
    root[19] = "kill";
    root[20] = "kick";
    root[21] = "happy";
    root[22] = "wink";
    root[23] = "poke";
    root[24] = "dance";
    root[25] = "cringe";
    var i = Math.floor(26*Math.random())
    rootData = root[i]
    var exdata = await axios.get('https://api.waifu.pics/sfw/' + rootData)
    if (exdata.data.url.includes('GIF')) {
      var exdata_new = await axios.get('https://api.waifu.pics/sfw/' + rootData)
      Snippet = exdata_new.data.url
    } else {
      Snippet = exdata.data.url
    }
  } else if (ex_q == 'nsfw') {
    var root2 = new Array ()
    root2[0] = "trap";
    root2[1] = "blowjob";
    var h = Math.floor(2*Math.random())
    rootData = root2[h]
    var exdata_n = await axios.get('https://api.waifu.pics/nsfw/' + rootData)
    if (exdata_n.data.url.includes('GIF')) {
      var exdata_new_n = await axios.get('https://api.waifu.pics/nsfw/' + rootData)
      Snippet = exdata_new_n.data.url
    } else {
      Snippet = exdata_n.data.url
    }
  }
  return Snippet;
}
module.exports = anime_gif
