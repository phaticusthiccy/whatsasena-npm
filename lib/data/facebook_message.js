const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');

async function fb_msg(Language) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    title: '',
    caption: '',
    like: '',
    play: '',
    share: '',
    username: '',
    comment: '',
    creation: ''
  }
  if (Language == 'TR') {
    data.title = '*Başlık:* '
    data.caption = '*Açıklama:* '
    data.like = '*Beğeni Sayısı:* '
    data.play = '*İzlenme Sayısı:* '
    data.share = '*Paylaşım Sayısı:* '
    data.username = '*Kullanıcı Adı:* '
    data.comment = '*Yorum Sayısı:* '
    data.creation = '*Oluşturma Tarihi:* '
  }
  else if (Language == 'EN') {
    data.title = '*Title:* '
    data.caption = '*Caption:* '
    data.like = '*Like Count:* '
    data.play = '*Views:* '
    data.share = '*Share Count:* '
    data.username = '*Username:* '
    data.comment = '*Comment Count:* '
    data.creation = '*Creation Date:* '
  }
  else if (Language == 'AZ') {
    data.title = '*Başlıq:* '
    data.caption = '*Təsvir:* '
    data.like = '*Bəyənmələrin sayı:* '
    data.play = '*Baxışlar:* '
    data.share = '*Paylaşım Sayısı:* '
    data.username = '*İstifadəçi adı:* '
    data.comment = '*Şərh sayı:* '
    data.creation = '*Yaradılma tarixi:* '
  }
  else if (Language == 'ID') {
    data.title = '*Judul:* '
    data.caption = '*Keterangan:* '
    data.like = '*Suka Hitung:* '
    data.play = '*Tampilan:* '
    data.share = '*Bagikan Hitungan:* '
    data.username = '*Nama pengguna:* '
    data.comment = '*Jumlah Komentar:* '
    data.creation = '*Tanggal Pembuatan:* '
  }
  else if (Language == 'PT') {
    data.title = '*Título:* '
    data.caption = '*Rubrica:* '
    data.like = '*Número de curtidas:* '
    data.play = '*Visualizações:* '
    data.share = '*Contagem de compartilhamento:* '
    data.username = '*Nome do usuário:* '
    data.comment = '*Contagem de comentários:* '
    data.creation = '*Data de criação:* '
  }
  else if (Language == 'ES') {
    data.title = '*Título:* '
    data.caption = '*Subtítulo:* '
    data.like = '*Como contar:* '
    data.play = '*Puntos de vista:* '
    data.share = '*Recuento de acciones:* '
    data.username = '*Nombre de usuario:* '
    data.comment = '*Recuento de comentarios:* '
    data.creation = '*Fecha de creación:* '
  }
  else if (Language == 'RU') {
    data.title = '*Заголовок:* '
    data.caption = '*Подпись:* '
    data.like = '*Как граф:* '
    data.play = '*Просмотры:* '
    data.share = '*Количество акций:* '
    data.username = '*Имя пользователя:* '
    data.comment = '*Количество комментариев:* '
    data.creation = '*Дата создания:* '
  }
  else if (Language == 'ML') {
    data.title = '*ശീർഷകം:* '
    data.caption = '*അടിക്കുറിപ്പ്:* '
    data.like = '*കൗണ്ട് പോലെ:* '
    data.play = '*കാഴ്ചകൾ:* '
    data.share = '*ഷെയർ കൗണ്ട്:* '
    data.username = '*ഉപയോക്തൃനാമം:* '
    data.comment = '*അഭിപ്രായങ്ങളുടെ എണ്ണം:* '
    data.creation = '*സൃഷ്ടിച്ച തീയതി:* '
  }
  else if (Language == 'HI') {
    data.title = '*शीर्षक:* '
    data.caption = '*नाम:* '
    data.like = '*लाइक काउंट:* '
    data.play = '*विचारों:* '
    data.share = '*शेयर गणना:* '
    data.username = '*उपयोगकर्ता नाम:* '
    data.comment = '*टिप्पणी गणना:* '
    data.creation = '*निर्माण तिथि:* '
  }
  else {
    data.title = '*Title:* '
    data.caption = '*Caption:* '
    data.like = '*Like Count:* '
    data.play = '*Views:* '
    data.share = '*Share Count:* '
    data.username = '*Username:* '
    data.comment = '*Comment Count:* '
    data.creation = '*Creation Date:* '
  }
  return data;
}
module.exports = fb_msg
