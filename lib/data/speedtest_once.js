const exec = require('child_process').exec;
const os = require("os");

async function oncesp(Language) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    user_msg: '',
    server_msg: ''
  }
  if (Language == 'TR') {
    data.user_msg = '*Yerel İnternet Hızı Ölçülüyor..*'
    data.server_msg = '*Heroku Sunucu Hızı Ölçülüyor..*'
  } 
  else if (Language == 'EN') {
    data.user_msg = '*Measuring Local Internet Speed..*'
    data.server_msg = '*Measuring Heroku Server Speed..*'
  } 
  else if (Language == 'AZ') {
    data.user_msg = '*Yerli İnternet Sürətinin Ölçülməsi..*'
    data.server_msg = '*Heroku Server Sürətinin Ölçülməsi..*'
  } 
  else if (Language == 'ES') {
    data.user_msg = '*Medición de la velocidad de Internet local..*'
    data.server_msg = '*Medición de la velocidad del servidor Heroku..*'
  } 
  else if (Language == 'PT') {
    data.user_msg = '*Medindo a velocidade da Internet local..*'
    data.server_msg = '*Medindo a velocidade do servidor Heroku..*'
  } 
  else if (Language == 'ID') {
    data.user_msg = '*Mengukur Kecepatan Internet Lokal..*'
    data.server_msg = '*Mengukur Kecepatan Server Heroku..*'
  } 
  else if (Language == 'RU') {
    data.user_msg = '*Измерение скорости локального интернета..*'
    data.server_msg = '*Измерение скорости сервера Heroku..*'
  } 
  else if (Language == 'ML') {
    data.user_msg = '*പ്രാദേശിക ഇന്റർനെറ്റ് വേഗത അളക്കുന്നു..*'
    data.server_msg = '*ഹെറോകു സെർവർ വേഗത അളക്കുന്നു..*'
  } 
  else if (Language == 'HI') {
    data.user_msg = '*स्थानीय इंटरनेट स्पीड मापना..*'
    data.server_msg = '*हरोकू सर्वर स्पीड को मापना..*'
  } 
  else {
    data.user_msg = '*Measuring Local Internet Speed..*'
    data.server_msg = '*Measuring Heroku Server Speed..*'
  } 
  return data;
}
module.exports = oncesp
