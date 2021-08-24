const exec = require('child_process').exec;
const os = require("os");

async function g_msg(Language) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    user: {
      name: '',
      username: '',
      repos: '',
      gists: '',
      following: '',
      follower: '',
      id: '',
      last_update: '',
      created_at: '',
      biography: '',
      location: '',
      hireable: '',
      blog: '',
      twitter: '',
      company: '',
      mail: ''
    },
    repo: {
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
  }

  if (Language == 'TR') {

    // For User Check
    data.user.name = '*İsim:* '
    data.user.username = '*Kullanıcı Adı:* '
    data.user.repos = '*Açık Depo Sayısı:* '
    data.user.gists = '*Açık Gist Sayısı:* '
    data.user.following = '*Takipçi Sayısı:* '
    data.user.follower = '*Takip Edilen Sayısı:* '
    data.user.id = '*Kullanıcı ID:* '
    data.user.last_update = '*Son Aktivite:* '
    data.user.created_at = '*Oluşturma Tarihi:* '
    data.user.biography = '*Biyografi:* '
    data.user.location = '*Konum:* '
    data.user.hireable = '*Kiralanabilir mi?:* '
    data.user.blog = '*Blog:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Firma:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*Kullanıcı Adı:* '
    data.repo.repo_id = '*Depo ID:* '
    data.repo.repo_name = '*Depo Adı:* '
    data.repo.repo_desc = '*Depo Açıklaması:* '
    data.repo.fork = '*Klonlanmış mı?:* '
    data.repo.created_at = '*Oluşturma Tarihi:* '
    data.repo.updated_at = '*Son Aktivite:* '
    data.repo.size = '*Depo Boyutu:* '
    data.repo.star = '*Yıldız Sayısı:* '
    data.repo.watcher = '*İzleyenler:* '
    data.repo.language = '*Depo Dili:* '
    data.repo.forks = '*Klon Sayısı:* '
    data.repo.issues = '*Açık Sorunlar:* '
    data.repo.has_lisance = '*Lisanlı mı?:* '
    data.repo.lisance_name = '*Lisans İsmi:* '
    data.repo.lisance_key = '*Lisans Anahtarı:* '
    data.repo.branch = '*Ana Dal:* '
    data.repo.subscribers = '*Abone Sayısı:* '
  }
  return data;
}

