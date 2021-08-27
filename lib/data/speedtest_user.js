const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

async function speedy() {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    bps: '',
    kbps: '',
    mbps: '',
    gbps: ''
  }
  var baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  data.bps = speed.bps
  data.kbps = speed.kbps
  data.mbps = speed.mbps
  var GBPS = Number(speed.mbps) / 1000
  var onceGBPS = GBPS.toString().split('')
  var finalGBPS = onceGBPS[0] + onceGBPS[1] + onceGBPS[2]
  data.gbps = finalGBPS
  return data;
}
module.exports = speedy
