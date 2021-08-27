const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');

async function fb(url) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!url) {
    throw new Error("Missing Query!!");
  }
  var data = {
    video: '',
    title: '',
    caption: '',
    created_at: '',
    plays: '',
    share: '',
    like: '',
    comment: '',
    username: ''
  }
  var video_url = await axios.get(url)

  data.video = video_url.data.split('hd_src:"')[1].split('",sd_src:"')[0]
  data.title = video_url.data.split('<title id="pageTitle">')[1].split('</title>')[0]
  data.caption = video_url.data.split('<meta name="description" content="')[1].split('" />')[0]
  data.created_at = video_url.data.split('uploadDate')[1].split(',')[0].split('"')[2]
  data.plays = video_url.data.split('WatchAction')[1].split(':')[1].split('}')[0]
  data.share = video_url.data.split('ShareAction')[1].split(':')[1].split('}')[0]
  data.like = video_url.data.split('LikeAction')[1].split(':')[1].split('}')[0]
  data.comment = video_url.data.split('commentCount')[1].split(',')[0].split(':')[1]
  data.username = url.split('/')[3]

  return data;
}
module.exports = fb
