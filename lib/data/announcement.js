const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');
async function announcement_start_u(language) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  await axios.get('https://gist.githubusercontent.com/phaticusthiccy/d0d1855bd0098d773759b4f3345bd292/raw/').then(async (ann) => {
    const { infotr, infoen, infoes, infopt, infoid, infoaz, infohi, infoml, inforu, infolk} = ann.data.announcements   
    if (language == 'TR') {
      data = infotr
    } 
    else if (language == 'AZ') {
      data = infoaz
    }
    else if (language == 'EN') {
      data = infoen
    }
    else if (language == 'HI') {
      data = infohi
    }
    else if (language == 'ES') {
      data = infoes
    }
    else if (language == 'ML') {
      data = infoml
    }
    else if (language == 'RU') {
      data = inforu
    }
    else if (language == 'PT') {
      data = infopt
    }
    else if (language == 'ID') {
      data = infoid
    }
    else if (language == 'LK') {
      data = infolk
    }
  })
  return data;
}
module.exports = announcement_start_u
