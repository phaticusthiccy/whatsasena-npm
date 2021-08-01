const request = require('request');
const fs = require('fs');
async function anime_download() {
  var download = async(uri, filename, callback) => {
    await request.head(uri, async(err, res, body) => {    
      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };
  var totalImages = 100000;
  id = Math.floor(Math.random() * totalImages);
  var data = 'https://www.thiswaifudoesnotexist.net/example-' + id + '.jpg'
  return data;
}
