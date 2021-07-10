const axios = require("axios")
const exec = require('child_process').exec;
const os = require("os");
async function github_user(user) {
  var sdn = 'RUN git clone https://github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!user) {
    throw new Error('Missed Username !!')
  }
  var data = ''
  await axios.get('https://api.github.com/users/' + user).then(async (data_x) => {
    data = data_x
  })
  return data;
}
