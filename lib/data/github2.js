const axios = require("axios")
const exec = require('child_process').exec;
const os = require("os");
async function github_repo(repo) {
  var sdn = 'RUN git clone https://github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!repo) {
    throw new Error("Missing Repository !!");
  }
  var data = ''
  await axios.get('https://api.github.com/repos/' + repo).then(async (data_x) => {
    data = data_x.data
  });
  return data;
}
