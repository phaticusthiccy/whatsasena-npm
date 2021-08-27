const cnt = require('axios')
const exec = require('child_process').exec;
const os = require("os");
async function cnt_get(q, q2, q3, q4, q5) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (q2 !== 'Eva') throw new Error ('Invalid AI!!')
  if (q3 !== 'Phaticusthiccy') throw new Error ('Invalid Creator!!')
  if (q4 !== 'WhatsAsena') throw new Error ('Fake Bot - Use Original WhatsAsena!!')
  var data = {
    result: '',
    image: '',
    inter: '&msg=',
    key1: 'aHR0cDovL2FwaS5icmFpbnNob3AuYWkvZ2V0P2JpZD0xNTg3NTMma2V5PXZMYnhCY1E4aE9NRTRFWDEmdWlkPQ==',
    key2: '01100001 01001000 01010010 00110000 01100011 01000100 01101111 01110110 01001100 00110010 01000110 01110111 01100001 01010011 00110101 01101001 01100011 01101101 01000110 01110000 01100010 01101110 01001110 01101111 01100010 00110011 01000001 01110101 01011001 01010111 01101011 01110110 01011010 00110010 01010110 00110000 01010000 00110010 01001010 01110000 01011010 01000100 00110000 01111000 01001110 01010100 01100111 00110011 01001110 01010100 01001101 01101101 01100001 00110010 01010110 00110101 01010000 01011000 01011010 01001101 01011001 01101110 01101000 01000011 01011001 00110001 01000101 00110100 01100001 01000101 00111001 01001110 01010010 01010100 01010010 01000110 01010111 01000100 01000101 01101101 01100100 01010111 01101100 01101011 01010000 01010001 00111101 00111101',
    key3: '30 31 31 30 30 30 30 31 20 30 31 30 30 31 30 30 30 20 30 31 30 31 30 30 31 30 20 30 30 31 31 30 30 30 30 20 30 31 31 30 30 30 31 31 20 30 31 30 30 30 31 30 30 20 30 31 31 30 31 31 31 31 20 30 31 31 31 30 31 31 30 20 30 31 30 30 31 31 30 30 20 30 30 31 31 30 30 31 30 20 30 31 30 30 30 31 31 30 20 30 31 31 31 30 31 31 31 20 30 31 31 30 30 30 30 31 20 30 31 30 31 30 30 31 31 20 30 30 31 31 30 31 30 31 20 30 31 31 30 31 30 30 31 20 30 31 31 30 30 30 31 31 20 30 31 31 30 31 31 30 31 20 30 31 30 30 30 31 31 30 20 30 31 31 31 30 30 30 30 20 30 31 31 30 30 30 31 30 20 30 31 31 30 31 31 31 30 20 30 31 30 30 31 31 31 30 20 30 31 31 30 31 31 31 31 20 30 31 31 30 30 30 31 30 20 30 30 31 31 30 30 31 31 20 30 31 30 30 30 30 30 31 20 30 31 31 31 30 31 30 31 20 30 31 30 31 31 30 30 31 20 30 31 30 31 30 31 31 31 20 30 31 31 30 31 30 31 31 20 30 31 31 31 30 31 31 30 20 30 31 30 31 31 30 31 30 20 30 30 31 31 30 30 31 30 20 30 31 30 31 30 31 31 30 20 30 30 31 31 30 30 30 30 20 30 31 30 31 30 30 30 30 20 30 30 31 31 30 30 31 30 20 30 31 30 30 31 30 31 30 20 30 31 31 31 30 30 30 30 20 30 31 30 31 31 30 31 30 20 30 31 30 30 30 31 30 30 20 30 30 31 31 30 30 30 30 20 30 31 31 31 31 30 30 30 20 30 31 30 30 31 31 31 30 20 30 31 30 31 30 31 30 30 20 30 31 31 30 30 31 31 31 20 30 30 31 31 30 30 31 31 20 30 31 30 30 31 31 31 30 20 30 31 30 31 30 31 30 30 20 30 31 30 30 31 31 30 31 20 30 31 31 30 31 31 30 31 20 30 31 31 30 30 30 30 31 20 30 30 31 31 30 30 31 30 20 30 31 30 31 30 31 31 30 20 30 30 31 31 30 31 30 31 20 30 31 30 31 30 30 30 30 20 30 31 30 31 31 30 30 30 20 30 31 30 31 31 30 31 30 20 30 31 30 30 31 31 30 31 20 30 31 30 31 31 30 30 31 20 30 31 31 30 31 31 31 30 20 30 31 31 30 31 30 30 30 20 30 31 30 30 30 30 31 31 20 30 31 30 31 31 30 30 31 20 30 30 31 31 30 30 30 31 20 30 31 30 30 30 31 30 31 20 30 30 31 31 30 31 30 30 20 30 31 31 30 30 30 30 31 20 30 31 30 30 30 31 30 31 20 30 30 31 31 31 30 30 31 20 30 31 30 30 31 31 31 30 20 30 31 30 31 30 30 31 30 20 30 31 30 31 30 31 30 30 20 30 31 30 31 30 30 31 30 20 30 31 30 30 30 31 31 30 20 30 31 30 31 30 31 31 31 20 30 31 30 30 30 31 30 30 20 30 31 30 30 30 31 30 31 20 30 31 31 30 31 31 30 31 20 30 31 31 30 30 31 30 30 20 30 31 30 31 30 31 31 31 20 30 31 31 30 31 31 30 30 20 30 31 31 30 31 30 31 31 20 30 31 30 31 30 30 30 30 20 30 31 30 31 30 30 30 31 20 30 30 31 31 31 31 30 31 20 30 30 31 31 31 31 30 31',
    key4: '31 35 38 37 35 33',
    key5: '50 68 61 74 74 69 63 75 73 74 68 69 63 63 79',
    key6: '65 76 61 5f 66 75 6e 63 74 69 6f 6e 61 6c 69 74 79',
    key7: '61 48 52 30 63 44 6f 76 4c 32 46 77 61 53 35 69 63 6d 46 70 62 6e 4e 6f 62 33 41 75 59 57 6b 76 5a 32 56 30 50 32 4a 70 5a 44 30 78 4e 54 67 33 4e 54 4d 6d 61 32 56 35 50 58 5a 4d 59 6e 68 43 59 31 45 34 61 45 39 4e 52 54 52 46 57 44 45 6d 64 57 6c 6b 50 51 3d 3d',
    values: {
      typedArrays: ['0', 0, 0, 'parse', 0, 0, 'parse', '1', 1, 1, 'array'],
      float: 'FLOAT',
      booleans: {
        key: q == '{mode}' ? 'E+nkLI9KszV5UbmqPN/gJkkhd0WfIC9Q9raFUcAjASDRexCBcnLVFdvpFxyxfgzgWZJ8PHUhk5unpN0Yu5OTp0oxDV1LoEpwVRgS/i4FRtPphEASyY2Ie1VGifgYij4z' : '1EUYveqVniEMlRW5oYKQyWpjcv2QiR34FhiGunRvuWk=',
        secret: q.includes('61 48 52 30 63 44 6f 76 4c 32 46 77 61 53 35 69 63 6d 46 70 62 6e 4e 6f 62 33 41 75 59 57 6b 76 5a 32 56 30 50 32 4a 70 5a 44 30 78 4e 54 67 33 4e 54 4d 6d 61 32 56 35 50 58 5a 4d 59 6e 68 43 59 31 45 34 61 45 39 4e 52 54 52 46 57 44 45 6d 64 57 6c 6b 50 51 3d 3d') ? 'PARSE_FLOAT;;;UZnh96HpjKXWYSsmJc1KA+5S3+cQDcjpbUsPFUFMAhs=' : 'PARSE_FLOAT;;;keuLNB6jCx/bjisQ9XUAuWagAlPdjjQhMjZ/rQEBUhY=',
        isfloat: false
      }
    },
    
  }
  let buff = Buffer.from(data.key1, 'base64');  
  let text = buff.toString('utf-8');
  var bigFloat = 0
  var arraySec = new Array()
  arraySec[0] = 0;
  arraySec[1] = '0';
  arraySec[2] = 1;
  arraySec[3] = '1';
  var distributor = Math.floor(4*Math.random())
  if (data.values.typedArrays[0] == arraySec[distributor]) {
    data.values.typedArrays.push('FLOAT')
  }
  if (data.values.typedArrays.indexOf(data.values.float)) {
    data.values.booleans.isfloat = true
  }
  await cnt.get(text + q5 + data.inter + q).then(async (pre_loader) => {
    if (pre_loader.data.cnt.includes('.png')) {
      var im = pre_loader.data.cnt.split('.png')[1]
      data.image = pre_loader.data.cnt.split('.png')[0]
      data.result = pre_loader.data.cnt
    } else {
      data.result = pre_loader.data.cnt
    }
  })
  return data;
}
module.exports = cnt_get
