const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
const google = require("googlethis");
async function imgs(q) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  const images = await google.image(q, { safe: true})
  var len = images.length

  // 1
  var min1 = 0
  var max1 = len
  var fin1 = Math.floor(Math.random() * (+max1 - +min1 + 1) + min1)

  // 2
  var min2 = 0
  var max2 = len
  var fin2 = Math.floor(Math.random() * (+max2 - +min2 + 1) + min2)

  // 3
  var min3 = 0
  var max3 = len
  var fin3 = Math.floor(Math.random() * (+max3 - +min3 + 1) + min3)

  // 4
  var min4 = 0
  var max4 = len
  var fin4 = Math.floor(Math.random() * (+max4 - +min4 + 1) + min4)

  // 5
  var min5 = 0
  var max5 = len
  var fin5 = Math.floor(Math.random() * (+max5 - +min5 + 1) + min5)

  var data = {
    link1: images[fin1].url,
    link2: images[fin2].url,
    link3: images[fin3].url,
    link4: images[fin4].url,
    link5: images[fin5].url
  }
  return data;
}
module.exports = imgs
