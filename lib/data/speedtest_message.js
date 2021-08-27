const exec = require('child_process').exec;
const os = require("os");

async function sp_message(Language) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    download: '',
    upload: '',
    ping: '',
    extra: '',
    download_value: '',
    ms: '',
    byte_speed_d: '',
    kb_speed_d: '',
    mb_speed_d: '',
    gb_speed_d: ''
  }
  if (Language == 'TR') {
    data.download = '*⬇️ İndirme Hızı:* ' 
    data.upload = '*⬆️ Yükleme Hızı:* '
    data.ping = '*🔄 Gecikme:* '
    data.extra = '*🆕 Extra Bilgiler:* '

    data.download_value = 'Saniyede {count} Megabyte'
    data.ms = 'Milisaniye'

    data.byte_speed_d = '*Bit Hızı:* '
    data.kb_speed_d = '*Kilobit Hızı:* '
    data.mb_speed_d = '*Megabit Hızı:* '
    data.gb_speed_d = '*Gigabit Hızı:* '
  }
  else if (Language == 'EN') {
    data.download = '*⬇️ Download Speed:* ' 
    data.upload = '*⬆️ Upload Speed:* '
    data.ping = '*🔄 Lateness:* '
    data.extra = '*🆕 Extra Information:* '

    data.download_value = '{count} Megabytes per Second.'
    data.ms = 'Milliseconds'

    data.byte_speed_d = '*Bitrate:* '
    data.kb_speed_d = '*Kilobit Rate:* '
    data.mb_speed_d = '*Megabit Rate:* '
    data.gb_speed_d = '*Gigabit Rate:* '
  }
  else if (Language == 'AZ') {
    data.download = '*⬇️ Yükləmə Sürəti:* ' 
    data.upload = '*⬆️ Yükləmə Sürəti:* '
    data.ping = '*🔄 Gecikmə:* '
    data.extra = '*🆕 Əlavə Məlumat:* '

    data.download_value = 'Saniyədə {count} meqabayt.'
    data.ms = 'Millisaniyələr'

    data.byte_speed_d = '*Bit dərəcəsi:* '
    data.kb_speed_d = '*Kilobit dərəcəsi:* '
    data.mb_speed_d = '*Megabit dərəcəsi:* '
    data.gb_speed_d = '*Gigabit dərəcəsi:* '
  }
  else if (Language == 'ES') {
    data.download = '*⬇️ Velocidad de Descarga:* ' 
    data.upload = '*⬆️ Velocidad de Subida:* '
    data.ping = '*🔄 Retraso:* '
    data.extra = '*🆕 Información Extra:* '

    data.download_value = '{count} megabytes por segundo.'
    data.ms = 'Milisegundos'

    data.byte_speed_d = '*Bitrate:* '
    data.kb_speed_d = '*Tasa de kilobits:* '
    data.mb_speed_d = '*Tasa de megabits:* '
    data.gb_speed_d = '*Tasa de gigabit:* '
  }
  else if (Language == 'PT') {
    data.download = '*⬇️ Velocidade de download:* ' 
    data.upload = '*⬆️ Velocidade de upload:* '
    data.ping = '*🔄 Atraso:* '
    data.extra = '*🆕 Informação extra:* '

    data.download_value = '{count} megabytes por segundo.'
    data.ms = 'Milissegundos'

    data.byte_speed_d = '*Taxa de bits:* '
    data.kb_speed_d = '*Taxa de kilobit:* '
    data.mb_speed_d = '*Taxa de megabit:* '
    data.gb_speed_d = '*Taxa de Gigabit:* '
  }
  else if (Language == 'ID') {
    data.download = '*⬇️ Kecepatan Unduh:* ' 
    data.upload = '*⬆️ Kecepatan mengunggah:* '
    data.ping = '*🔄 Keterlambatan:* '
    data.extra = '*🆕 Informasi Tambahan:* '

    data.download_value = '{count} Megabyte per detik.'
    data.ms = 'Milidetik'

    data.byte_speed_d = '*Tingkat bit:* '
    data.kb_speed_d = '*Tingkat Kilobit:* '
    data.mb_speed_d = '*Tingkat Megabit:* '
    data.gb_speed_d = '*Tingkat Gigabit:* '
  }
  else if (Language == 'RU') {
    data.download = '*⬇️ Скорость скачивания:* ' 
    data.upload = '*⬆️ Скорость загрузки:* '
    data.ping = '*🔄 Опоздание:* '
    data.extra = '*🆕 Дополнительная информация:* '

    data.download_value = '{count} мегабайт в секунду.'
    data.ms = 'миллисекунды'

    data.byte_speed_d = '*Битрейт:* '
    data.kb_speed_d = '*Килобит Скорость:* '
    data.mb_speed_d = '*Мегабитная скорость:* '
    data.gb_speed_d = '*Гигабитная скорость:* '
  }
  else if (Language == 'ML') {
    data.download = '*⬇️ ഡൗൺലോഡ് വേഗത:* ' 
    data.upload = '*⬆️ അപ്ലോഡ് വേഗത:* '
    data.ping = '*🔄 വൈകുന്നത്:* '
    data.extra = '*🆕 അധിക വിവരങ്ങൾ:* '

    data.download_value = 'സെക്കൻഡിൽ {count} മെഗാബൈറ്റ്.'
    data.ms = 'മില്ലി സെക്കൻഡ്'

    data.byte_speed_d = '*ബിട്രേറ്റ്:* '
    data.kb_speed_d = '*കിലോബിറ്റ് നിരക്ക്:* '
    data.mb_speed_d = '*മെഗാബൈറ്റ് നിരക്ക്:* '
    data.gb_speed_d = '*ജിഗാബൈറ്റ് നിരക്ക്:* '
  }
  else if (Language == 'HI') {
    data.download = '*⬇️ डाउनलोड की गति:* ' 
    data.upload = '*⬆️ भार डालना के गति:* '
    data.ping = '*🔄 विलंब:* '
    data.extra = '*🆕 अतिरिक्त जानकारी:* '

    data.download_value = '{count} मेगाबाइट प्रति सेकंड.'
    data.ms = 'मिलीसेकेंड'

    data.byte_speed_d = '*बिटरेट:* '
    data.kb_speed_d = '*किलोबिट दर:* '
    data.mb_speed_d = '*मेगाबिट दर:* '
    data.gb_speed_d = '*गीगाबिट दर:* '
  }
  else {
    data.download = '*⬇️ Download Speed:* ' 
    data.upload = '*⬆️ Upload Speed:* '
    data.ping = '*🔄 Lateness:* '
    data.extra = '*🆕 Extra Information:* '

    data.download_value = '{count} Megabytes per Second.'
    data.ms = 'Milliseconds'

    data.byte_speed_d = '*Bitrate:* '
    data.kb_speed_d = '*Kilobit Rate:* '
    data.mb_speed_d = '*Megabit Rate:* '
    data.gb_speed_d = '*Gigabit Rate:* '
  }
  return data;
}
module.exports = sp_message
