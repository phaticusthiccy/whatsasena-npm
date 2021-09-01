const axios = require("axios").default;
const exec = require('child_process').exec;
const os = require("os");
async function url_to_img(url) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var pay = "N2Q1NzgzODIwM21zaDBjNWNmNjVjOTBhNzIzMXAxM2I0NjFqc243N2M4Y2ZhNTU4NzE"
  let buff = Buffer.from(pay, 'base64');  
  let text = buff.toString('utf-8');
  var options = {
    method: 'GET',
    url: 'https://web-capture.p.rapidapi.com/image',
    params: {url: url, width: '1920', height: '1080'},
    headers: {
      'x-rapidapi-host': 'web-capture.p.rapidapi.com',
      'x-rapidapi-key': text
    }
  };
  var basesc = await axios.request(options)
  return basesc
}
module.exports = url_to_img
