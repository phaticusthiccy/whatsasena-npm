const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function carbon_th() {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var Theme = new Array ()
  Theme[0] = "twilight";
  Theme[1] = "panda";
  Theme[2] = "blackboard";
  Theme[3] = "seti";
  Theme[4] = "verminal";
  Theme[5] = "nord";
  Theme[6] = "monokai";
  Theme[7] = "cobalt";
  Theme[8] = "vscode";
  Theme[9] = "material";
  Theme[10] = "hopscotch";
  Theme[11] = "shades-of-purple";
  Theme[12] = "oceanic-next";
  Theme[13] = "one-light";
  Theme[14] = "one-dark";
  Theme[15] = "synthwave-84";
  Theme[16] = "zenburn";
  Theme[17] = "3024-night";
  Theme[18] = "a11y-dark";
  Theme[19] = "dracula-pro";
  Theme[20] = "dracula-pro";
  Theme[21] = "dracula-pro";
  Theme[22] = "dracula-pro";
  Theme[23] = "night-owl";
  var i = Math.floor(24*Math.random())
  var data = ''
  data = Theme[i]
  return data;
}
module.exports = carbon_th
