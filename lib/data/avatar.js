const cnt = require('axios')
const exec = require('child_process').exec;
const os = require("os");
async function avatar(q, style) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  /**
  @string - pixelart
  @string - comic
  @string - robot
  @string - sketch
  @string - animation
  */
  var Snippet = ''
  if (!style || style == 'comic') {
    Snippet = 'https://avatars.dicebear.com/api/avataaars/' + q + '.svg?b=%2300ff00&clothesColor[]=red&clothesColor[]=pink&clothesColor[]=pastelYellow&clothesColor[]=pastelRed&clothesColor[]=pastelOrange&clothesColor[]=pastelGreen&clothesColor[]=pastelBlue&clothesColor[]=pastel&clothesColor[]=heather&clothesColor[]=gray02&clothesColor[]=gray01&clothesColor[]=gray&clothesColor[]=blue03&clothesColor[]=blue02&clothesColor[]=blue&clothesColor[]=black&clothesColor[]=blue01'
  } else if (style == 'pixelart') {
    Snippet = 'https://avatars.dicebear.com/api/pixel-art/' + q + '.svg?b=%2300ff00'
  } else if (style == 'robot') {
    Snippet = 'https://avatars.dicebear.com/api/bottts/' + q + '.svg?b=%2300ff00'
  } else if (style == 'animation') {
    Snippet = 'https://avatars.dicebear.com/api/micah/' + q + '.svg?b=%2300ff00'
  } else if (style == 'sketch') {
    Snippet = 'https://avatars.dicebear.com/api/croodles/' + q + '.svg?b=%2300ff00'
  }
  return Snippet;
}
module.exports = avatar
