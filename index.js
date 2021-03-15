var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: "「☯」ᴋᴜʀᴏ ꜰᴜᴊɪɴᴀᴍɪ",
                assets: {
                    large_image: "lovekuro",
                    large_text: "Sραrrσωhαωκ x ᴋᴜʀᴏ ꜰᴜᴊɪɴᴀᴍɪ"
                },
                buttons: [{ label: "Dedicated to my lover", url: "https://discord.com/api/oauth2/authorize?client_id=764449386708467733&permissions=8&scope=bot" },
                    { label: "ᴋᴜʀᴏ is mine", url: "https://discord.com/api/oauth2/authorize?client_id=801976251525890158&permissions=8&scope=botions=8&scope=bot" }
                ]
            },
        })
    }),
    client.login({ clientId: "801976251525890158" }).catch(console.error);