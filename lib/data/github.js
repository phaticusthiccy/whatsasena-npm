const axios = require("axios")

async function Github(user) {
    if (!user) {
        throw new Error('Missed Username !!')
    }
    var data = ''
    await axios.get('https://api.github.com/users/' + user).then(async (data_x) => {
        data = data_x
    })
    return data;
}
