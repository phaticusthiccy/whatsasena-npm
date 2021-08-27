const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
function editDistance(comm, wr) {
  comm = comm.toLowerCase();
  wr = wr.toLowerCase();
  var costs = new Array();
  for (var i = 0; i <= comm.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= wr.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (comm.charAt(i - 1) != wr.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[wr.length] = lastValue;
  }
  return costs[wr.length];
}
function ai(comm, wr) {
  var longer = comm;
  var shorter = wr;
  if (comm.length < wr.length) {
    longer = wr;
    shorter = comm;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
async function scanner(query, handler, matcher, number, ignition, author, stack) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!query) throw new Error ('Missing Query!!')
  if (!handler) throw new Error ('Missing Command Handler!!')
  if (!matcher) throw new Error ('Missing AIs Matcher!!')
  if (!number) throw new Error ('Missing Int Number!!')
  if (!ignition) throw new Error ('Missing Trigger!!')
  if (!author) throw new Error ('Missing Author!!')
  if (!stack) throw new Error ('Missing Stacks!!')
  var data = ''
  if (query.startsWith(handler)) {
    var ret_number = await ai(matcher, query)
    if (author !== 'Phaticusthiccy' && stack !== 'bot.js') throw new Error ('Fake User Detected!!')
    data = {
      result: ret_number,
      input: query,
      match: matcher,
      handlers: handler,
      owner: author,
    }
  }
  return data;
}
module.exports = scanner
