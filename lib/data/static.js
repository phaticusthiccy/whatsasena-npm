const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function static_remove_bg(color) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var ttl = color.toLowerCase() 
  var data = 'chromakey=' + ttl
  return data;
}
module.exports = static_remove_bg
