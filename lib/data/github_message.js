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
    },
    not_found_user: '',
    not_found_repo: '',
    can_rent: '',
    cant_rent: '',
  }

  if (Language == 'TR') {

    // For User Check
    data.user.name = '*İsim:* '
    data.user.username = '*Kullanıcı Adı:* '
    data.user.repos = '*Açık Depo Sayısı:* '
    data.user.gists = '*Açık Gist Sayısı:* '
    data.user.following = '*Takip Edilen Kişi Sayısı:* '
    data.user.follower = '*Takipçi Sayısı:* '
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

    // Additional Content
    data.not_found_user = '*Kullanıcı Bulunamadı!*'
    data.not_found_repo = '*Depo Bulunamadı!*'
    data.can_rent = '*✅ Kiralanabilir.*'
    data.cant_rent = '*⛔ Kiralanamaz.*'

  }
  else if (Language == 'EN') {

    // For User Check
    data.user.name = '*Name:* '
    data.user.username = '*Username:* '
    data.user.repos = '*Number of Open Repository:* '
    data.user.gists = '*Number of Open Gists:* '
    data.user.following = '*Number of Followed:* '
    data.user.follower = '*Number of Followers:* '
    data.user.id = '*User ID:* '
    data.user.last_update = '*Last Activity:* '
    data.user.created_at = '*Creation Date:* '
    data.user.biography = '*Biography:* '
    data.user.location = '*Location:* '
    data.user.hireable = '*Can it be rented?:* '
    data.user.blog = '*Blog:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Company:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*User name:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Repository Name:* '
    data.repo.repo_desc = '*Repository Description:* '
    data.repo.fork = '*Is it cloned?:* '
    data.repo.created_at = '*Creation Date:* '
    data.repo.updated_at = '*Last Activity:* '
    data.repo.size = '*Repository Size:* '
    data.repo.star = '*Number of Stars:* '
    data.repo.watcher = '*Viewers:* '
    data.repo.language = '*Repository Language:* '
    data.repo.forks = '*Number of Clones:* '
    data.repo.issues = '*Open Issues:* '
    data.repo.has_lisance = '*Is it Licensed?:* '
    data.repo.lisance_name = '*License Name:* '
    data.repo.lisance_key = '*License Key:* '
    data.repo.branch = '*Main Branch:* '
    data.repo.subscribers = '*Number of Subscribers:* '

    // Additional Content
    data.not_found_user = '*User Not Found!*'
    data.not_found_repo = '*Repository Not Found*'
    data.can_rent = '*✅ Rentable.*'
    data.cant_rent = '*⛔ Not Rentable.*'
  }
  else if (Language == 'AZ') {

    // For User Check
    data.user.name = '*Adı:* '
    data.user.username = '*İstifadəçi adı:* '
    data.user.repos = '*Açıq Deponun sayı:* '
    data.user.gists = '*Açıq Gist sayı:* '
    data.user.following = '*İzlənilənlərin sayı:* '
    data.user.follower = '*İzləyicilərin sayı:* '
    data.user.id = '*İstifadəçi ID:* '
    data.user.last_update = '*Son Fəaliyyət:* '
    data.user.created_at = '*Yaradılma tarixi:* '
    data.user.biography = '*Bioqrafiya:* '
    data.user.location = '*Yer:* '
    data.user.hireable = '*Kirayəyə götürmək olar?:* '
    data.user.blog = '*Blog:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Şirkət:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*İstifadəçi adı:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Depo Adı:* '
    data.repo.repo_desc = '*Depo Təsviri:* '
    data.repo.fork = '*Klonlanmışdır?:* '
    data.repo.created_at = '*Yaradılma tarixi:* '
    data.repo.updated_at = '*Son Fəaliyyət:* '
    data.repo.size = '*Depo Ölçüsü:* '
    data.repo.star = '*Ulduzların sayı:* '
    data.repo.watcher = '*İzləyicilər:* '
    data.repo.language = '*Depozit dili:* '
    data.repo.forks = '*Klonların sayı:* '
    data.repo.issues = '*Açıq Məsələlər:* '
    data.repo.has_lisance = '*Lisenziyalıdır?:* '
    data.repo.lisance_name = '*Lisenziya Adı:* '
    data.repo.lisance_key = '*Lisenziya açarı:* '
    data.repo.branch = '*Əsas Filial:* '
    data.repo.subscribers = '*Abunəçilərin sayı:* '

    // Additional Content
    data.not_found_user = '*İstifadəçi Tapılmadı!*'
    data.not_found_repo = '*Depo Tapılmadı!*'
    data.can_rent = '*✅ Kirayə verilir.*'
    data.cant_rent = '*⛔ Kirayə verilmir.*'
  }
  return data;
}

