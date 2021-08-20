/*
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function anime_img(ex_q) {
  var sdn = 'RUN git clone https://github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
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
    root[0] = "waifu";
    root[1] = "neko";
    root[2] = "shinobu";
    root[3] = "megumin";
    root[4] = "bully";
    var i = Math.floor(5*Math.random())
    rootData = root[i]
  } else if (ex_q == 'nsfw') {
    var root2 = new Array ()
    root2[0] = "waifu";
    root2[1] = "neko";
    root2[2] = "trap";
    var h = Math.floor(3*Math.random())
    rootData = root2[h]
  }
  await axios.get('
}
*/
