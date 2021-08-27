const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function carbon() {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var rgbafmin = 0; 
  var rgbafmax = 255;  
  var rgbafirst = Math.floor(Math.random() * (+rgbafmax - +rgbafmin) + +rgbafmin)
  var rgbasmin = 0; 
  var rgbasmax = 255;  
  var rgbasecond = Math.floor(Math.random() * (+rgbasmax - +rgbasmin) + +rgbasmin)
  var rgbatmin = 0; 
  var rgbatmax = 255;  
  var rgbathird = Math.floor(Math.random() * (+rgbatmax - +rgbatmin) + +rgbatmin)
  var data = ''
  data = rgbafirst + ',' + rgbasecond + ',' + rgbathird
  return data;
}
module.exports = carbon
