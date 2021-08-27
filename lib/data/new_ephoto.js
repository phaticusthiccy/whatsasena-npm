const axios = require('axios');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function link_e(query, html) {
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
  var encoded_q = encodeURIComponent(query)
  var sync_query = 'https://api.codebazan.ir/ephoto/writeText?output=json&effect=' + html + '&text=' + encoded_q
  var pay = await axios.get(sync_query)
  data.image = pay.data.image_url
  data.status = pay.data.success
  if (!data.status) {
    var pay2 = await axios.get(sync_query)
    data.image = pay2.data.image_url
    data.status = pay2.data.success
    if (!data.status) {
      var pay3 = await axios.get(sync_query)
      data.image = pay3.data.image_url
      data.status = pay3.data.success
      if (!data.status) {
        var pay4 = await axios.get(sync_query)
        data.image = pay4.data.image_url
        data.status = pay4.data.success
      }
    }
  }
  return data;
}
module.exports = link_e
