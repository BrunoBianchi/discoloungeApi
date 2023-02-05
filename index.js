const { EventEmitter } = require("events");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { Permissions,Intents,MessageEmbed,Client,GatewayIntentBits,Collection,EmbedBuilder  } = require('discord.js');
const client2 = new Client({ 
    intents: [Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_PRESENCES ,Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MEMBERS,
    ]
});
var url = 'https://discolounge.net'
const io = require("socket.io-client");
 class discoloungeClient extends Client  {
    constructor(token,client) {
        if(!client) {
            client = new Client({ 
                intents: [Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_PRESENCES ,Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MEMBERS,
                ]
            });
        }
        super({client,intents:client.options.intents});
        this.client = client
        this.token = token
        fetch(`${url}/api/login/servers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token:this.token
            },
        }).then(res => res.json())
        .then(async response => {
           if(response.status === 'success') {
            this.client.discoLounge = response.body
            this.socket = io.connect(`${url}`, {
                reconnect: true,
                autoConnect: true,
                reconnectionDelay: 1000,
                reconnectionDelayMax: 50000,
                reconnectionAttempts: 5,
            });
           this.socket.on('vote',(...args)=>{
                this.client.emit('vote',...args)
            })
            this.socket.on('bump',(...args)=>{
                this.client.emit('bump',...args)
            })
            this.socket.on('connect',socket=>{
                this.socket.emit("joinRoom",{token:this.token})
                this.client.emit('connect',socket)
            })
            this.socket.on('reconnect',socket=>{
                this.socket.emit("joinRoom",{token:this.token})
            })
           }else {
            this.client.emit('error',response)
           }

    })
    return this.client    
    }
}

