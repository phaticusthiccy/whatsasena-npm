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
    data.repo.username = '*Username:* '
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
    data.not_found_repo = '*Repository Not Found!*'
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
  else if (Language == 'ID') {

    // For User Check
    data.user.name = '*Nama:* '
    data.user.username = '*Nama pengguna:* '
    data.user.repos = '*Jumlah Repositori Terbuka:* '
    data.user.gists = '*Jumlah Gists Terbuka:* '
    data.user.following = '*Jumlah yang Diikuti:* '
    data.user.follower = '*Jumlah Pengikut:* '
    data.user.id = '*Pengguna ID:* '
    data.user.last_update = '*Aktivitas terakhir:* '
    data.user.created_at = '*Tanggal Pembuatan:* '
    data.user.biography = '*Biografi:* '
    data.user.location = '*Lokasi:* '
    data.user.hireable = '*Apakah bisa disewa?:* '
    data.user.blog = '*Blog:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Perusahaan:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*Nama pengguna:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Repository Nama:* '
    data.repo.repo_desc = '*Repository Keterangan:* '
    data.repo.fork = '*Apakah itu kloning??:* '
    data.repo.created_at = '*Tanggal Pembuatan:* '
    data.repo.updated_at = '*Aktivitas terakhir:* '
    data.repo.size = '*Repository Ukuran:* '
    data.repo.star = '*Jumlah Bintang:* '
    data.repo.watcher = '*Pemirsa:* '
    data.repo.language = '*Repository Bahasa:* '
    data.repo.forks = '*Jumlah Klon:* '
    data.repo.issues = '*Buka Masalah:* '
    data.repo.has_lisance = '*Apakah Berlisensi?:* '
    data.repo.lisance_name = '*Nama Lisensi:* '
    data.repo.lisance_key = '*Kunci lisensi:* '
    data.repo.branch = '*Cabang utama:* '
    data.repo.subscribers = '*Jumlah Pelanggan:* '

    // Additional Content
    data.not_found_user = '*Pengguna tidak ditemukan!*'
    data.not_found_repo = '*Repositori Tidak Ditemukan!*'
    data.can_rent = '*✅ Dapat disewa.*'
    data.cant_rent = '*⛔ Tidak Dapat Disewa.*'
  }
  else if (Language == 'RU') {

    // For User Check
    data.user.name = '*Имя:* '
    data.user.username = '*Имя пользователя:* '
    data.user.repos = '*Количество открытых репозиториев:* '
    data.user.gists = '*Количество открытых Gists:* '
    data.user.following = '*Количество подписанных:* '
    data.user.follower = '*Количество подписчиков:* '
    data.user.id = '*Пользователь ID:* '
    data.user.last_update = '*Последняя активность:* '
    data.user.created_at = '*Дата создания:* '
    data.user.biography = '*биография:* '
    data.user.location = '*Место нахождения:* '
    data.user.hireable = '*Можно его арендовать?:* '
    data.user.blog = '*Блог:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Компания:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*Имя пользователя:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Repository Имя:* '
    data.repo.repo_desc = '*Repository Описание:* '
    data.repo.fork = '*Это клонировано?:* '
    data.repo.created_at = '*Дата создания:* '
    data.repo.updated_at = '*Последняя активность:* '
    data.repo.size = '*Repository Размер:* '
    data.repo.star = '*Количество звезд:* '
    data.repo.watcher = '*Зрителей:* '
    data.repo.language = '*Язык репозитория:* '
    data.repo.forks = '*Количество клонов:* '
    data.repo.issues = '*Открытые вопросы:* '
    data.repo.has_lisance = '*Это лицензировано?:* '
    data.repo.lisance_name = '*Название лицензии:* '
    data.repo.lisance_key = '*Лицензионный ключ:* '
    data.repo.branch = '*Основная отрасль:* '
    data.repo.subscribers = '*Количество подписчиков:* '

    // Additional Content
    data.not_found_user = '*Пользователь не найден!*'
    data.not_found_repo = '*Репозиторий не найден!*'
    data.can_rent = '*✅ Арендуемый.*'
    data.cant_rent = '*⛔ Не сдаётся в аренду.*'
  }
  else if (Language == 'ES') {

    // For User Check
    data.user.name = '*Nombre:* '
    data.user.username = '*Nombre de usuario:* '
    data.user.repos = '*Número de abiertos Repository:* '
    data.user.gists = '*Número de gists abiertos:* '
    data.user.following = '*Número de seguidos:* '
    data.user.follower = '*Numero de seguidores:* '
    data.user.id = '*ID de usuario:* '
    data.user.last_update = '*Última actividad:* '
    data.user.created_at = '*Fecha de creación:* '
    data.user.biography = '*Biografía:* '
    data.user.location = '*Localización:* '
    data.user.hireable = '*Se puede alquilar?:* '
    data.user.blog = '*Blog:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Empresa:* '
    data.user.mail = '*Email:* '

    // For Repository Check
    data.repo.username = '*Nombre de usuario:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Repository Nombre:* '
    data.repo.repo_desc = '*Repository Descripción:* '
    data.repo.fork = '*Está clonado?:* '
    data.repo.created_at = '*Fecha de creación:* '
    data.repo.updated_at = '*Última actividad:* '
    data.repo.size = '*Repository Tamaño:* '
    data.repo.star = '*Número de estrellas:* '
    data.repo.watcher = '*Espectadores:* '
    data.repo.language = '*Repository Idioma:* '
    data.repo.forks = '*Número de clones:* '
    data.repo.issues = '*Problemas abiertos:* '
    data.repo.has_lisance = '*Es licencia?:* '
    data.repo.lisance_name = '*Nombre de la licencia:* '
    data.repo.lisance_key = '*Clave de licencia:* '
    data.repo.branch = '*Rama principal:* '
    data.repo.subscribers = '*Numero de suscriptores:* '

    // Additional Content
    data.not_found_user = '*Usuario no encontrado!*'
    data.not_found_repo = '*Repository Extraviado!*'
    data.can_rent = '*✅ Arrendable.*'
    data.cant_rent = '*⛔ No alquilable.*'
  }
  else if (Language == 'ML') {

    // For User Check
    data.user.name = '*പേര്:* '
    data.user.username = '*ഉപയോക്തൃനാമം:* '
    data.user.repos = '*തുറന്ന ശേഖരത്തിന്റെ എണ്ണം:* '
    data.user.gists = '*തുറന്ന സംഘങ്ങളുടെ എണ്ണം:* '
    data.user.following = '*പിന്തുടരുന്നവരുടെ എണ്ണം:* '
    data.user.follower = '*പിന്തുടരുന്നവരുടെ എണ്ണം:* '
    data.user.id = '*യൂസർ ഐഡി:* '
    data.user.last_update = '*അവസാന പ്രവർത്തനം:* '
    data.user.created_at = '*സൃഷ്ടിച്ച തീയതി:* '
    data.user.biography = '*ജീവചരിത്രം:* '
    data.user.location = '*സ്ഥാനം:* '
    data.user.hireable = '*അത് വാടകയ്ക്ക് എടുക്കാൻ കഴിയുമോ?:* '
    data.user.blog = '*ബ്ലോഗ്:* '
    data.user.twitter = '*ട്വിറ്റർ:* '
    data.user.company = '*കമ്പനി:* '
    data.user.mail = '*ഇ-മെയിൽ:* '

    // For Repository Check
    data.repo.username = '*ഉപയോക്തൃനാമം:* '
    data.repo.repo_id = '*ശേഖരത്തിന്റെ ഐഡി:* '
    data.repo.repo_name = '*ശേഖരത്തിന്റെ പേര്:* '
    data.repo.repo_desc = '*റിപ്പോസിറ്ററി വിവരണം:* '
    data.repo.fork = '*ഇത് ക്ലോൺ ചെയ്തിട്ടുണ്ടോ?:* '
    data.repo.created_at = '*സൃഷ്ടിച്ച തീയതി:* '
    data.repo.updated_at = '*അവസാന പ്രവർത്തനം:* '
    data.repo.size = '* ശേഖരത്തിന്റെ വലുപ്പം:* '
    data.repo.star = '*സ്റ്റാറുകളുടെ എണ്ണം:* '
    data.repo.watcher = '*കാഴ്ചക്കാർ:* '
    data.repo.language = '*റിപ്പോസിറ്ററി ഭാഷ:* '
    data.repo.forks = '*ക്ലോണുകളുടെ എണ്ണം:* '
    data.repo.issues = '*തുറന്ന പ്രശ്നങ്ങൾ:* '
    data.repo.has_lisance = '*ഇത് ലൈസൻസുള്ളതാണോ?:* '
    data.repo.lisance_name = '*ലൈസൻസ് പേര്:* '
    data.repo.lisance_key = '*ലൈസൻസ് കീ:* '
    data.repo.branch = '*പ്രധാന ശാഖ:* '
    data.repo.subscribers = '*വരിക്കാരുടെ എണ്ണം:* '

    // Additional Content
    data.not_found_user = '*ഉപയോക്താവിനെ കണ്ടെത്തിയില്ല!*'
    data.not_found_repo = '*ശേഖരം കണ്ടെത്തിയില്ല!*'
    data.can_rent = '*✅ ലാഭകരമായ.*'
    data.cant_rent = '*⛔വാടകയ്ക്കെടുക്കാനാവില്ല.*'
  }
  else if (Language == 'PT') {

    // For User Check
    data.user.name = '*Nome:* '
    data.user.username = '*Nome do usuário:* '
    data.user.repos = '*Número de repositório aberto:* '
    data.user.gists = '*Número de gists abertas:* '
    data.user.following = '*Número de seguidos:* '
    data.user.follower = '*Número de Seguidores:* '
    data.user.id = '*ID do usuário:* '
    data.user.last_update = '*Ultima atividade:* '
    data.user.created_at = '*Data de criação:* '
    data.user.biography = '*Biografia:* '
    data.user.location = '*Localização:* '
    data.user.hireable = '*Pode ser alugado?:* '
    data.user.blog = '*Blog:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*Empresa:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*Nome do usuário:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Repository Nome:* '
    data.repo.repo_desc = '*Repository Descrição:* '
    data.repo.fork = '*É clonado?:* '
    data.repo.created_at = '*Data de criação:* '
    data.repo.updated_at = '*Ultima atividade:* '
    data.repo.size = '*Repository Tamanho:* '
    data.repo.star = '*Número de estrelas:* '
    data.repo.watcher = '*Visualizadores:* '
    data.repo.language = '*Linguagem do Repositório:* '
    data.repo.forks = '*Número de Clones:* '
    data.repo.issues = '*Questões em aberto:* '
    data.repo.has_lisance = '*É licenciado?:* '
    data.repo.lisance_name = '*Nome da Licença:* '
    data.repo.lisance_key = '*Chave de Licença:* '
    data.repo.branch = '*Filial Principal:* '
    data.repo.subscribers = '*Número de assinantes:* '

    // Additional Content
    data.not_found_user = '*Usuário não encontrado!*'
    data.not_found_repo = '*Repositório não encontrado!*'
    data.can_rent = '*✅ Alugável.*'
    data.cant_rent = '*⛔ Não Alugável.*'
  }
  else if (Language == 'HI') {

    // For User Check
    data.user.name = '*नाम:* '
    data.user.username = '*उपयोगकर्ता नाम:* '
    data.user.repos = '*ओपन रिपोजिटरी की संख्या:* '
    data.user.gists = '*ओपन जिस्ट की संख्या:* '
    data.user.following = '*अनुसरण करने वालों की संख्या:* '
    data.user.follower = '*अनुयायियों की संख्या:* '
    data.user.id = '*उपयोगकर्ता ID:* '
    data.user.last_update = '*आख़िरी गतिविधि:* '
    data.user.created_at = '*निर्माण तिथि:* '
    data.user.biography = '*जीवनी:* '
    data.user.location = '*स्थान:* '
    data.user.hireable = '*क्या इसे किराए पर लिया जा सकता है?:* '
    data.user.blog = '*ब्लॉग:* '
    data.user.twitter = '*Twitter:* '
    data.user.company = '*कंपनी:* '
    data.user.mail = '*E-Mail:* '

    // For Repository Check
    data.repo.username = '*उपयोगकर्ता नाम:* '
    data.repo.repo_id = '*Repository ID:* '
    data.repo.repo_name = '*Repository नाम:* '
    data.repo.repo_desc = '*Repository विवरण:* '
    data.repo.fork = '*क्या यह क्लोन है?:* '
    data.repo.created_at = '*निर्माण तिथि:* '
    data.repo.updated_at = '*आख़िरी गतिविधि:* '
    data.repo.size = '*रिपोजिटरी आकार:* '
    data.repo.star = '*सितारों की संख्या:* '
    data.repo.watcher = '*दर्शकों:* '
    data.repo.language = '*रिपोजिटरी भाषा:* '
    data.repo.forks = '*क्लोनों की संख्या:* '
    data.repo.issues = '*खुले मामले:* '
    data.repo.has_lisance = '*क्या यह लाइसेंस प्राप्त है?:* '
    data.repo.lisance_name = '*लाइसेंस का नाम:* '
    data.repo.lisance_key = '*लाइसेंस कुंजी:* '
    data.repo.branch = '*मुख्य शाखा:* '
    data.repo.subscribers = '*सब्सक्राइबर्स की संख्या:* '

    // Additional Content
    data.not_found_user = '*उपयोगकर्ता नहीं मिला!*'
    data.not_found_repo = '*भंडार नहीं मिला!*'
    data.can_rent = '*✅ किराए योग्य.*'
    data.cant_rent = '*⛔ किराए पर लेने योग्य नहीं.*'
  }
  else {
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
    data.repo.username = '*Username:* '
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
    data.not_found_repo = '*Repository Not Found!*'
    data.can_rent = '*✅ Rentable.*'
    data.cant_rent = '*⛔ Not Rentable.*'
  } 
  return data;
}
module.exports = g_msg
