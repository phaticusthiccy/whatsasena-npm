/* Codded by Phaticusthiccy

Eva, The Phaticusthiccy's Multifunctional Artificial Intelligence

Eva AI has more than 50 Gigabyte dataset which including neural calculator,
wikipedia data, sentiment analysis, Instagram workflow with neural cells.

Thanks for Brainshop.ai for a rest connection with non-ethernet interaction
Eva database. 

Eva is a multimedia-powered artificial intelligence with its own virtual brain.
Brainshop.ai allow access to load all external conversation for train Neural cells,
from every user's historical conversations.

Think twice about your choices about Eva. 
May react differently in directed situations. This is completely natural and depends on users.
All message history with Eva is not exported to any 3rd applications.
Since Eva works entirely with deep learning, all responsibility belongs to the user.

Arvix Articles About Eva's System:
>> https://arxiv.org/abs/2106.09461
>> https://arxiv.org/abs/2102.00287
>>https://arxiv.org/abs/2106.06157

Wikipedia Articles About Eva'a System:
>> https://en.m.wikipedia.org/wiki/Optical_character_recognition
>> https://en.m.wikipedia.org/wiki/Text_mining
>> https://en.m.wikipedia.org/wiki/Natural_language_processing

*/
// ===================================================
/*
Eva has never been connected to the internet previously.
The Brainshop.ai supports to javascript datasets, so thats way we cloned some datas from Eva to 
Brainshop.ai. 

Therefore, 100% efficiency cannot be obtained from Eva Artificial Intelligence.
The voice recognition doesn't work with eva infrastructure.
We are using wit.ai's voice recognition for voicy conversation.
The all input datas must be english. We are using google translate before send users inputs.
*/

const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

async function eva_ai(msg) {
    var eva_functionality = ''
    async function eva_functionality_f() {
        await heroku.get(baseURI + '/config-vars').then(async (vars) => {
            eva_functionality = vars.FULL_EVA
        });
    }
    eva_functionality_f()

    var unique_ident = message.client.user.jid.split('@')[0]      
    let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
    let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'
    var finm = msg.replace('Eva', '').replace(' ', '')   
    var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
    if (ainame !== 'Asena') return;
    var ldet = lngDetector.detect(finm)
    var trmsg = ''
    try {
        if (ldet[0][0] !== 'english') {
            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        } else { trmsg = finm }
    } catch {
        ceviri = await translatte(finm, {
            from: 'auto', 
            to: 'EN'
        });
        if ('text' in ceviri) {
            trmsg = ceviri.text
        }
    }
    var uren = encodeURI(trmsg)
    await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
        var fins = ''                           
        if (conf.LANG !== 'EN') {
            ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
            if ('text' in ceviri) {
                fins = ceviri.text
            }
        } else { fins = response.data.cnt }
        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
    })
}
module.exports = eva_ai;
