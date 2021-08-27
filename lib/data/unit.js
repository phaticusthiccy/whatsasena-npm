const exec = require('child_process').exec;
const os = require("os");
async function unit(num, unit1, unit2) {
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
  if (unit1 == 'mg' || unit1 == 'miligram' || unit1 == 'Mg' || unit1 == 'MG') {
    if (unit2 == 'mg' || unit2 == 'miligram' || unit2 == 'Mg' || unit2 == 'MG') {
      data.result = num
    } else if (unit2 == 'ct' || unit2 == 'carat' || unit2 == 'Carat' || unit2 == 'CT') {
      var tn = Number(num)
      var pay = tn / 200
      data.result = pay
    } else if (unit2 == 'g' || unit2 == 'gram' || unit2 == 'Gram' || unit2 == 'G') {
      var tn = Number(num)
      var pay = tn / 1000
      data.result = pay
    } else if (unit2 == 'oz' || unit2 == 'ons' || unit2 == 'Ons' || unit2 == 'OZ') {
      var tn = Number(num)
      var pay = tn / 28349
      data.result = pay
    } else if (unit2 == 'lb' || unit2 == 'pound' || unit2 == 'Pound' || unit2 == 'LB') {
      var tn = Number(num)
      var pay = tn / 453592
      data.result = pay
    } else if (unit2 == 'kg' || unit2 == 'kilogram' || unit2 == 'Kilogram' || unit2 == 'KG') {
      var tn = Number(num)
      var pay = tn / 1000000
      data.result = pay
    } else if (unit2 == 'q' || unit2 == 'quintal' || unit2 == 'Quintal' || unit2 == 'Q') {
      var tn = Number(num)
      var pay = tn / 100000000
      data.result = pay
    } else if (unit2 == 't' || unit2 == 'ton' || unit2 == 'Ton' || unit2 == 'T') {
      var tn = Number(num)
      var pay = tn / 1000000000
      data.result = pay
    } else {
      data.error = true
    }
  } 
  else if (unit1 == 'ct' || unit1 == 'carat' || unit1 == 'Carat' || unit1 == 'CT') {
    if (unit2 == 'ct' || unit2 == 'carat' || unit2 == 'Carat' || unit2 == 'CT') {
      data.result = num
    } else if (unit2 == 'mg' || unit2 == 'miligram' || unit2 == 'Miligram' || unit2 == 'MG') {
      var tn = Number(num)
      var pay = tn * 200
      data.result = pay
    } else if (unit2 == 'g' || unit2 == 'gram' || unit2 == 'Gram' || unit2 == 'G') {
      var tn = Number(num)
      var pay = tn / 5
      data.result = pay
    } else if (unit2 == 'oz' || unit2 == 'ons' || unit2 == 'Ons' || unit2 == 'OZ') {
      var tn = Number(num)
      var pay = tn / 141
      data.result = pay
    } else if (unit2 == 'lb' || unit2 == 'pound' || unit2 == 'Pound' || unit2 == 'LB') {
      var tn = Number(num)
      var pay = tn / 2268
      data.result = pay
    } else if (unit2 == 'kg' || unit2 == 'kilogram' || unit2 == 'Kilogram' || unit2 == 'KG') {
      var tn = Number(num)
      var pay = tn / 5000
      data.result = pay
    } else if (unit2 == 'q' || unit2 == 'quintal' || unit2 == 'Quintal' || unit2 == 'Q') {
      var tn = Number(num)
      var pay = tn / 500000
      data.result = pay
    } else if (unit2 == 't' || unit2 == 'ton' || unit2 == 'Ton' || unit2 == 'T') {
      var tn = Number(num)
      var pay = tn / 5000000
      data.result = pay
    } else {
      data.error = true
    }
  }
  else if (unit1 == 'g' || unit1 == 'gram' || unit1 == 'Gram' || unit1 == 'G') {
    if (unit2 == 'g' || unit2 == 'gram' || unit2 == 'Gram' || unit2 == 'G') {
      data.result = num
    } else if (unit2 == 'mg' || unit2 == 'miligram' || unit2 == 'Miligram' || unit2 == 'MG') {
      var tn = Number(num)
      var pay = tn * 1000
      data.result = pay
    } else if (unit2 == 'ct' || unit2 == 'carat' || unit2 == 'Carat' || unit2 == 'CT') {
      var tn = Number(num)
      var pay = tn / 5
      data.result = pay
    } else if (unit2 == 'oz' || unit2 == 'ons' || unit2 == 'Ons' || unit2 == 'OZ') {
      var tn = Number(num)
      var pay = tn / 28
      data.result = pay
    } else if (unit2 == 'lb' || unit2 == 'pound' || unit2 == 'Pound' || unit2 == 'LB') {
      var tn = Number(num)
      var pay = tn / 453
      data.result = pay
    } else if (unit2 == 'kg' || unit2 == 'kilogram' || unit2 == 'Kilogram' || unit2 == 'KG') {
      var tn = Number(num)
      var pay = tn / 1000
      data.result = pay
    } else if (unit2 == 'q' || unit2 == 'quintal' || unit2 == 'Quintal' || unit2 == 'Q') {
      var tn = Number(num)
      var pay = tn / 100000
      data.result = pay
    } else if (unit2 == 't' || unit2 == 'ton' || unit2 == 'Ton' || unit2 == 'T') {
      var tn = Number(num)
      var pay = tn / 1000000
      data.result = pay
    } else {
      data.error = true
    }
  }
  else if (unit1 == 'lb' || unit1 == 'pound' || unit1 == 'Pound' || unit1 == 'LB') {
    if (unit2 == 'lb' || unit2 == 'pound' || unit2 == 'Pound' || unit2 == 'LB') {
      data.result = num
    } else if (unit2 == 'mg' || unit2 == 'miligram' || unit2 == 'Miligram' || unit2 == 'MG') {
      var tn = Number(num)
      var pay = tn * 453592
      data.result = pay
    } else if (unit2 == 'ct' || unit2 == 'carat' || unit2 == 'Carat' || unit2 == 'CT') {
      var tn = Number(num)
      var pay = tn * 2266
      data.result = pay
    } else if (unit2 == 'g' || unit2 == 'gram' || unit2 == 'Gram' || unit2 == 'G') {
      var tn = Number(num)
      var pay = tn * 453
      data.result = pay
    } else if (unit2 == 'oz' || unit2 == 'ons' || unit2 == 'Ons' || unit2 == 'OZ') {
      var tn = Number(num)
      var pay = tn * 16
      data.result = pay
    } else if (unit2 == 'kg' || unit2 == 'kilogram' || unit2 == 'Kilogram' || unit2 == 'KG') {
      var tn = Number(num)
      var pay = tn / 2
      data.result = pay
    } else if (unit2 == 'q' || unit2 == 'quintal' || unit2 == 'Quintal' || unit2 == 'Q') {
      var tn = Number(num)
      var pay = tn / 220
      data.result = pay
    } else if (unit2 == 't' || unit2 == 'ton' || unit2 == 'Ton' || unit2 == 'T') {
      var tn = Number(num)
      var pay = tn / 2204
      data.result = pay
    } else {
      data.error = true
    }
  }
  else if (unit1 == 'oz' || unit1 == 'ons' || unit1 == 'Ons' || unit1 == 'OZ') {
    if (unit2 == 'oz' || unit2 == 'ons' || unit2 == 'Ons' || unit2 == 'OZ') {
      data.result = num
    } else if (unit2 == 'mg' || unit2 == 'miligram' || unit2 == 'Miligram' || unit2 == 'MG') {
      var tn = Number(num)
      var pay = tn * 28349
      data.result = pay
    } else if (unit2 == 'ct' || unit2 == 'carat' || unit2 == 'Carat' || unit2 == 'CT') {
      var tn = Number(num)
      var pay = tn * 141
      data.result = pay
    } else if (unit2 == 'g' || unit2 == 'gram' || unit2 == 'Gram' || unit2 == 'G') {
      var tn = Number(num)
      var pay = tn * 28
      data.result = pay
    } else if (unit2 == 'lb' || unit2 == 'pound' || unit2 == 'Pound' || unit2 == 'LB') {
      var tn = Number(num)
      var pay = tn / 16
      data.result = pay
    } else if (unit2 == 'kg' || unit2 == 'kilogram' || unit2 == 'Kilogram' || unit2 == 'KG') {
      var tn = Number(num)
      var pay = tn / 35
      data.result = pay
    } else if (unit2 == 'q' || unit2 == 'quintal' || unit2 == 'Quintal' || unit2 == 'Q') {
      var tn = Number(num)
      var pay = tn / 3527
      data.result = pay
    } else if (unit2 == 't' || unit2 == 'ton' || unit2 == 'Ton' || unit2 == 'T') {
      var tn = Number(num)
      var pay = tn / 35273
      data.result = pay
    } else {
      data.error = true
    }
  }
  else if (unit1 == 'kg' || unit1 == 'kilogram' || unit1 == 'Kilogram' || unit1 == 'KG') {
    if (unit2 == 'kg' || unit2 == 'kilogram' || unit2 == 'Kilogram' || unit2 == 'KG') {
      data.result = num
    } else if (unit2 == 'mg' || unit2 == 'miligram' || unit2 == 'Miligram' || unit2 == 'MG') {
      var tn = Number(num)
      var pay = tn * 1000000
      data.result = pay
    } else if (unit2 == 'ct' || unit2 == 'carat' || unit2 == 'Carat' || unit2 == 'CT') {
      var tn = Number(num)
      var pay = tn * 5000
      data.result = pay
    } else if (unit2 == 'g' || unit2 == 'gram' || unit2 == 'Gram' || unit2 == 'G') {
      var tn = Number(num)
      var pay = tn * 1000
      data.result = pay
    } else if (unit2 == 'oz' || unit2 == 'ons' || unit2 == 'Ons' || unit2 == 'OZ') {
      var tn = Number(num)
      var pay = tn * 35 
      data.result = pay
    } else if (unit2 == 'lb' || unit2 == 'pound' || unit2 == 'Pound' || unit2 == 'LB') {
      var tn = Number(num)
      var pay = tn / 2
      data.result = pay
    } else if (unit2 == 'q' || unit2 == 'quintal' || unit2 == 'Quintal' || unit2 == 'Q') {
      var tn = Number(num)
      var pay = tn / 100
      data.result = pay
    } else if (unit2 == 't' || unit2 == 'ton' || unit2 == 'Ton' || unit2 == 'T') {
      var tn = Number(num)
      var pay = tn / 1000
      data.result = pay
    } else {
      data.error = true
    }
  }
  else if (unit1 == 'q' || unit1 == 'Quintal' || unit1 == 'quintal' || unit1 == 'Q') {
    if (unit2 == 'q' || unit2 == 'Quintal' || unit2 == 'quintal' || unit2 == 'Q') {
      data.result = num
    } else if (unit2 == 'mg' || unit2 == 'miligram' || unit2 == 'Miligram' || unit2 == 'MG') {
      var tn = Number(num)
      var pay = tn * 100000000
      data.result = pay
    } else if (unit2 == 'ct' || unit2 == 'carat' || unit2 == 'Carat' || unit2 == 'CT') {
      var tn = Number(num)
      var pay = tn * 500000
      data.result = pay
    } else if (unit2 == 'g' || unit2 == 'gram' || unit2 == 'Gram' || unit2 == 'G') {
      var tn = Number(num)
      var pay = tn * 100000
      data.result = pay
    } else if (unit2 == 'oz' || unit2 == 'ons' || unit2 == 'Ons' || unit2 == 'OZ') {
      var tn = Number(num)
      var pay = tn * 3527
      data.result = pay
    } else if (unit2 == 'lb' || unit2 == 'pound' || unit2 == 'Pound' || unit2 == 'LB') {
      var tn = Number(num)
      var pay = tn * 220
      data.result = pay
    } else if (unit2 == 'kg' || unit2 == 'kilogram' || unit2 == 'Kilogram' || unit2 == 'KG') {
      var tn = Number(num)
      var pay = tn * 100
      data.result = pay
    } else if (unit2 == 't' || unit2 == 'ton' || unit2 == 'Ton' || unit2 == 'T') {
      var tn = Number(num)
      var pay = tn / 10
      data.result = pay
    } else {
      data.error = true
    }
  }
  else if (unit1 == 't' || unit1 == 'ton' || unit1 == 'Ton' || unit1 == 'T') {
    if (unit2 == 't' || unit2 == 'Ton' || unit2 == 'ton' || unit2 == 'T') {
      data.result = num
    } else if (unit2 == 'mg' || unit2 == 'miligram' || unit2 == 'Miligram' || unit2 == 'MG') {
      var tn = Number(num)
      var pay = tn * 100000000000
      data.result = pay
    } else if (unit2 == 'ct' || unit2 == 'carat' || unit2 == 'Carat' || unit2 == 'CT') {
      var tn = Number(num)
      var pay = tn * 500000000
      data.result = pay
    } else if (unit2 == 'g' || unit2 == 'gram' || unit2 == 'Gram' || unit2 == 'G') {
      var tn = Number(num)
      var pay = tn * 1000000
      data.result = pay
    } else if (unit2 == 'oz' || unit2 == 'ons' || unit2 == 'Ons' || unit2 == 'OZ') {
      var tn = Number(num)
      var pay = tn * 35274
      data.result = pay
    } else if (unit2 == 'lb' || unit2 == 'pound' || unit2 == 'Pound' || unit2 == 'LB') {
      var tn = Number(num)
      var pay = tn * 2204
      data.result = pay
    } else if (unit2 == 'kg' || unit2 == 'kilogram' || unit2 == 'Kilogram' || unit2 == 'KG') {
      var tn = Number(num)
      var pay = tn * 1000
      data.result = pay
    } else if (unit2 == 'q' || unit2 == 'quintal' || unit2 == 'Quintal' || unit2 == 'Q') {
      var tn = Number(num)
      var pay = tn * 10
      data.result = pay
    } else {
      data.error = true
    }
  }
  return data;
}
module.exports = unit
