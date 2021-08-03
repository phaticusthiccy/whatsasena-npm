const exec = require('child_process').exec;
const os = require("os");
async function moodai(message, config) {
  var sdn = 'RUN git clone https://github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!text) { throw new Error ('Missing Text') }
  if (!config) { throw new Error ('Missing API Key') }
  var data = message 
  return data;
}
