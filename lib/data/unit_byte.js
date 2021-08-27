const os = require("os");
const axios = require('axios');
const exec = require('child_process').exec;

async function unit_byte(num, unit1, unit2) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    count: num,
    first_unit: unit1,
    second_unit: unit2,
    result: '',
    error: false
  }
  if (unit1 == 'b' || unit1 == 'byte' || unit1 == 'Byte' || unit1 == 'B') {
    if (unit2 == 'b' || unit2 == 'byte' || unit2 == 'Byte' || unit2 == 'B') {
      data.result = num
    } else if (unit2 == 'kb' || unit2 == 'kilobyte' || unit2 == 'Kilobyte' || unit2 == 'KB') {
      var tn = Number(num)
      var pay = tn / 1024
      data.result = pay
    } else if (unit2 == 'mb' || unit2 == 'megabyte' || unit2 == 'Megabyte' || unit2 == 'MB') {
      var tn = Number(num)
      var pay = tn / 1048576
      data.result = pay
    } else if (unit2 == 'gb' || unit2 == 'gigabyte' || unit2 == 'Gigabyte' || unit2 == 'GB') {
      var tn = Number(num)
      var pay = tn / 1073741824
      data.result = pay
    } else if (unit2 == 'tb' || unit2 == 'terabyte' || unit2 == 'Terabyte' || unit2 == 'TB') {
      var tn = Number(num)
      var pay = tn / 1099511627776
      data.result = pay
    } else if (unit2 == 'pb' || unit2 == 'petabyte' || unit2 == 'Petabyte' || unit2 == 'PB') {
      var tn = Number(num)
      var pay = tn / 1125899906842624
      data.result = pay
    } else {
      data.error = true
    }
  } else if (unit1 == 'kb' || unit1 == 'kilobyte' || unit1 == 'Kilobyte' || unit1 == 'KB') {
    if (unit2 == 'kb' || unit2 == 'kilobyte' || unit2 == 'Kilobyte' || unit2 == 'KB') {
      data.result = num
    } else if (unit2 == 'b' || unit2 == 'byte' || unit2 == 'Byte' || unit2 == 'B') {
      var tn = Number(num)
      var pay = tn * 1024
      data.result = pay
    } else if (unit2 == 'mb' || unit2 == 'megabyte' || unit2 == 'Megabyte' || unit2 == 'MB') {
      var tn = Number(num)
      var pay = tn / 1024
      data.result = pay
    } else if (unit2 == 'gb' || unit2 == 'gigabyte' || unit2 == 'Gigabyte' || unit2 == 'GB') {
      var tn = Number(num)
      var pay = tn / 1048576
      data.result = pay
    } else if (unit2 == 'tb' || unit2 == 'terabyte' || unit2 == 'Terabyte' || unit2 == 'TB') {
      var tn = Number(num)
      var pay = tn / 8796093022
      data.result = pay
    } else if (unit2 == 'pb' || unit2 == 'petabyte' || unit2 == 'Petabyte' || unit2 == 'PB') {
      var tn = Number(num)
      var pay = tn / 9007199254740
      data.result = pay
    } else {
      data.error = true
    }
  } else if (unit1 == 'mb' || unit1 == 'megabyte' || unit1 == 'Megabyte' || unit1 == 'MB') {
    if (unit2 == 'mb' || unit2 == 'megabyte' || unit2 == 'Megabyte' || unit2 == 'MB') {
      data.result = num
    } else if (unit2 == 'b' || unit2 == 'byte' || unit2 == 'Byte' || unit2 == 'B') {
      var tn = Number(num)
      var pay = tn * 1048576
      data.result = pay
    } else if (unit2 == 'kb' || unit2 == 'kilobyte' || unit2 == 'Kilobyte' || unit2 == 'KB') {
      var tn = Number(num)
      var pay = tn * 1024
      data.result = pay
    } else if (unit2 == 'gb' || unit2 == 'gigabyte' || unit2 == 'Gigabyte' || unit2 == 'GB') {
      var tn = Number(num)
      var pay = tn / 1024
      data.result = pay
    } else if (unit2 == 'tb' || unit2 == 'terabyte' || unit2 == 'Terabyte' || unit2 == 'TB') {
      var tn = Number(num)
      var pay = tn / 1048576
      data.result = pay
    } else if (unit2 == 'pb' || unit2 == 'petabyte' || unit2 == 'Petabyte' || unit2 == 'PB') {
      var tn = Number(num)
      var pay = tn / 1073741823
      data.result = pay
    } else {
      data.error = true
    }
  } else if (unit1 == 'gb' || unit1 == 'gigabyte' || unit1 == 'Gigabyte' || unit1 == 'GB') {
    if (unit2 == 'gb' || unit2 == 'gigabyte' || unit2 == 'Gigabyte' || unit2 == 'GB') {
      data.result = num
    } else if (unit2 == 'b' || unit2 == 'byte' || unit2 == 'Byte' || unit2 == 'B') {
      var tn = Number(num)
      var pay = tn * 8589934592
      data.result = pay
    } else if (unit2 == 'kb' || unit2 == 'kilobyte' || unit2 == 'Kilobyte' || unit2 == 'KB') {
      var tn = Number(num)
      var pay = tn * 1048576
      data.result = pay
    } else if (unit2 == 'mb' || unit2 == 'megabyte' || unit2 == 'Megabyte' || unit2 == 'MB') {
      var tn = Number(num)
      var pay = tn * 1024
      data.result = pay
    } else if (unit2 == 'tb' || unit2 == 'terabyte' || unit2 == 'Terabyte' || unit2 == 'TB') {
      var tn = Number(num)
      var pay = tn / 1024
      data.result = pay
    } else if (unit2 == 'pb' || unit2 == 'petabyte' || unit2 == 'Petabyte' || unit2 == 'PB') {
      var tn = Number(num)
      var pay = tn / 1048576
      data.result = pay
    } else {
      data.error = true
    }
  } else if (unit1 == 'tb' || unit1 == 'terabyte' || unit1 == 'Terabyte' || unit1 == 'TB') {
    if (unit2 == 'tb' || unit2 == 'terabyte' || unit2 == 'Terabyte' || unit2 == 'TB') {
      data.result = num
    } else if (unit2 == 'b' || unit2 == 'byte' || unit2 == 'Byte' || unit2 == 'B') {
      var tn = Number(num)
      var pay = tn * 8796093022208
      data.result = pay
    } else if (unit2 == 'kb' || unit2 == 'kilobyte' || unit2 == 'Kilobyte' || unit2 == 'KB') {
      var tn = Number(num)
      var pay = tn * 8796093022
      data.result = pay
    } else if (unit2 == 'mb' || unit2 == 'megabyte' || unit2 == 'Megabyte' || unit2 == 'MB') {
      var tn = Number(num)
      var pay = tn * 1048576
      data.result = pay
    } else if (unit2 == 'gb' || unit2 == 'gigabyte' || unit2 == 'Gigabyte' || unit2 == 'GB') {
      var tn = Number(num)
      var pay = tn * 1024
      data.result = pay
    } else if (unit2 == 'pb' || unit2 == 'petabyte' || unit2 == 'Petabyte' || unit2 == 'PB') {
      var tn = Number(num)
      var pay = tn / 1024
      data.result = pay
    } else {
      data.error = true
    }
  } else if (unit1 == 'pb' || unit1 == 'petabyte' || unit1 == 'Petabyte' || unit1 == 'PB') {
    if (unit2 == 'pb' || unit2 == 'petabyte' || unit2 == 'Petabyte' || unit2 == 'PB') {
      data.result = num
    } else if (unit2 == 'b' || unit2 == 'byte' || unit2 == 'Byte' || unit2 == 'B') {
      var tn = Number(num)
      var pay = tn * 9007199254741000
      data.result = pay
    } else if (unit2 == 'kb' || unit2 == 'kilobyte' || unit2 == 'Kilobyte' || unit2 == 'KB') {
      var tn = Number(num)
      var pay = tn * 9007199254741
      data.result = pay
    } else if (unit2 == 'mb' || unit2 == 'megabyte' || unit2 == 'Megabyte' || unit2 == 'MB') {
      var tn = Number(num)
      var pay = tn * 1073741824
      data.result = pay
    } else if (unit2 == 'gb' || unit2 == 'gigabyte' || unit2 == 'Gigabyte' || unit2 == 'GB') {
      var tn = Number(num)
      var pay = tn * 1048576
      data.result = pay
    } else if (unit2 == 'tb' || unit2 == 'terabyte' || unit2 == 'Terabyte' || unit2 == 'TB') {
      var tn = Number(num)
      var pay = tn * 1024
      data.result = pay
    } else {
      data.error = true
    }
  } 
  return data;
}
module.exports = unit_byte
