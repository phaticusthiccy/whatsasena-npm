const axios = require("axios")
const exec = require('child_process').exec;
const os = require("os");
async function github_repo(repo) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!repo) {
    throw new Error("Missing Repository !!");
  }
  var data = {
    username: '',
    repo_id: '',
    repo_name: '',
    repo_desc: '',
    fork: '',
    created_at: '',
    updated_at: '',
    size: '',
    star: '',
    watcher: '',
    language: '',
    forks: '',
    issues: '',
    has_lisance: '',
    lisance_name: '',
    lisance_key: '',
    branch: '',
    subscribers: ''
  }

  await axios.get('https://api.github.com/repos/' + repo).then(async (data_x) => {
    data.username = data_x.data.owner.login
    data.repo_id = data_x.data.id
    data.repo_name = data_x.data.name
    data.repo_desc = data_x.data.description
    data.fork = data_x.data.fork
    data.created_at = data_x.data.created_at
    data.updated_at = data_x.data.updated_at
    data.size = data_x.data.size.toString()
    data.star = data_x.data.stargazers_count.toString()
    data.watcher = data_x.data.watchers_count.toString()
    data.language = data_x.data.language
    data.forks = data_x.data.forks_count.toString()
    data.issues = data_x.data.open_issues_count.toString()
    if (data_x.data.lisance == null) {
      data.has_lisance = false
    } else {
      data.has_lisance = true
      data.lisance_name = data_x.data.lisance.name
      data.lisance_key = data_x.data.lisance.key
    }
    data.branch = data_x.data.default_branch
    data.subscribers = data_x.data.subscribers_count.toString()
  });
  return data;
}
module.exports = github_repo
