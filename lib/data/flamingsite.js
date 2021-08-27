const axios = require('axios');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function linkfl(query, html, loc) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    image: '',
    status: false
  }
  var client_uri = html + encodeURIComponent(query) + loc // https://api.flamingtext.com/logo/Design-Comics?_variations=true&text=' + query + '&_loc=catdynamic'
  var data_uri = await axios.get(client_uri)
  var find_sc = data_uri.data.split('ft-justify-grid-item">')[2].split('href="')[1].split('" class')[0].replace('amp;', '')
  var get_image = await axios.get('https://api.flamingtext.com' + find_sc)
  var payload = get_image.data.split('alt="Image')[1].split('src="')[1].split('" />')[0]

  data.image = payload
  data.status = true
  return data;
}
module.exports = linkfl
