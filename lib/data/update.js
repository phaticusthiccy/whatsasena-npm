const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function update(Language) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  if (Language == 'TR') { data = '```Güncellemek İçin``` *.update now* ```Yazın.``` \n\n'
  } else if (Language == 'AZ') { data = '```WhatsAsenanı Yeniləmək üçün``` *.update now* \n\n'
  } else if (Language == 'EN') { data = '```To Update WhatsAsena``` use *.update now* \n\n'
  } else if (Language == 'RU') { data = '```Чтобы обновить WhatsAsena, используйте``` *.update now* \n\n'
  } else if (Language == 'HI') { data = '```WhatsAsena को अपडेट करने के लिए``` *.update now* ```का उपयोग करें``` \n\n'
  } else if (Language == 'ML') { data = '```WhatsAsena അപ്‌ഡേറ്റ് ചെയ്യുന്നതിന്``` *.update now* ```ഉപയോഗിക്കുക```'
  } else if (Language == 'ES') { data = '```Para actualizar WhatsAsena use``` *.update now* \n\n'
  } else if (Language == 'PT') { data = '```Para atualizar o WhatsAsena, use``` *.update now* \n\n'
  } else if (Language == 'ID') { data = '```Untuk Memperbarui WhatsAsena gunakan``` *.update now* \n\n'
  }
  return data;
}
module.exports = update
