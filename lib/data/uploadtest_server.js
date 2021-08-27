const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

async function speedy_upload_server() {
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
  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/catchers/544b09b4599c1d0200000289',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const fileSizeInBytes = 5000000
  const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
  data.bps = speed.bps
  data.kbps = speed.kbps
  data.mbps = speed.mbps
  var GBPS = Number(speed.mbps) / 1000
  var onceGBPS = GBPS.toString().split('')
  var finalGBPS = onceGBPS[0] + onceGBPS[1] + onceGBPS[2] + onceGBPS[3] + onceGBPS[4]
  data.gbps = finalGBPS
  return data;
}
module.exports = speedy_upload_server
