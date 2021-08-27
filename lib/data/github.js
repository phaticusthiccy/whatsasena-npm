const axios = require("axios")
const exec = require('child_process').exec;
const os = require("os");
async function github_user(user) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!user) {
    throw new Error('Missed Username !!')
  }
  var data = {
    username: '',
    name: '',
    repos: '',
    gists: '',
    following: '',
    follower: '',
    image: '',
    id: '',
    last_update: '',
    created_at: '',
    biography: '',
    location: '',
    hireable: '',
    blog: '',
    twitter: '',
    company: '',
    mail: '',
    status: ''
  }
  await axios.get('https://api.github.com/users/' + user).then(async (data_x) => {
    if (data_x.data.message !== undefined) {
      data.status = false
    } else {
      data.status = true
      data.username = data_x.data.login
      data.name = data_x.data.name == null ? 'null' : data_x.data.name
      data.repos = data_x.data.public_repos.toString()
      data.gists = data_x.data.public_gists.toString()
      data.following = data_x.data.following.toString()
      data.follower = data_x.data.followers.toString()
      data.image = data_x.data.avatar_url
      data.id = data_x.data.id.toString()
      data.last_update = data_x.data.updated_at
      data.created_at = data_x.data.created_at
      data.biography = data_x.data.bio == null ? 'null' : data_x.data.bio
      data.location = data_x.data.location == null ? 'null' : data_x.data.location
      data.hireable = data_x.data.hireable == null ? 'null' : data_x.data.hireable
      data.blog = data_x.data.blog == '' ? false : data_x.data.blog
      data.twitter = data_x.data.twitter_username == null ? 'null' : data_x.data.twitter_username
      data.company == data_x.data.company == null ? 'null' : data_x.data.company
      data.mail = data_x.data.email == null ? 'null' : data_x.data.email
    }
  })
  return data;
}
module.exports = github_user
