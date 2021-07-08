const octokit = require("@octokit/core")

async function Github(user) {
    if (!user) {
        throw new Error('Missed Username !!')
    }
    var data = ''
    var data_x = await octokit.request('PATCH /user', {
        name: user
    })
    data = data_x
    return data;
}
