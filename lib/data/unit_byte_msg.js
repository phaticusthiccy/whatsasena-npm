const os = require("os");
const exec = require('child_process').exec;

async function unit_msg_byte(Language) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    success: '',
    unsuccess: '',
    values: ''
  }
  data.values = '\n\n*.bitunit <number> <unit1> <unit2>* \n*Unit Values:* _b, kb, mb, gb, tb, pb_\n\n*b* = Byte \n*kb* = Kilobyte\n*mb* = Megabyte\n*gb* = Gigabyte\n*tb* = Terabyte\*pb* = Petabyte'
  data.success = '{number}' + '{unit1} *=* ' + '{result}' + '{unit2}'
  if (Language == 'TR') {
    data.unsuccess = '*Çeviri Yapılırken Hata Oluştu! Lütfen Aşağıdaki Bulunan Değerleri Kullanın.*'
  } 
  else if (Language == 'EN') {
    data.unsuccess = '*Error Occurred While Translating! Please Use the Values ​​Found Below.*'
  } 
  else if (Language == 'AZ') {
    data.unsuccess = '*Tərcümə edərkən xəta baş verdi! Zəhmət olmasa aşağıda tapılan dəyərlərdən istifadə edin.*'
  } 
  else if (Language == 'ML') {
    data.unsuccess = '*വിവർത്തനം ചെയ്യുമ്പോൾ പിശക് സംഭവിച്ചു! ദയവായി താഴെ കാണുന്ന മൂല്യങ്ങൾ ഉപയോഗിക്കുക.*'
  } 
  else if (Language == 'HI') {
    data.unsuccess = '*अनुवाद करते समय हुई त्रुटि! कृपया नीचे पाए गए मानों का उपयोग करें।*'
  } 
  else if (Language == 'RU') {
    data.unsuccess = '*При переводе произошла ошибка! Пожалуйста, используйте значения, указанные ниже.*'
  } 
  else if (Language == 'ES') {
    data.unsuccess = '*¡Ocurrió un error al traducir! Utilice los valores que se encuentran a continuación.*'
  } 
  else if (Language == 'ID') {
    data.unsuccess = '*Terjadi Kesalahan Saat Menerjemahkan! Silakan Gunakan Nilai Ditemukan Di Bawah Ini.*'
  } 
  else if (Language == 'PT') {
    data.unsuccess = '*Ocorreu um erro durante a tradução! Use os valores encontrados abaixo.*'
  } 
  else {
    data.unsuccess = '*Error Occurred While Translating! Please Use the Values Found Below.*'
  }
  return data;
}
module.exports = unit_msg_byte
