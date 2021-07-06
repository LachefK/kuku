// SE FOR USAR COMO BASE DEIXE PELO MENOS MEU NÚMERO NO MENU 😞
//AGRADEÇO A:
//Ubah aja
//nayla
//MhankBars
//BOTZ
//e outros indonesios que não sei o nome


const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const phoneNum = require('awesome-phonenumber')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, } = require('./lib/register.js')
const request = require('request')
const fetch = require('node-fetch');
const yts = require( 'yt-search')
const { recognize } = require('./lib/ocr')
const encodeUrl = require('encodeurl')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const { sayo } = require('./o menu aqui')
const Exif = require('./lib/exif')
const exif = new Exif()
const imgbb = require('imgbb-uploader')  
const registro = JSON.parse(fs.readFileSync('./akame/registro.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const akamer = JSON.parse(fs.readFileSync('./node_modules/@adiwajshing/baileys/lib/WAConnection/sayo157.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))
const _registered = JSON.parse(fs.readFileSync('./akame/registered.json'))


/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API GRÁTIS ]==============================================================*/                  	    
/*====================================================[ VOLDER BOTZ ]==============================================================*/                    	   
const { 
	bayarLimit, 
	limitAdd
} = require('./lib/limitatm.js') 
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

grupo1 = setting.grupo1
grupo2 = setting.grupo2
grupo3 = setting.grupo3
apikey = nayz.apikey
elitrespon = nayz.elitrespon
connet = nayz.connet
auth0r = nayz.auth0r
replytroli = nayz.replytroli
p = setting.prefix
limitawal = 25
blocked = []
apixteam = setting.apixteam
cr = setting.cr
criadorf = setting.criadorf
criadorz = setting.criadorz
tz = setting.tz 
cr1 = setting.cr1
cr2 = setting.cr2
numberbot = setting.numberbot
apivhtear = setting.apivhtear
fake1 = setting.fake1
fake2 = setting.fake2
author = setting.author
sayoespere = setting.BYSAYO
nomedobot = setting.nomedobot
nomedocriador = setting.nomedocriador
med1 = setting.med1
donasi = setting.donasi
l0lhuman = setting.l0lhuman
pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo
nãomecheaqui = akamer.sayogay
dana = setting.dana
 
// NOTE MAU UBAH??? SILAHKAN UBAH DI SRC + SETTINGS.JSON
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const _Elite = JSON.parse(fs.readFileSync('./akame/Elite.json')) 
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./akame/antilink.json'))
const event = JSON.parse(fs.readFileSync('./akame/event.json'))
const antifake = JSON.parse(fs.readFileSync('./akame/antifake.json'))
const antiwibu = JSON.parse(fs.readFileSync('./akame/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./akame/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./akame/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./akame/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./akame/antigay.json'))
const autofigu = JSON.parse(fs.readFileSync('./akame/autofigu.json'))
const antibocil = JSON.parse(fs.readFileSync('./akame/antibocil.json'))
const _limit = JSON.parse(fs.readFileSync('./akame/limit.json'))
const botx = JSON.parse(fs.readFileSync('./akame/botx.json'))
const ban = JSON.parse(fs.readFileSync('./akame/banned.json')) 
const nayXi = JSON.parse(fs.readFileSync('./akame/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./akame/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./akame/level.json'))
const nayXix = JSON.parse(fs.readFileSync('./akame/nayXix.json')) 
fake = 'AKAME'

 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
            }

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                	            async function starts() {
        	const akame = new WAConnection()
	        akame.logger.level = 'warn'
	        console.log(banner.string)
        	akame.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('LEIA O QR CODE ACIMA 👆'))
	        })
	        fs.existsSync('./akame.json') && akame.loadAuthInfo('./akame.json')
	         akame.on('connecting', () => {
		    start('2', 'CARREGANDO A AKAME 👻')		   
        	})
	        akame.on('open', () => {
	    	success('2', '[❗] CONECTADO')		   
	    	setTimeout( () => {
	    	console.log(color(`[❗]OLÁ OBRIGADO POR USAR A AKAME-BOT`, 'red'))
	    	}, 1000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] CASO TENHA ALGUM ERRO ENTRE EM CONTATO COMIGO NO NÚMERO ABAIXO `, 'red'))
	    	}, 2000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] wa.me/556181496039`, 'red'))
	    	}, 3000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] CREDITOS AO MhankBars POR TER DISPONIBILIZADO A BASE DELE...`, 'red'))
	    	}, 4000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] SCRIPT FEITO POR MIM SAYO`, 'red'))
	    	}, 5000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] APROVEITE 😊`, 'red'))
	    	}, 6000)	    	     	
         	})         	

const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./akame/registered.json', JSON.stringify(_registered))
        }
/*=====================================================[ CONECÇÃO  ]==============================================================*/ 
        	        	await akame.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./akame.json', JSON.stringify(akame.base64EncodedAuthInfo(), null, '\t'))
	        akame.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))     	
	        }
        	})
        akame.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			akame.sendMessage(call, '[❗] Sistema de auto block, meu criador não gosta que me lighem\nSe você quer ser desbloqueado converse com o sayo!!\nhttps//wa.me/556181496039', MessageType.text)
			.then(() => akame.blockUser(call, "add"))
			}, 100);
		})
            
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ WELCOME ]==============================================================*/                  	    
      akame.on('group-participants-update', async (anu) => {
	if(antifake.includes(anu.jid)) {
	const mdata = await akame.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
				akame.sendMessage(mdata.id, '👮🏻‍♀️Números fake aqui não "amigo" 👮🏻‍♀️️', MessageType.text)							
				setTimeout(async function () {
				akame.groupRemove(mdata.id, [num])
					}, )
				}
			}
		}
if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await akame.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			ini_user = akame.contacts[num]
			welkam = `Olá @${num.split('@')[0]} \n◪Seja Bem-vindo(a) Leia as regras e seja feliz`
			const moment = require('moment-timezone')
            const jm = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Janeiro 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = akame.contacts[num] != undefined ? akame.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : akame.contacts[num].notify || akame.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await akame.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '@${num.split('@')[0]}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Bem vindo ao ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			akame.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `${welkam}`, contextInfo: { mentionedJid: [num] }})
			})
			//leave
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		ini_user = akame.contacts[num]
		out =`◪ Tchau @${num.split('@')[0]} 👋\n◪Ja vai tarde baka kkkk~~`
		const moment = require('moment-timezone')
        const jamny = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Janeiro 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = akame.contacts[num] != undefined ? akame.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : akame.contacts[num].notify || akame.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await akame.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
				exec(`magick './src/lev.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '@${num.split('@')[0]}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Saiu de ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			akame.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: out, contextInfo: { mentionedJid: [num] }})
			})
	    }
            } catch (e) {
             console.log('Error : %s', color(e, 'red'))
            }
            })
	        akame.on('CB:Blocklist', json => {
     		if (blocked.length > 2) return
      	    for (let i of json[1].blocklist) {
 	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
     	    }
         	})


        akame.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.p
		global.batrei = global.batrei ? global.batrei : []
		akame.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
	    
	      const fakethumb = (teks, yes) => {
            akame.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            akame.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
             
                  const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
/* ===================================================[ BY NAYLA E SAYO ==============================================================*/    
/*=====================================================[ FUNC ]==============================================================*/                  	                 
	        //sayo-linguagem
			
			
	        akame.on('chat-update', async (nay) => {
      		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.p
			global.blocked				 
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
	        const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(p)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(p) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(p) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(p) ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	runtime = process.uptime()   
	      	const fake3 = `*BOT* ${nomedobot}\n*ATIVADO DESDE* ${kyun(runtime)}` 	
	      						const isCmd = body.startsWith(p)             
            const tescuk = ["0@s.whatsapp.net"]
            	const vip = ["558892594715@s.whatsapp.net","557186613965@s.whatsapp.net",] 
			const botNumber = akame.user.jid
			const númerodocriador = [`${setting.númerodocriador}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const totalchat = await akame.chats.all()
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await akame.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = númerodocriador.includes(sender)
			const isBanned = ban.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false		
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false
			const isNayXi = isGroup ? nayXi.includes(from) : false			     
			const isRegistered = checkRegisteredUser(sender)
			const isNayXix = isGroup ? nayXix.includes(from) : false			 		 
				const isAutofigu = isGroup ? autofigu.includes(from) : false
			const isPrem = prem.includes(sender) || isOwner				
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBotx = isGroup ? botx.includes(from) : false
			pushname = akame.contacts[sender] != undefined ? akame.contacts[sender].vname || akame.contacts[sender].notify : undefined									            
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? akame.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : akame.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `DESCULPE O  ${command} NÃO ESTA REGISTRADO NO MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			akame.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				akame.sendMessage(from, teks, text, {quoted: nay1})
			}
			const nayz = (teks) => {
				akame.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `DEU ERROR FALE COM O SAYO!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				akame.sendMessage(hehe, teks, text)
			}
			const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addEliteUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./akame/Elite.json', JSON.stringify(_Elite))
            }	
            const checkEliteUser = (sender) => {
	        let status = false
	        Object.keys(_Elite).forEach((i) => {
		    if (_Elite[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./akame/limit.json', JSON.stringify(_limit))
            }
            }
             			const sekarang = new Date().getTime();
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'Hora da meia-noite🌚'; break;
                case 1: waktoo = 'Hora da meia-noite🌚'; break;
                case 2: waktoo = 'De manhã cedo🌒'; break;
                case 3: waktoo = 'De manhã cedo🌓'; break;
                case 4: waktoo = 'Alvorecer🌔'; break;
                case 5: waktoo = 'Alvorecer🌔'; break;
                case 6: waktoo = 'Bom dia🌝'; break;
                case 7: waktoo = 'Bom dia🌝'; break;
                case 8: waktoo = 'Bom dia🌝'; break;
                case 9: waktoo = 'Bom dia🌝'; break;
                case 10: waktoo = 'Bom dia🌝'; break;
                case 11: waktoo = 'Boa tarde🌞'; break;
                case 12: waktoo = 'Boa tarde🌞'; break;
                case 13: waktoo = 'Boa tarde🌞'; break;
                case 14: waktoo = 'Boa tarde🌞'; break;
                case 15: waktoo = 'Boa tarde🌝'; break;
                case 16: waktoo = 'Boa tarde🌝'; break;
                case 17: waktoo = 'Boa tarde🌖'; break;
                case 18: waktoo = 'Quase a noite🌘'; break;
                case 19: waktoo = 'Quase a noite🌚'; break;
                case 20: waktoo = 'Boa noite🌚'; break;
                case 21: waktoo = 'Boa noite🌚'; break;
                case 22: waktoo = 'Boa noite🌚'; break;
                case 23: waktoo = 'Meia-noite🌚'; break;
            }
            var tampilUcapan = '' + waktoo;
            
            //buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 1: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 2: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 3: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 4: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 5: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 6: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 7: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 8: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 9: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 10: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 11: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 12: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 13: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 14: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 15: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 16: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 17: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 18: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 19: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 20: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 21: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 22: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 23: waktoonyabro = `Boa noite ${pushname}🌛`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;

			//fake reply
						
        	       
            const nayBulan = ['Janeiro', 'fevereiro', 'Março', 'abril', 'Maio', 'Junho', 'julho', 'agosto', 'setembro', 'Outubro', 'novembro', 'dezembro']
            const bulan = nayBulan[moment().format('MM') - 1]
			const isElite = checkEliteUser(sender)
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hoje','Talvez amanhã','Mais 1 semana','Ainda muito tempo','Faltam 3 meses','Faltam 7 meses','Mais 3 anos','4 meses para ir','Mais 2 meses','Mais 1 ano','1 mês a mais','Tente novamente']
            const tomxic = ["ajg","asu","Ajg","Asu","anjg","Anjg","olol","antek","elaso","Babi","babi","ontol","kntl","kintil","emek","entod"]
			const apa = ['sim','Pode ser','Não','Tente repetir']
			var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT AKAME`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
		 	
		 	var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Domigo'; break;
                case 1: hari = 'Segunda-feira'; break;
                case 2: hari = 'terça'; break;
                case 3: hari = 'quarta-feira'; break;
                case 4: hari = 'quinta-feira'; break;
                case 5: hari = 'sexta-feira'; break;
                case 6: hari = 'sábado'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Janeiro'; break;
                case 1: bulan1 = 'fevereiro'; break;
                case 2: bulan1 = 'Março'; break;
                case 3: bulan1 = 'abril'; break;
                case 4: bulan1 = 'Maio'; break;
                case 5: bulan1 = 'Junho'; break;
                case 6: bulan1 = 'julho'; break;
                case 7: bulan1 = 'agosto'; break;
                case 8: bulan1 = 'setembro'; break;
                case 9: bulan1 = 'Outubro'; break;
                case 10: bulan1 = 'novembro'; break;
                case 11: bulan1 = 'dezembro'; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Horário';
            
            
            //fake reply
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',  forwardingScore: 508, isForwarded: true,'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } }
			const nay1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg') }, 'title': `${fake}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}
                     
                     
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${nomedocriador}\n` 
            + `ORG: SAYO;\n`
            + `TEL;type=CELL;type=VOICE;waid=${criadorf}:${criadorz}\n`
            + 'END:VCARD' /*
            ____________________________
            VCARD MUDE PARA SEU NMR
            */const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: Fernazer\n` 
            + `ORG: AUTHOR;\n`
            + `TEL;type=CELL;type=VOICE;waid=556181496039:+55 61 8149-6039\n`
            + 'END:VCARD'             
            akame.chatRead(from)
            colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('NOME', 'red'), color(pushname, 'yellow'), color('ENVIOU', 'white'), color('O', 'yellow'), color('COMANDO', 'red'), color('➻', 'yellow'), color(command), 'NO :', color('PRIVADO', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('NOME', 'red'), color(pushname, 'yellow'), color('ENVIOU', 'white'), color('O', 'yellow'), color('COMANDO', 'red'), color('➻', 'yellow'), color(command), 'EM :', color(groupName, 'yellow'))			 
             
             const xxx = '```'  
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./akame/limit.json', JSON.stringify(_limit))
            }
            
            
                const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./akame/registro.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
            
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return itsmeiky.sendMessage(from,`SEU LIMITE DE USO (VISUALIZAR) ACABOU`, text,{ quoted: nay})
            akame.sendMessage(from, `SEU LIMITE DE USO : *${limitCounts}*`, text, { quoted : nay})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./akame/limit.json', JSON.stringify(_limit))
            akame.sendMessage(from, `SEU LIMITE DE USO : *${limitCounts}*`, text, { quoted : nay})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            akame.sendMessage(from, `DESCULPE *${pushname}* O SEU LIMITE DE USO DE HOJE EXPIROU.  (O LIMITE) PODE SER OBTIDO POR MEIO DE *#claim*`, text, {quoted: nay})
            return true
            } else {
          	_limit
            position = true
            return false
            }
                const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }            
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./akame/limit.json',JSON.stringify(_limit))
            return false
            }
            }    
            if (isGroup && isElite && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
            addLevelingLevel(sender, 1)
            bayarLimit(sender, 3)
            await reply(sayo.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
            }
            } catch (err) {
            console.error(err)
            }
            }     
             
            switch (command) {
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API GRÁTISE ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 
/*			        
			        
			        
			        MAU NYOLOMG CASE YA OM?? 
			        SETIDAKNYA ADD NAMA GW LAH
			        DI THX TO BOT KLEAN "Fernazer"
			        GK MAU?? OKE TERIMAKASIH			       			        
			        			       			        			       			        			       			        			        
			        
			        
*/                         

         /* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ MENUS ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 				    
		
		case 'daftar':
				case 'rg':                
				if (!isGroup) return reply(`[❗] *Olá ${pushname} você so pode se registrar em grupos 📍`)
				        if (isRegistered) return  reply(`[❗] Olá ${pushname} vocé ja esta cadastrado no bot 📍`)
                if (!q.includes('|')) return  reply(sayo.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('A idade precisa ser um número!!')
                if (namaUser.length >= 30) return reply(`seu nome e muito grande!!!`)
                if (umurUser > 40) return reply(`Precisa ter no maximo 40 anos`)
                if (umurUser < 12) return reply(`Precisa ter no mínimo 12 anos`)
                try {
					ppimg = await akame.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://i.imgur.com/hD2CZS7.jpg' //ubah sesuka kamu, bisa upload di imgbb.com		
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(namaUser)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${imglu}`)
                    await akame.sendMessage(from, buff, image, {quoted: nay1, caption: sayo.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                   } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await akame.sendMessage(from, buff, image, {quoted: nay1, caption: sayo.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                   }
              				break			


case 'menutest':		 
		if (!isRegistered) return reply(sayo.noregis())
 try {
               var ppimg = await akame.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }        
            shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)        
				const kentod = 
`
*╔═╦═══• •✠•❀•✠ • •════╗*
*║✧║   「 MENUS 」*
*║✧║ ུgrupo : ${p}menu1*
*║✧║ ུfigurinha : ${p}menu2*
*║✧║ ུferramentas : ${p}menu3*
*║✧║ ུImagens : ${p}menu4*
*║✧║ ུeditor : ${p}menu5*
*║✧║ ུInfo : ${p}menu6*
*║✧║ ུcriador : ${p}menu7*
*║✧║ ུhentai : ${p}menu8*
*║✧║ ུanimes : ${p}menu9*
*╚═╩═══• •✠•❀•✠ • •════╝*
`
                let buff = await getBuffer(`https://api-exteam.herokuapp.com/api/welcome?titulo=MENU&nome=${encodeUrl(pushname)}&perfil=${shortpc.data}&fundo=https://i.imgur.com/hD2CZS7.jpg&grupo=BEM%20VINDO%20A%20O MENU`)
                akame.sendMessage(from, buff, MessageType.image, {quoted: nay1, caption: kentod, contextInfo: {'mentionedJid': [sender]}})
break

case 'menu':			    
case 'help':			   
if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban()) 
	reply(`[❗] Olá ${pushname} aguarde⏳`)         
				const kentod2 = 
`
*╔═╦═══• •✠•❀•✠ • •════╗*
*║✧║   「 MENUS 」*
*║✧║ ུgrupo : ${p}menu1*
*║✧║ ུfigurinha : ${p}menu2*
*║✧║ ུferramentas : ${p}menu3*
*║✧║ ུImagens : ${p}menu4*
*║✧║ ུeditor : ${p}menu5*
*║✧║ ུInfo : ${p}menu6*
*║✧║ ུcriador : ${p}menu7*
*║✧║ ུhentai : ${p}menu8*
*║✧║ ུanimes : ${p}menu9*
*║✧║ ུinteração : ${p}menu10*
*╚═╩═══• •✠•❀•✠ • •════╝*
`
                let buff2 = await getBuffer(`https://api-exteam.herokuapp.com/api/welcome?titulo=MENU&nome=${encodeURI(pushname)}&perfil=https://i.imgur.com/jbcNv4S.jpg&fundo=https://i.imgur.com/hD2CZS7.jpg&grupo=BEM%20VINDO%20A%20O MENU`)
                akame.sendMessage(from, buff2, MessageType.image, {quoted: nay1, caption: kentod2, contextInfo: {'mentionedJid': [sender]}})
break

case 'menu1': 
		if (!isRegistered) return reply(sayo.noregis())
 if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *GRUPO MENU*
│
└◪› ${p}welcome [1/0]
*╠◪* ${p}antilink [1/0]
*╠◪* ${p}antitrava [1/0]
*╠◪* ${p}antifake [1/0]
*╠◪* ${p}antikwai [1/0]
*╠◪* ${p}leveling [1/0]
*╠◪* ${p}autofigu [1/0]
*╠◪* ${p}promover [@tag]
*╠◪* ${p}rebaixar [@tag]
*╠◪* ${p}tagall
*╠◪* ${p}hidetag
*╠◪* ${p}hidetag10
*╠◪* ${p}supertag
*╠◪* ${p}figutag
*╠◪* ${p}linkgp
*╠◪* ${p}gp abrir/fechar
*╠◪* ${p}add [55]
*╠◪* ${p}kick [@tag]
*╠◪* ${p}level
*╠◪* ${p}setnome
*╠◪* ${p}setdesc
*╠◪* ${p}apagar
*╠◪* ${p}ingfo
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break
case 'menu5': 
		if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *EDITOR MENU*
│
└◪› ${p}video1 [nome]
*╠◪* ${p}video2 [nome]
*╠◪* ${p}video3 [nome]
*╠◪* ${p}video4 [nome]
*╠◪* ${p}video5 [nome]
*╠◪* ${p}video6 [nome]
*╠◪* ${p}rainbow [nome]
*╠◪* ${p}neon1 [nome]
*╠◪* ${p}text3d [nome]
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break					
case 'menu4': 
		if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *MENU DE IMAGENS*
│
└◪› ${p}img [nome]
*╠◪* ${p}bts
*╠◪* ${p}exo
*╠◪* ${p}foto
*╠◪* ${p}blackpink
*╠◪* ${p}pinterest
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break					
case 'menu2': 
		if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *MENU DE FiGURINHAS*
│
└◪› ${p}figu
*╠◪* ${p}st [512x512]
*╠◪* ${p}roubar nome|pacote
*╠◪* ${p}ttp1
*╠◪* ${p}ttp2
*╠◪* ${p}ttp3
*╠◪* ${p}ttp4
*╠◪* ${p}attp
*╠◪* ${p}attp1
*╠◪* ${p}attp2
*╠◪* ${p}attp3
*╠◪* ${p}attp4
*╠◪* ${p}attp5
*╠◪* ${p}attp6
*╠◪* ${p}randomfigu
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break					
case 'menu6': 
		if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *INFO*
│
└◪› ${p}owner
*╠◪* ${p}info
*╠◪* ${p}mygrub
*╠◪* ${p}request [sugestão]
*╠◪* ${p}bug [bug]
*╠◪* ${p}chatlist
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break					
case 'menu7': 
	if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *MENU DO CRIADOR*
│
└◪› ${p}ban
*╠◪* ${p}unban
*╠◪* ${p}addprem
*╠◪* ${p}delprem
*╠◪* ${p}tm
*╠◪* ${p}bugtroli
*╠◪* ${p}setprefix
*╠◪* ${p}mudarverificado
*╠◪* ${p}mudarlogo
*╠◪* ${p}setpp
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break					
case 'menu3': 
		if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *MENU FERRAMENTAS*
│
└◪› ${p}wikipedia
*╠◪* ${p}play
*╠◪* ${p}akame
*╠◪* ${p}ytmp3
*╠◪* ${p}ytmp4
*╠◪* ${p}toimg
*╠◪* ${p}ssweb
*╠◪* ${p}join
*╠◪* ${p}shortener
*╠◪* ${p}urlshort
*╠◪* ${p}tts [pt nome]
*╠◪* ${p}readmore
*╠◪* ${p}addsticker
*╠◪* ${p}getsticker
*╠◪* ${p}liststicker
*╠◪* ${p}addvn
*╠◪* ${p}getvn
*╠◪* ${p}listvn
*╠◪* ${p}addimage
*╠◪* ${p}getimage
*╠◪* ${p}imagelist
*╠◪* ${p}addvideo
*╠◪* ${p}getvideo
*╠◪* ${p}listvideo
*╠◪* ${p}asupan
*╠◪* ${p}asupan1
*╠◪* ${p}asupan2
*╠◪* ${p}renungan
*╠◪* ${p}kusonime [nome]
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break												
case 'menu8': 
		if (!isRegistered) return reply(sayo.noregis())
 if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *MENU HENTAI* 😏
│
└◪› ${p}holo
*╠◪* ${p}solo (o melhor)
*╠◪* ${p}ero
*╠◪* ${p}erofeet
*╠◪* ${p}spank
*╠◪* ${p}feet
*╠◪* ${p}classic
*╠◪* ${p}holoero
*╠◪* ${p}cum
*╠◪* ${p}eroyuri
*╠◪* ${p}eron
*╠◪* ${p}pwankg
*╠◪* ${p}anal
*╠◪* ${p}lewd
*╠◪* ${p}lewdkemo
*╠◪* ${p}solog
*╠◪* ${p}lewdk
*╠◪* ${p}blowjob
*╠◪* ${p}hentai
*╠◪* ${p}hololewd
*╠◪* ${p}trap
*╠◪* ${p}les
*╠◪* ${p}smallboobs
*╠◪* ${p}futanari
*╠◪* ${p}femdom
*╠◪* ${p}erok
*╠◪* ${p}feetg
*╠◪* ${p}erokemo
*╠◪* ${p}boobs
*╠◪* ${p}pussy
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break
case 'menu9': 
		if (!isRegistered) return reply(sayo.noregis())
 if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *MENU ANIMES*
│
└◪› ${p}metadinha
*╠◪* ${p}anime
*╠◪* ${p}randomnekonime
*╠◪* ${p}randomanime
*╠◪* ${p}randomwaifu
*╠◪* ${p}loli2
*╠◪* ${p}waifu2
*╠◪* ${p}tanjiro
*╠◪* ${p}nezuko
*╠◪* ${p}zenitsu
*╠◪* ${p}Inosuke
*╠◪* ${p}genya
*╠◪* ${p}kanao
*╠◪* ${p}hashiras
*╠◪* ${p}kyojuro
*╠◪* ${p}shinobu
*╠◪* ${p}tengen
*╠◪* ${p}mitsuri
*╠◪* ${p}muichiro
*╠◪* ${p}obanai
*╠◪* ${p}naruto
*╠◪* ${p}sasuke
*╠◪* ${p}sakura
*╠◪* ${p}madara
*╠◪* ${p}minato
*╠◪* ${p}kakashi
*╠◪* ${p}itachi
*╠◪* ${p}deidara
*╠◪* ${p}hinata
*╠◪* ${p}jiraiya
*╠◪* ${p}obito
*╠◪* ${p}nagato
*╠◪* ${p}gaara
*╠◪* ${p}tsunade
*╠◪* ${p}shikamaru
*╠◪* ${p}ino
*╠◪* ${p}orochimaro
*╠◪* ${p}neji
*╠◪* ${p}sasori
*╠◪* ${p}nagatoro
*╠◪* ${p}kilua
*╠◪* ${p}deku
*╠◪* ${p}allmight
*╠◪* ${p}katsuki
*╠◪* ${p}tenya
*╠◪* ${p}ochaco
*╠◪* ${p}minoru
*╠◪* ${p}ashido
*╠◪* ${p}shoto
*╠◪* ${p}tsuyu
*╠◪* ${p}denki
*╠◪* ${p}eijiro
*╠◪* ${p}fumikage
*╠◪* ${p}yaoyorozu
*╠◪* ${p}itsuka
*╠◪* ${p}neito
*╠◪* ${p}mei
*╠◪* ${p}neko2
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break
case 'menu10': 
		if (!isRegistered) return reply(sayo.noregis())
 if (isBanned) return reply(sayo.ban()) 
reply(`[❗] Olá ${pushname} aguarde⏳`)         
num = `${sender.split("@")[0]}@s.whatsapp.net`
ow = "556181496039@s.whatsapp.net"
wew = fs.readFileSync(`./src/logo.jpg`)
menusu = `
❏ *PORCENTAGENS*
│
└◪› ${p}gay2
*╠◪* ${p}gado2
*╠◪* ${p}gostosa2
*╠◪* ${p}feio2
*╠◪* ${p}bonito2
*╠◪* ${p}nazista2
*╠◪* ${p}gordo2
*╠◪* ${p}magro2
*╠◪* ${p}feliz2
*╠◪* ${p}triste2
*╠◪* ${p}lolicon2
*╠◪* ${p}punhetero2
*╠◪* ${p}safado2
*╠◪* ${p}santo2
*╠◪* ${p}mentiroso2
*╠◪* ${p}dragão2
*╠◪* ${p}calculista2
*╠◪* ${p}otaku2
*╠◪* ${p}homofobico2
*╠◪* ${p}pedro
*╠◪* ${p}macaco
*╚═════════════════❀*

❏ *O MAIS...*
│
└◪› ${p}lindo
*╠◪* ${p}feio
*╠◪* ${p}bonito
*╠◪* ${p}gay
*╠◪* ${p}gado
*╠◪* ${p}frio
*╠◪* ${p}cauculista
*╠◪* ${p}chato
*╠◪* ${p}legal
*╠◪* ${p}retardado
*╠◪* ${p}homofobico
*╠◪* ${p}inativo
*╠◪* ${p}presente
*╠◪* ${p}rico
*╠◪* ${p}pobre
*╠◪* ${p}sadboy
*╠◪* ${p}toxico
*╠◪* ${p}rockeiro
*╠◪* ${p}baiano
*╠◪* ${p}nazista
*╠◪* ${p}lixo
*╠◪* ${p}gostoso
*╚═════════════════❀*

❏ *OUTROS*
│
└◪› ${p}casal
*╠◪* ${p}quando (texto)
*╠◪* ${p}slot
*╠◪* ${p}gerarnick (nome)
*╠◪* ${p}nickff
*╠◪* ${p}textfont
*╠◪* ${p}nomeninja
*╠◪* ${p}tts (pt texto)
*╚═════════════════❀*` 
akame.sendMessage(from, wew, image, {quoted: nay1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
break

			        case 'join':  
			        		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    if (args.length < 1) return reply(`exemplo ${p}join https://chat.whatsapp.com/DsvALmtInsC6zli3oUazBh`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return akame.sendMessage(from, 'Desculpe, o texto é muito longo, o máximo e 300 caracters', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug22 = `*[CONVITE DE PARTICIPAÇÃO]*\nA PARTIR DE ${pushname} \nGrupo : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    akame.sendMessage(`${setting.númerodocriador}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SUBSCRIBE Lexxy Ganzz`} } } })                    
                    reply('O link foi enviado pra analise aguarde algums minutos 😊')                     
					break  
					case 'listadimin':
			      	case 'listadmin':
				    case 'admins':
			    	case 'adms':
			    			if (!isRegistered) return reply(sayo.noregis())
			    	if (isBanned) return reply(sayo.ban()) 
					if (!isGroup) return reply(`[❗] *SOMENTE EM GRUPOS*`)
					teks = `esses são os adms do grupo *${groupMetadata.subject}*\ntotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'online': 
              		case 'listonline': 
              		case 'listaonline': 
              		case 'pessoasdogrupoonline':         		
if (!isRegistered) return reply(sayo.noregis())              		
              		if (isBanned) return reply(sayo.ban()) 
					if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)			
             		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			        let online = [...Object.keys(akame.chats.get(ido).presences), akame.user.jid]
			        akame.sendMessage(from, 'Lista dos usúarios online do grupo:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: nay1,
    	      		contextInfo: { mentionedJid: online }
		      	    })
			     	break 
			     	case 'setname':
			     	case 'setnome':
				    case 'mudarnome':
				    if (!isRegistered) return reply(sayo.noregis())
				    if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
				    if (isBanned) return reply(sayo.ban()) 
					if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)			
				    if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA TER ADM`)				 	
                    if (!isGroup) return reply(ind.groupo())			        
                    akame.groupUpdateSubject(from, `${body.slice(9)}`)
                    akame.sendMessage(from, '[❗] SUCESSO AO MUDAR O NOME DO GRUPO ✔', text, {quoted: nay1})
					break
                    case 'setdesc':
                    case 'mudardesc':
                    case 'mudardescrição':
                    if (!isRegistered) return reply(sayo.noregis())
                    if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
                    if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA TER ADM`)				 
                    if (!isGroup) return reply(ind.groupo())
			        if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
                    akame.groupUpdateDescription(from, `${body.slice(9)}`)
                    akame.sendMessage(from, '[❗] SUCESSO AO MUDAR A DESCRIÇÃO DO GRUPO ✔', text, {quoted: nay1})
					break
					case 'setpp': 
                   	case 'setfoto': 
                   	case 'mudarfoto': 
                   	case 'setgpfoto': 
                    if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
                    if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA TER ADM`)				 
                    if (!isGroup) return reply(ind.groupo())
			        if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
                    media = await akame.downloadAndSaveMediaMessage(nay1)
                    await akame.updateProfilePicture (from, media)
                    reply('[✅] sucesso ao mudar a foto do grupo')
					break				
					case 'claim':
					if (!isRegistered) return reply(sayo.noregis())					
					if (!isBotx) return reply(`O MODO BOTX ESTÁ DESLIGADO\nPOR FAVOR DIGITE ${p}botx`)
					reply(`VOCÊ GANHOU *+${nayla3} DE LIMIT 😊*`)
					addLevelingLevel(sender, 1)
                    bayarLimit(sender, nayla3) 
                    break
                    case 'grupo':
                    case 'grupos':
                    if (!isRegistered) return reply(sayo.noregis())
                    my1 = `*VAMOS PARTICIPAR DO GRUPO DO BOT*\n`
                    my1 += `➻ *GRUPO 1* = ${grupo1}\n`
                    my1 += `➻ *GRUPO 2* = ${grupo2}\n`                    
                    reply(my1)
                    break
			        case 'info':
			        if (!isRegistered) return reply(sayo.noregis())
			        inf1 = `➻ *NOME DO BOT* : ${nomedobot}\n`
			        inf1 += `➻ *NOME DO CRIADOR* : ${nomedocriador}\n`
			        inf1 += `➻ *AUTHOR* : ${nomedocriador}\n`
			        inf1 += `➻ *NÚMERO DO BOT* : ${numberbot}\n`
			        inf1 += `ESCREVA-SE *${med1}*`
			        reply(inf1)
			        break
			
                   	case 'menuoff':  
			                	case 'helpoff':
			                	case 'comandosoff':
			                	case 'ajudaoff':
                    case '?off':
                    if (!isRegistered) return reply(sayo.noregis())                    		
                    const SS1 = fs.readFileSync('sound/moshi.mp3')                        
         			        if (isBanned) return reply(sayo.ban())
         			        akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    runtime = process.uptime()                              
                    reply(sayo.menuZ(nomedocriador, pushname, p, auth0r, bulan, tz))                                                        
                    break
                    case 'allmenu':
                    if (!isRegistered) return reply(sayo.noregis())                    		
                    reply(sayo.allmenu(nomedocriador, auth0r, bulan, tchat, tz, p))
                    break
                    case 'virtex': 
                    if (!isRegistered) return reply(sayo.noregis())                    		
                    reply (sayo.virtex(nomedocriador, pushname, p, auth0r, bulan, tz))
                    break 
                    case 'sewa': 
                    if (!isRegistered) return reply(sayo.noregis())                    		
                    reply (sayo.sewa(nomedocriador, pushname, p, auth0r, bulan, tz))
                    break                                               
                    case 'kenapasayadiban':
                    case 'peraturan':
                    if (!isRegistered) return reply(sayo.noregis())                    		
                    reply (sayo.kenapasaya(nomedocriador, pushname, p, auth0r, bulan, tz))
                    break
                    case 'sayo':  
               if (!isRegistered) return reply(sayo.noregis())
			        if (isBanned) return reply(sayo.ban())                   	
                    donasi1 = `[ *${donasi}* ]\n`
                    donasi1 += `➻ *NÚMERO* : ${pulsa}\n`                                       
                    donasi1 += `➻ *NOME* : SAYO`
                    reply(donasi1)
                    break
                    case 'play':   
                    if (!isRegistered) return reply(sayo.noregis())      	
				 if (isBanned) return reply(sayo.ban())
					if (args.length < 1) return reply(`Exemplo : ${p}play yamete`)	
					reply(sayoespere) 				 
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*❗MUSÍCA ENCONTRADA*\n\n[❗] enviando sua música aguarde..`				
				buffer = await getBuffer(anu.result.thumbnail)
				akame.sendMessage(from, buffer, image, {quoted: nay1, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)				
				akame.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `akame-bot.mp3`, quoted: nay1 })
				await limitAdd(sender)				                
				break
				
				case 'play2':           	  						
      if (isBanned) return reply(ind.baned())
 					if (args.length < 1) return reply(`Exemplo : ${p}play2 hylander`)	
		     		reply(sayoespere) 				 
					anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `*❗MÚSICA ENCONTRADA❗*\n`
                    anu1 += `➸ *TÍTULO* : ${anu.judul}\n`
                    anu1 += `➸ *TAMANHO* : ${anu.size}\n`
                    anu1 += `➸ *FONT* : ${anu.source}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
				    akame.sendMessage(from, anu2, image, { quoted: nay1, caption: anu1 })
					akame.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay })
					break					
									
									
									
  				     	case 'wikipedia':  				     			
                       if (isBanned) return reply(sayo.ban())					 
					   if (args.length < 1) return reply('Cadê o texto?')
                    	 teks = body.slice(11)
                    	send = await fetchJson(`https://api-exteam.herokuapp.com/api/info/wikipedia?search=${teks}&apikey=pip`)
                    	teks = ` ${send.result.result}`
                    	akame.sendMessage(from, teks, text, {quoted: nay})
                      	break
				    case 'ytmp3': case 'mp3':                 	  
				    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())					 
					if (args.length < 1) return reply('Cadê o link ?')
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Esse link não é válido!!!')
					reply(sayoespere) 
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `YTMP3 FOI ENCONTRADO\n`
                    anu1 += `➻ *TITULO* : ${anu.judul}\n`
                    anu1 += `➻ *TAMANHO* : ${anu.size}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
					akame.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					akame.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay1 })
					break
				    case 'ytmp4': case 'mp4':                 	  
				    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())				 
					if (args.length < 1) return reply('Cadê o link ?')
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('O link não é válido!!!')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=${apixteam}`)
					reply(sayoespere) 
					anu1 = `YTMP4 FOI ENCONTRADO\n`
                    anu1 += `➻ *TITULO* : ${anu.judul}\n`
                    anu1 += `➻ *TAMANHO* : ${anu.size}\n`                    
					anu2 = await getBuffer(anu.thumbnail)
					akame.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					anu3 = await getBuffer(anu.url)
					akame.sendMessage(from, anu3, video, { mimetype: 'video/mp4', quoted: nay1 })
					break                    
                    
                    
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ ESSES CASES NÃO TA. NO MENU ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 
                                        
                   
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ EDITE COMO QUISER ]==============================================================*/                  	    
/*====================================================[ CASE BY Fernazer ]==============================================================*/                    	 
                    case 'gay2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% GAY* 🏳️‍🌈`
                    reply(N)
                    break 
                    case 'gado2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% GADO🐂*`
                    reply(N)
                    break
                    case 'gostosa2':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())                      	
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% GOSTOSA* 😳`
                    reply(N)
                    break 
                    case 'feio2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% FEIO* 🤢`
                    reply(N)
                    break 
                    case 'bonito2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% BONITO* 😎`
                    reply(N)
                    break 
                    case 'nazista2':                      	 
                     		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% NAZISTA* 🚩`
                    reply(N)
                    break 
                    case 'gordo2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% GORDO* 😐`
                    reply(N)
                    break 
                    case 'magro2':                    
                      	  		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% MAGRO* 😑`
                    reply(N)
                    break 
                    case 'feliz2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% FELIZ* 😁`
                    reply(N)
                    break 
                    case 'triste2':                    
                      	  		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% TRISTE* 😞`
                    reply(N)
                    break 
                    case 'lolicon2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% LOLICON* 👮🏻‍♀️`
                    reply(N)
                    break 
                    case 'punhetero2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% PUNHETERO* 🍆💦`
                    reply(N)
                    break 
                    case 'safado2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% SAFADO* 😈`
                    reply(N)
                    break                      
                    case 'santo2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% SANTO* 😇`
                    reply(N)
                    break  
                    case 'mentiroso2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% MENTIROSO* 🤥`
                    reply(N)
                    break 
                    case 'dragão2':                      	 
                     		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% DRAGÃO* 🐲`
                    reply(N)
                    break 
                    case 'calculista2':                  
                     		if (!isRegistered) return reply(sayo.noregis())   	  
                    if (isBanned) return reply(sayo.ban())	
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% FRIO E CALCULISTA* 🕵🏻‍♂️`
                    reply(N)
                    break             
                    case 'otaku2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% OTAKU* 💮`
                    reply(N)
                    break
                    case 'homofóbico2':                  
                    case 'homofobico2':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% HOMOFÓBICO* 🧐`
                    reply(N)
                    break                                      
                    case 'pedro':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% PEDRO* 🐵`
                    reply(N)
                    break                   
                     case 'macaco':                      	  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    N = `VOCÊ\n`
                    N += `É : *${nayla3}${nayla4}% MACACO* 🐒`
                    reply(N)
                    break               
 
                
/* ==================================================[ NÃO SEI v: -MENU ]==============================================================*/    
/*====================================================[ API?? JOJO API ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	                                          
                    
                   case 'kusonime':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   reply(sayoespere) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
                   case 'renungan':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban()) 
                   reply(sayoespere) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *TÍTULO* : ${anu.judul}\n`
                   anu1 += `➻ *MENSAGEM* : ${anu.pesan}\n`
                   anu1 += `➻ *DESCRIÇÃO* : ${anu.Isi}\n`
                   reply(anu1)
                   break                   
                   case 'neon1':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                   reply(sayoespere)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break  
                   case 'narutobanner': //@Kratos 愛
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                   teks = body.slice(13)
                   kratu = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${teks}`)
                   akame.sendMessage(from, kratu, image, {quoted: nay1})
                   break
                   case 'text3d':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                   reply(sayoespere)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break                   
                   case 'galaxy':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                   reply(sayoespere)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break                                      
                   case 'kling':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                   reply(sayoespere)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   
                   case 'qrcode':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} Olá sayo*`)  
                   reply(sayoespere)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break                   
                   case 'barcode':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} Olá sayo*`)  
                   reply(sayoespere)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                  
                   case 'namaninja':  
                   case 'nomeninja':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NOME* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
                   
                                                                                               
/* ==================================================[ ADICIONAL-MENU ]==============================================================*/    
/*======================================================[ API?? ZEKS ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	                                          

                                                                                                                                                                                                                 
                   case 'stalkig':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${p}${command} jokowi*`)
                   F = body.slice(9)
                   reply(sayoespere)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NOME* : ${anu.username}\n`
                   anu2 += `➻ *NOME COMPLETO* : ${anu.fullname}\n`
                   anu2 += `➻ *SEGUIDORES* : ${anu.follower}\n`
                   anu2 += `➻ *SEGUE* : ${anu.following}\n`                               
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *FONTE* : ${anu.source}\n`
                   akame.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break                                     
                   case 'nickff':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())		            
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `➻ *NICK* : ${anu.result}\n`
                   anu1 += `➻ *NICK* : ${anu.result}\n`
                   anu1 += `➻ *NICK* : ${anu.result}\n`
                   anu1 += `➻ *NICK* : ${anu.result}\n`
                   reply(anu1)
                   break
                   case 'tahta':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(7)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 'neon2':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(7)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break                                
                   case 'wolf':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(6)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break                   
                   case 'ytgold':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(8)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 'ytsilver':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(10)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 't3d':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(5)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 'logoa':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 'pornhub':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 'marvel':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 'leavest':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(9)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break                    
                   case 'phcoment':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
		            
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 'nulis':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(7)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break
                   case 'shortener':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command}https://link*`)
                   F = body.slice(11)
                   reply(sayoespere)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONGO* : ${anu.long}\n`
                   anu1 += `➻ *DATA* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TIPO* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
                   case 'urlshort':  
                   		if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command}https://link*`)
                   F = body.slice(10)
                   reply(sayoespere)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DOIS* : ${anu.result_2}\n`
                   anu1 += `➻ *TRES* : ${anu.result_3}\n`
                   reply(anu1)
                   break
/* ==================================================[ ADICIONAL-MENU ]==============================================================*/    
/*===================================================[ API?? RANDOM API ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	                                          
                  
/* =====================================================[ INDO-MENU ]==============================================================*/    
/*====================================================[ API?? SEM API ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	                                          
                                	                                          
                  
                   case 'lindo': case 'frio': case 'homofobico': case 'pobre':  
                   case 'feio': case 'cauculista': case 'inativo': case 'baiano': case 'lixo':                 	 
                   case 'bonito': case 'chato': case 'presente': case 'nazista': case 'gostoso': 
                   case 'gay': case 'legal': case 'rico': case 'rockeiro': 
               	   case 'gado': case 'retardado': case 'sadboy': case 'toxico':  
               	   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
				   if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `O mais *${command}* do grupo ${groupName} é o @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break				   				
				   
				   case 'casal':
				   		if (!isRegistered) return reply(sayo.noregis())
				   if (isBanned) return reply(sayo.ban())
				   if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
 				   jds = []
				   const A11 = groupMembers
  		 		const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Meus cálculos dizem que @${C11.jid.split('@')[0]} e @${C22.jid.split('@')[0]}\nFORMÃO UM BELO CASAL ❤`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break
				   case 'quando':  
				   		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pergunta : *${kapan1}*\n\nResposta: ${kpnkh}`
      			   akame.sendMessage(from, jawab1, text, {quoted: nay})
				   break
		           case 'apakah':  
		           		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   akame.sendMessage(from, jawab, text, {quoted: nay})
				   break
				   case 'slot':  
				   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())				    				    
				   slot = `===================\n` 
				   slot += `║ ${slot11} ║ ${slot22} ║ ${slot33}\n`
				   slot += `║ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
				   slot += `║ ${slot77} ║ ${slot88} ║ ${slot99}	\n`				   
				   slot += `===================\n`
				   akame.sendMessage(from, slot, text, {quoted: nay})
				   break				  
                                                                                                                                                                                                                                                       
/* ==================================================[ ADICIONAL-MENU ]==============================================================*/    
/*====================================================[ API?? SEM API ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	                                          
                   
                   case 'ssweb':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${p}${command} https://google.com*`)                  
                   reply(sayoespere)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   akame.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay1})
                   break
                   case 'smoke':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(7)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break 
                   case 'rainbow':  
                   		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())
                   if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo*`)
                   F = body.slice(9)
                   reply(sayoespere)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1})
                   break                                      
                                        				                                                                                                                                                                              
/* ==================================================[ ADICIONAL-MENU ]==============================================================*/    
/*====================================================[ API?? SEM API ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
                    case 'toimg': case 't':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
					reply(sayoespere)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akame.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        akame.sendMessage(from, buffer, image, {quoted: nay, caption: 'Aqui está 😊'})
				    fs.unlinkSync(ran)
					})					
			    	break 
			    	
			    	    case 'toimg2':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(sayoespere)
			encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await akame.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
			    	
                    case 'readmore':  
			    	case 'more':  
			    			if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`USE |  PARA LIMITADORES`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'chatlist':  
		         	case 'cekchat':  
		         			if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
		  	    	akame.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `TODOS OS CHATS DA QUE A AKAME ESTÁ`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	akame.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	                case 'addsticker':  
	                		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())          
			    	if (!isQuotedSticker) return reply('Marque a figurinha')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Qual e o nome da figurinha?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await akame.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./núvem/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./núvem/stik.json', JSON.stringify(setiker))
			    	akame.sendMessage(from, `Figurinha guardada com sucesso\nPara ver a lista de todas as figurinhas guardadas digite ${p}liststicker`, MessageType.text, { quoted: nay1})
      				break
		        	case 'addvn':  
		        			if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
			    	if (!isQuotedAudio) return reply('Marque o aúdio!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Qual e o nome do aúdio?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await akame.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./núvem/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./núvem/audio.json', JSON.stringify(audionye))
			     	akame.sendMessage(from, `Aúdio guardado com sucesso\nPara ver a lista de todos os aúdios guardados digite ${p}listvn`, MessageType.text, { quoted: nay1}) 
			      	break
		         	case 'getvn':  
		         			if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
			        if (args.length < 1) return reply('Veja um nome que esta na lista de aúdios guardados')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./núvem/audio/${namastc}.mp3`)
			    	akame.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
			        case 'getsticker':  
		        	case 'gets':  
		        			if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
		        	if (args.length < 1) return reply('Veja um nome que esta na lista de figurinhas guardadas')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./núvem/sticker/${namastc}.webp`)
			    	akame.sendMessage(from, result, sticker)
			     	break
                    case 'liststicker':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
		     		teks = '*Lista das figurinhas da núvem :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		akame.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		      		break
		        	case 'listvn':  
	         		case 'vnlist':  
	         				if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
		     		teks = '*Lista dos aúdios da núvem:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		akame.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		    		break
		        	case 'addimage':  
		        			if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
		     		if (!isQuotedImage) return reply('Marque a imagem!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Qual e o nome da imagem?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await akame.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./núvem/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./núvem/image.json', JSON.stringify(imagenye))
		      		akame.sendMessage(from, `Sucesso a o guardar a imagem\nPara ver todas as imagens guardadas digite ${p}listimage`, MessageType.text, { quoted: nay1})		     	 
		     		break
		        	case 'getimage':  
                    case 'getimg':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
			        if (args.length < 1) return reply('Veja um nome que esta na lista de imagens guardadas')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./núvem/image/${namastc}.jpeg`)
    				akame.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		        	case 'imagelist':  
		        			if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
		    		teks = '*Lista de imagens da núvem :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	akame.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			    	break
			    	
		        	case 'addvideo':  
		        			if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
			    	if (!isQuotedVideo) return reply('Marque o vídeo!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Qual e o nome do vídeo?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await akame.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./núvem/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./núvem/video.json', JSON.stringify(videonye))
			      	akame.sendMessage(from, `Sucesso a o guardar o video\nPara ver a lista de todo os vídeos guardados digite ${p}listvideo`, MessageType.text, { quoted: nay1}) 
	     			break
			        case 'getvideo':  
			        		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
		    	    if (args.length < 1) return reply('Veja um nome que esta na lista de vídeos guardados')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./núvem/video/${namastc}.mp4`)
			    	akame.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
		           	case 'listvideo':  
	           		case 'videolist':  
	           				if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
	    			teks = '*Lista dos vídeos da nuvem :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	akame.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			      	break				                         
                    case 'setp':  
                    if (isBanned) return reply(sayo.ban())
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
                    p = args[0]
                    reply(`[❗] prefix mudado para [ ${p} ]`)					 
					break 
					case 'setreply':  
                    if (isBanned) return reply(sayo.ban())
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Você não e o sayo 🐤`)
                    case 'setreply':
                     case 'setverificado':
                      case 'mudarverificado':
			fake = q
			reply(`Verificado mudado para : ${q}`)
			break
					break 
					case 'setpp':  
                    if (isBanned) return reply(sayo.ban())
					if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await akame.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef2.png', delb)
		            reply('Pronto ✅')
			        break 
			        case 'setthum':  
			        case 'mudarlogo':  
                    if (isBanned) return reply(sayo.ban())
					if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await akame.downloadMediaMessage(boij)
			        fs.writeFileSync('./lib/logo.jpeg', delb)
		            reply('Pronto ✅')
			        break 
					case 'setwelcome':  
                    if (isBanned) return reply(sayo.ban())
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
                    welcome1 = body.slice(12)
                    reply(`O modo de boas vindas foi mudado para ${welcome1}`)					 
					break
					case 'setout':  
                    if (isBanned) return reply(sayo.ban())
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
                    welcome2 = body.slice(8)
                    reply(`O modo despedida foi mudado para ${welcome2}`)					 
					break  
					case 'settz':  
                    if (isBanned) return reply(sayo.ban())
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
                    tz = args[0]
                    reply(`O tz foi mudado para ${tz} com sucesso`)					 
					break 					 
                    case 'other':           	        
                    akame.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    akame.sendMessage(from, 'ESTE E MEU CRIADOR [(>_<)] PFV NÃO ENVIEI SPAM 🐤',MessageType.text, { quoted: nay} )				
					break  
					case 'owner':
					akame.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    akame.sendMessage(from, 'ESTE E MEU CRIADOR [(>_<)] CASO TENHA ALGUMA DUVIDA FALE COM ELE 🐤',MessageType.text, { quoted: nay} )				
					break
                    case 'admin':  
         	        case 'owner':  
         	        case 'creator':  
                    if (isBanned) return reply(sayo.ban())         	       
                    akame.sendMessage(from, {displayname: "Jeff", vcard: vnayla}, MessageType.contact, { quoted: nay1})
                    akame.sendMessage(from, 'ESTE E MEU CRIADOR [(>_<)] CASO TENHA ALGUMA DUVIDA FALE COM ELE 🐤',MessageType.text, { quoted: nay} )				
					break    
                    
					
 					
                    
                  
                    
                   case 'fig': case 'stikergif':
                   case 'gif':case 'stikergif':
                   case 'figura':case 'sticker':
                   case 'figu':  case 'stickergif':case 'f':
                   case 'figurinha':case 's':case 'stiker':                
                      	 		if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban())         	                                  	   
if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
const media = await akame.downloadAndSaveMediaMessage(encmedia)               
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('deu error tente novamente')
})
.on('end', function () {
console.log('Figurinha feita 😊')
exec(`webpmux -set exif ${addMetadata('akame-bot', 'sayo')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply('❌DEU ERROR TENTE NOVAMENTE OU USE O #ST')
akame.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
const media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(sayoespere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function () {
console.log('Figurinha feita 😊')
exec(`webpmux -set exif ${addMetadata('akame-bot', 'sayo')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply('❌DEU ERROR TENTE NOVAMENTE OU USE O #ST')
akame.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
const media = await akame.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(sayoespere)
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('ocorreu um erro')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ptbr.stick())
exec(`webpmux -set exif ${addMetadata('akame-bot', 'sayo')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply(ptbr.stick())
akame.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: nay1})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

	case 'comunism':
	  case 'trigger':
	    case 'rotate':
	      case 'delete':
	        case 'tobecontinue':
	          case 'thuglife':
var imgbb = require('imgbb-uploader')
	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	  owgi = await akame.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  nikhmmp = await getBuffer(`http://zekais-api.herokuapp.com/${command}?url=${anu.display_url}`)
	 akame.sendMessage(from, nikhmmp, image, {quoted:nay})
	} else {
	  reply(`reply atau kirim gambar dengan caption ${p + command}`)
	}
	break
            
              case 'supertag':
            if ((isMedia && !nay.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
            file = await akame.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: nay1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
            file = await akame.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: nay1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !nay.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
            file = await akame.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: nay1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !nay.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
            file = await akame.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: nay1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`[❗] responder imagem/adesivo/áudio/vídeo com a legenda ${p}supertag para marcar`)
        }
        break

case 'roubar':
		if (!isRegistered) return reply(sayo.noregis())
		if (isBanned) return reply(sayo.ban())         	       
					if (!isQuotedSticker) return reply(`marque a figurinha ${p}roubar nome|author`)
					var pembawm = body.slice(7)
					var encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await akame.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('[❌] Deu error tente novamente 😞')
					akame.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: nay1})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
					})
					break
					
				

case 'st':
		if (!isRegistered) return reply(sayo.noregis())
if (isBanned) return reply(sayo.ban())         	       
if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
const media = await akame.downloadAndSaveMediaMessage(encmedia)                      
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('AKAME-BOT', 'sayo')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply('ERROR')
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
akame.sendMessage(from, buffer, sticker, {quoted: nay1})
fs.unlinkSync(rano)
})
} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
const media = await akame.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(sayoespere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('AKAME-BOT', 'sayo')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
akame.sendMessage(from, buffer, sticker, {quoted: nay1})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
case 'rainbow':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
                        reply(sayoespere)
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        upload = await uploadimg(owgi, Date.now() + '.jpg')
                        //anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teeks = `${upload.result.image}`
                        anu3 = (`https://some-random-api.ml/canvas/gay?avatar=${teeks}`)
                        abc = await getBuffer(anu3)
                        akame.sendMessage(from, abc, image, {
                            quoted: nay1
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    addFilter(from)
                    break
                    case 'bc':  
                    case 'tm':  
                    if (isBanned) return reply(sayo.ban()) 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await akame.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await akame.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					akame.sendMessage(_.jid, buff, image, {caption: `❗ATENÇÃO❗\n\n${body.slice(4)}`})
					}
					reply('*TM FEITA ❗* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `❗ATENÇÃO❗\n\n${body.slice(4)}`)
					}
					reply('*TM FEITA ❗* ')
					}
					break
						
					case 'clearall':  
                    if (isBanned) return reply(sayo.ban())
					if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤?`)
					anu = await akame.chats.all()
					akame.setMaxListeners(25)
					for (let _ of anu) {
						akame.deleteChat(_.jid)
					}
					reply(`❗chat limpo ✅`)
					break						 	 
					
					case 'limparchat':
					case 'clearall':
					case 'limpar':
					case 'limpa':
                    if (isBanned) return reply(sayo.ban())
					if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤?`)
					anu = await akame.chats.all()
					akame.setMaxListeners(25)
					for (let _ of anu) {
						akame.deleteChat(_.jid)
					}
					reply(`❗chat limpo ✅`)
				break
				
                    case 'linkgc':  
                    case 'linkgp':  
                    		if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
                    if (isBanned) return reply(sayo.ban())				    
				    if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA TER ADM`)
				    linkgc = await akame.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink do grupo *${groupName}*`
				    akame.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
				    case 'tagall':
				    case 'marcartodos':
				    		if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
                    if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
                    if (isBanned) return reply(sayo.ban()) 
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `➪ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'apagar':  
				    case 'delete':  
				    case 'del':  
				    case 'd': 
				    		if (!isRegistered) return reply(sayo.noregis())
                   if (isBanned) return reply(sayo.ban())  	
				    akame.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
				    case 'kick':  
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (!isBotGroupAdmins) return reply(`O BOT NÃO E ADMINISTRADOR`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('marque a pessoa que você quer banir do grupo!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `tchaaal🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					akame.groupRemove(from, mentioned)
					} else {
					mentions(`DESCULPE @${mentioned[0].split('@')[0]} VOCÊ SERA BANIDO DO GRUPO...`, mentioned, true)
					akame.groupRemove(from, mentioned)
					}					
					break 
					case 'hidetag':  
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
                    if (isBanned) return reply(sayo.ban())              
					if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					var value = body.slice(9)
					var group = await akame.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					akame.sendMessage(from, options, text)					 
					break
			    	case 'add':  
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (!isBotGroupAdmins) return reply(`O BOT NÃO E ADMINISTRADOR`)
					if (args.length < 1) return reply('Quem você quer adicionar no grupo?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					akame.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Error ao adicionar...talvez porque a conta dele(a} seja privada')
					}  
					break 
				     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 
                    
                                    
                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 

                     
					case 'bug':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`exemplo ${p}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return akame.sendMessage(from, 'Desculpe, o texto é muito longo, o máximo e de 300 caracteres', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[RELATÓRIO DE BUG]*\nA PARTIR DE ${pushname} \nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nRelatório : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    akame.sendMessage(`${setting.númerodocriador}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*RELATORIO DE BUG*`} } } })                    
                    reply('O RELATÓRIO DE ERRO FOI ENVIADO.  OBRIGADO POR RELATAR OS RECURSOS')                     
					break   
					case 'request':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`mau request apa kak??\n${p}request *nama fitur*`)
                    const cet1 = body.slice(9)
                    if (cet1.length > 300) return akame.sendMessage(from, 'Desculpe, o texto é muito longo, o máximo e de 300 caracteres', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = nay.participant
                    const cet2 = `*[ SUGERIR COMANDOS ]*\nA PARTIR DE ${pushname} \nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nCmd : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    } 
                    akame.sendMessage(`${setting.númerodocriador}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*SUGESTÃO DE COMANDOS*`} } } })
                    akame.sendMessage(`556181496039@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*SUGESTÃO DE COMANDOS*`} } } })                                    
                    reply(`OBRIGADO PELA SUGESTÃO😊`)
                    break
                    case 'asupan':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${apixteam}`)
                    anu1 = `➻ *NOME* : ${anu.result.username}\n`                                                     
                    anu1 = `➻ *NOME DO USUÁRIO* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *SEGUIDORES* : ${anu.result.followers}\n`
                    anu1 += `➻ *SEGUE* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVADO* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFICADO* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TIPO* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENTARIOS* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKES* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    akame.sendMessage(from, anu2, image, {caption: anu1, quoted: nay}).catch(e => {
	                reply('_[ ! ] Erro ao baixar e enviar mídia_')
                    console.log(e)
	                })
                    break
                    case 'asupan1':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${apixteam}`)
                    anu1 = `➻ *NOME* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *NOME DO USUÁRIO* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *SEGUIDORES* : ${anu.result.followers}\n`
                    anu1 += `➻ *SEGUE* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVADO* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFiCADO* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TIPO* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENTARIOS* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKES* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    akame.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'asupan2':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${apixteam}`)
                    anu1 = `➻ *NOME* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *NOME DO USUÁRIO* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *SEGUIDORES* : ${anu.result.followers}\n`
                    anu1 += `➻ *SEGUE* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVADO* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *VERIFiCADO* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENTARIOS* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKES* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    akame.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'nulis1':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${p}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(sayoespere)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, image, {caption: `nih kak`, quoted: nay})
                    break
                    case 'nulis2':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break 
                    case 'nulis3':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break 
                    case 'nulis4':
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break 
                    case 'nulis5':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break 
                    case 'nulis6':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break                     
                    case 'video1':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, video, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break
                    case 'video2':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, video, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break
                    case 'video3':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, video, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break
                    case 'video4':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, video, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break
                    case 'video5':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, video, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break
                    case 'video6':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo gado*`)
                    reply(sayoespere) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, video, {caption: `Aqui está 😊`, quoted: nay1}) 
                    break                     
                    
  /* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ API XTEAM ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 
                    case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                    case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    akame.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
				    reply(sayoespere)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    akame.sendMessage(from, pok, image, { quoted: nay})
				    break
				    				           
				    
                    case 'foto': case 'pinterest': case 'gambar':
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
				    akame.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=gambarnya`)
				    reply(sayoespere)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    akame.sendMessage(from, pok, image, { quoted: nay})
                    case 'foto': case 'pinterest': case 'gambar':
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
				    akame.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=gambarnya`)
				    reply(sayoespere)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    akame.sendMessage(from, pok, image, { quoted: nay})
				    break
				    
            				    case 'img':        
            				    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply('Digite o comando juntamente com o que você deseja buscar')
                    akame.updatePresence(from, Presence.composing)
                    reply(sayoespere)
                    try {
                    data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
                    n = JSON.parse(JSON.stringify(data));
                    nimek = n[Math.floor(Math.random() * n.length)];
                    pok = await getBuffer(nimek)
                    akame.sendMessage(from, pok, image, {quoted: nay, caption: `Achei isso sobre: ${args}`})
                    } catch {
                    reply(`Não econtrei nada sobre ${agrs}...`)
                    }
                    break                                                
                    case 'anime':
              	if (isBanned) return reply(sayo.ban())                       
            reply(sayoespere)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            akame.sendMessage(from,media,image,{quoted:nay1,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break                        
                  case 'akame':
                  		if (!isRegistered) return reply(sayo.noregis())
              			if (isBanned) return reply(sayo.ban())                 
                if (args.length < 1) return reply(`Use ${p}akame texto`)
                try { 
               anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
               if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
                 akame.sendMessage(from, `${anu.success} 🐤 `, text, {quoted: nay1})
                   } catch {
                   reply('não sei oq falar😢')
                     }
                   break
                    case 'bisakah':
                    		if (!isRegistered) return reply(sayo.noregis())
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					akame.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: nay1 })
					break
		            case 'kapankah':
		            		if (!isRegistered) return reply(sayo.noregis())
				    kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					akame.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: nay1 })
					break
		            case 'apakah':
		            		if (!isRegistered) return reply(sayo.noregis())
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					akame.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: nay1 })
					break
		            case 'bagaimanakah':
		            		if (!isRegistered) return reply(sayo.noregis())
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					akame.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: nay1 })
					break                    
                    case 'kata':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${p}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    akame.sendMessage(from, anu, image, {quoted: nay})
                    break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ TEXT PRO XIXIXI ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 
                    case 'sound1':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound2 = fs.readFileSync('sound/sound2.mp3')
                    akame.sendMessage(from, sound2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, seconds: 9999999, quoted: nay1})
                    break 
                    case 'sound3':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound3 = fs.readFileSync('sound/sound3.mp3')
                    akame.sendMessage(from, sound3, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
                    case 'sound4':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound4 = fs.readFileSync('sound/sound4.mp3')
                    akame.sendMessage(from, sound4, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break      
                    case 'sound5':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound5 = fs.readFileSync('sound/sound5.mp3')
                    akame.sendMessage(from, sound5, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break           
                    case 'sound6':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound6 = fs.readFileSync('sound/sound6.mp3')
                    akame.sendMessage(from, sound6, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound7':  
                   		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound7 = fs.readFileSync('sound/sound7.mp3')
                    akame.sendMessage(from, sound7, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound8':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound8 = fs.readFileSync('sound/sound8.mp3')
                    akame.sendMessage(from, sound8, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound9':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound9 = fs.readFileSync('sound/sound9.mp3')
                    akame.sendMessage(from, sound9, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound10':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound10 = fs.readFileSync('sound/sound10.mp3')
                    akame.sendMessage(from, sound10, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound11':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound11 = fs.readFileSync('sound/sound11.mp3')
                    akame.sendMessage(from, sound11, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'soundtes':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound12 = fs.readFileSync('sound/sound12.mp3')
                    akame.sendMessage(from, sound12, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound13':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    akame.sendMessage(from, sound13, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound14':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound14 = fs.readFileSync('sound/sound14.mp3')
                    akame.sendMessage(from, sound14, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound15':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    akame.sendMessage(from, sound15, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound16':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    akame.sendMessage(from, sound16, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound17':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    akame.sendMessage(from, sound17, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound18':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    akame.sendMessage(from, sound18, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound19':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    akame.sendMessage(from, sound19, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound20':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    akame.sendMessage(from, sound20, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound21':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    akame.sendMessage(from, sound21, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound22':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound22 = fs.readFileSync('assets/sound22.mp3')
                    akame.sendMessage(from, sound22, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound23':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound23 = fs.readFileSync('sound/sound23.mp3')
                    akame.sendMessage(from, sound23, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break              
                    case 'sound24':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound24 = fs.readFileSync('sound/sound24.mp3')
                    akame.sendMessage(from, sound24, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                                                        
                    case 'sound25':  
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    const sound25 = fs.readFileSync('sound/sound25.mp3')
                    akame.sendMessage(from, sound25, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
                    break                  
                     
     
                      
                    
                                                                                                                           
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ API?? LINDOWAPI ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 
                     
                      
                     case 'attp':  
                     		if (!isRegistered) return reply(sayo.noregis())
                     if (isBanned) return reply(sayo.ban())
                     if (args.length < 1) return reply('Cade o texto?')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     akame.sendMessage(from, atetepe, sticker, {quoted: nay1})
                     break                      
                     case 'attpt':  
                     		if (!isRegistered) return reply(sayo.noregis())
                     if (isBanned) return reply(sayo.ban())
                     if (args.length < 1) return reply('Cade o texto?')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     akame.sendMessage(from, atetepe, sticker, {quoted: ftoko})
                     break                      
                         case 'attpte':  
                         		if (!isRegistered) return reply(sayo.noregis())
                     if (isBanned) return reply(sayo.ban())
                     if (args.length < 1) return reply('Cade o texto?')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     akame.sendMessage(from, atetepe, sticker, {quoted: fkontak})
                     break                      
                    case 'attp1':	//@Kratos 愛	
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${p}${command} SAYO*`)
                    teks = body.slice(6)
                    url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
                    send = await getBuffer(url)
                    akame.sendMessage(from, send, sticker, {quoted: nay1})
			     	break	     
                    case 'attp2':	//@Kratos 愛	
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${p}${command} SAYO*`)                                
                    teks = body.slice(6)
                    url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
                    send = await getBuffer(url)
                    akame.sendMessage(from, send, sticker, {quoted: nay1})
			     	break	
                	case 'attp3': //@Kratos 愛	
                			if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${p}${command} SAYO*`)
                    teks = body.slice(6)
                    url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
                    send = await getBuffer(url)
                    akame.sendMessage(from, send, sticker, {quoted: nay1})
			     	break	
                  	case 'attp4': //@Kratos 愛
                  			if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${p}${command} SAYO*`)
                    teks = body.slice(6)
                    url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
                    send = await getBuffer(url)
                    akame.sendMessage(from, send, sticker, {quoted: nay1})
  			     	break	
             		case 'attp5':	//@Kratos 愛
             				if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${p}${command} SAYO*`)
                    teks = body.slice(6)
                    url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
                    send = await getBuffer(url)
                    akame.sendMessage(from, send, sticker, {quoted: nay1})
			     	break
                    case 'attp6':	//@Kratos 愛	
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${p}${command} SAYO*`)
                    teks = body.slice(6)
                    url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
                    send = await getBuffer(url)
                    akame.sendMessage(from, send, sticker, {quoted: nay1})
			     	break	                    
                     case 'citacita':  
                     		if (!isRegistered) return reply(sayo.noregis())
                     if (isBanned) return reply(sayo.ban())
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     akame.sendMessage(from, anu, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                     break
                     case 'blackpink':  
                     		if (!isRegistered) return reply(sayo.noregis())
                     if (isBanned) return reply(sayo.ban())
                     reply(sayoespere)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/blackpink?apikey=LindowApi`)
                     akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay})
                     break
                     case 'exo':  
                     		if (!isRegistered) return reply(sayo.noregis())
                     if (isBanned) return reply(sayo.ban())
                     reply(sayoespere)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/exo?apikey=LindowApi`)
                     akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay})
                     break
                     case 'bts':  
                     		if (!isRegistered) return reply(sayo.noregis())
                     if (isBanned) return reply(sayo.ban())
                     reply(sayoespere)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/bts?apikey=LindowApi`)
                     akame.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: nay})
                     break                     
                     case 'textfont':  
                     		if (!isRegistered) return reply(sayo.noregis())
                     if (isBanned) return reply(sayo.ban())
                     if (args.length < 1) return reply(`[❗] EXEMPLO\n*${p}${command} sayo`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break                                                                                  
                                                                                                                          
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 

                   	case 'welcome':
                   	if (!isRegistered) return reply(sayo.noregis())
                    if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)  
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*JÁ ESTA ATIVADO !!!')
					welkom.push(from)
					fs.writeFileSync('./akame/welkom.json', JSON.stringify(welkom))
					reply('[❗] MODO BOAS-VINDAS ATIVADO')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./akame/welkom.json', JSON.stringify(welkom))
				    reply('[❗] MODO BOAS-VINDAS DESATIVADO')
					} else {
					reply(`......`)
					}
					break  
                    case 'antilink':  
                    if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
                    if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*JÁ ESTA ATIVADO !!!')
					antilink.push(from)
					fs.writeFileSync('./akame/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ATIVADO ANTILINK*')
					reply('*❗ATENÇÃO QUALQUER MEMBRO DO GRUPO QUÊ ENVIAR ALGUM TIPO DE LINK SERA BANIDO AUTOMATICAMENTE DO GRUPO⚠️*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./akame/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DESATIVADO ANTILINK*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					break					 
					
											case 'autofigu':
											if (!isRegistered) return reply(sayo.noregis())
						   if (isBanned) return reply(sayo.ban()) 
                    if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('1 para ativar ou 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isAutofigu) return reply('*[❗] ja esta ativado* !!!')
						autofigu.push(from)
						fs.writeFileSync('./akame/autofigu.json', JSON.stringify(autofigu))
						reply('*❬ ✅ ❭ auto-figu ativado com sucesso neste grupo...*')
						reply('*Atencao a todos os membros ativos deste grupo o auto-figu esta ativado se você enviar alguma foto ou video, o bot ira fazer automaticamente uma figurinha*')
					} else if (Number(args[0]) === 0) {
						autofigu.splice(from, 1)
						fs.writeFileSync('./akame/autofigu.json', JSON.stringify(autofigu))
							reply('*❬ ❌ ❭ modo auto-figurinha desativado com sucesso neste grupo...*')
					} else {
						reply(`*Use assim : 1 para ativar ou 0 para desativar*`)
					}
					break										
					
					case 'antifake':
					if (!isRegistered) return reply(sayo.noregis())
					   if (isBanned) return reply(sayo.ban()) 
                    if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					try {														 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./akame/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./akame/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
					case 'botx':  
					if (!isRegistered) return reply(sayo.noregis())
		            if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
					if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*JÁ ESTA ATIVADO !!!')
					botx.push(from)
					fs.writeFileSync('./akame/botx.json', JSON.stringify(botx))
					reply('*[❗] ATIVADO BOTX*')
					} else if (Number(args[0]) === 0) {
					botx.splice(from, 1)
					fs.writeFileSync('./akame/botx.json', JSON.stringify(botx))
					reply('*[❗] DESATIVADO BOTX*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					break
					case 'antigay':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`SOMENTE EM GRUPOS`) 
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*JÁ ESTA ATIVADO !!!')
					antigay.push(from)
					fs.writeFileSync('./akame/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ATIVADO ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./akame/antigay.json', JSON.stringify(antigay))
					reply('*[❗] DESATIVADO ANTIGAY*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					break
					case 'antibocil':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`SOMENTE EM GRUPOS`) 
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*JÁ ESTA ATIVADO !!!')
					antibocil.push(from)
					fs.writeFileSync('./akame/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ATIVADO ANTIBOCIL*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./akame/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] DESATIVADO ANTIBOCIL*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					break
					case 'antikwai':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban()) 
					if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*JÁ ESTA ATIVADO !!!')
					antiwibu.push(from)
					fs.writeFileSync('./akame/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ATIVADO ANTI-KWAI*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./akame/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] DESATIVADO ANTI-KWAI*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					break
					case 'antikasar':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`SOMENTE EM GRUPOS`) 
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*JÁ ESTA ATIVADO !!!')
					nayXi.push(from)
					fs.writeFileSync('./akame/nayXi.json', JSON.stringify(nayXi))
					reply('*[❗] ATIVADO ANTI KASAR*')
					} else if (Number(args[0]) === 0) {
					nayXi.splice(from, 1)
					fs.writeFileSync('./akame/nayXi.json', JSON.stringify(nayXi))
					reply('*[❗] DESATIVADO ANTI KASAR*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					break
					case 'antitag':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`SOMENTE EM GRUPOS`) 
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*JÁ ESTA ATIVADO !!!')
					nayXix.push(from)
					fs.writeFileSync('./akame/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] ATIVADO ANTI TAG*')
					} else if (Number(args[0]) === 0) {
					nayXix.splice(from, 1)
					fs.writeFileSync('./akame/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] DESATIVADO ANTI TAG*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					break
					case 'antitrava':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`SOMENTE EM GRUPOS`) 
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('SELECIONE 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*JÁ ESTA ATIVADO !!!')
					antijawa.push(from)
					fs.writeFileSync('./akame/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] ATIVADO ANTI-TRAVA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./akame/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] DESATIVADO ANTI-TRAVA*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					break
					 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ REST API FRE ]==============================================================*/                  	    
/*====================================================[ CASE LOLTEAM ]==============================================================*/                    	 
        										
                    case 'udara':
                    if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`SELECIONE AS DIREÇÕES / MÉTODOS EXEMPLO\n${p}udara atirar devagar`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PEDIDOS REALIZADOS* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *CAÇANDO* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUCESSO!!  E VOCÊ RECEBE* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW VOCÊ OBTEVE* ]\n[ *${buruh33}* ]\n[ PARA INFORMAÇÃO *${p}info3* ]`)
                    }, 20000)
                    break
                    case 'darat':
                    if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`ESCOLHA DIREÇÕES/MÉTODOS EXEMPLO :\n${p}darat atirar devagar`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PEDIDOS REALIZADOS* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *CAÇANDO* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUCESSO!!  E VOCÊ RECEBE* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW VOCÊ OBTEVE* ]\n[ *${buruh22}* ]\n[ PARA INFORMAÇÃO *${p}info2* ]`)
                    }, 20000)
                    break
                    case 'laut':
                    if (!isRegistered) return reply(sayo.noregis())
                    if (args.length < 1) return reply(`ESCOLHER A DIREÇÃO/METODO EXEMPLO\n${p}laut atirar devagar`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${p}info1* ]`)
                    }, 20000)
                    break
                    case 'ttp1':  
                    if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    if (args.length < 1) return reply('Cadê o texto mano?')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${l0lhuman}&text=${F}`)
                    akame.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
                    case 'ttp2':  
                    case 'ttp3':  
                    case 'ttp4': 
                    if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())                     
                    if (args.length < 1) return reply('Cadê o texto mano?')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/${command}?apikey=${l0lhuman}&text=${F}`)
                    akame.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
                    case 'info1':
                    if (!isRegistered) return reply(sayo.noregis())
                    reply(sayo.info1())
                    break
                    case 'info2':
                    if (!isRegistered) return reply(sayo.noregis())
                    reply(sayo.info2())
                    break
                    case 'info3':
                    if (!isRegistered) return reply(sayo.noregis())
                    reply(sayo.info3())
                    break                                        
                    case 'test':  
                    if (isPrem) return reply('[❗] Vocé não e um usuário vip :^')
                    if (isBanned) return reply(sayo.ban())
                    reply(`oke`)
                    break
                    case 'addprem':  
                    if (isBanned) return reply(sayo.ban())
					if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./akame/prem.json', JSON.stringify(prem))
					reply(`O número wa.me/${adprem} Agora e um usuário premium`)
					break
				case 'ban':
					if (!isOwner) return reply('vocé não e o meu criador 🐒')
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./akame/banned.json', JSON.stringify(ban))
					reply(`O número wa.me/${bnnd} foi banido do bot !`)
					break
				case 'unban':
					if (!isOwner) return reply('[❗]Você não e meu criador 🐒')
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./akame/banned.json', JSON.stringify(ban))
					reply(`O número wa.me/${bnnd} foi desbanido do bot!`)
					break
					
					case 'dellprem':  
                    if (isBanned) return reply(sayo.ban()) 
					if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./akame/prem.json', JSON.stringify(prem))
					reply(`O número wa.me/${delp} não e mais um usuário premium`)
					break
					case 'group':  
					case 'grupo':  
					case 'gp':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
					if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					if (!isGroupAdmins) return reply(`O BOT NÃO E ADMINISTRADOR`)
					if (!isBotGroupAdmins) return reply(`SOMENTE ADMINS DO GRUPO PODE USAR ESTE COMANDO`)
					if (args[0] === 'abrir') {
					    reply(`*[❗] GRUPO ABERTO COM SUCESSO*`)
						akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`*[❗] GRUPO FECHADO COM SUCESSO*`)
						akame.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
					case 'hidetag10':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())              
				    		if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
					var value = body.slice(10)
					var group = await akame.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					akame.sendMessage(from, options, text)					 
					break    
 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VHTEAR ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 
                    					
					 
					
										
					case 'ingfo':  
					if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())              
				    		if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					var value = body.slice(7)
					var group = await akame.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *ÚLTIMAS INFORMAÇÕES!!!* ]\nA PARTIR DE : *${pushname}*\nINFORMAÇÃO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					akame.sendMessage(from, options, text, {quoted: nay1})					 
					break					
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 
											 
					 case 'demote':  
					 case 'despromover':  
					 case 'rebaixar':  
                    if (isBanned) return reply(sayo.ban())
                    if (!isRegistered) return reply(sayo.noregis())
					if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					if (!isGroupAdmins) return reply('SOMENTE ADMINS DO GRUPO PODE USAR ESTE COMANDO?')
					if (!isBotGroupAdmins) return reply('O BOT NÃO E ADMINISTRADOR')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*sua posição de adm foi removida*🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					akame.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`yahhh @${mentioned[0].split('@')[0]} você não é mais administrador :(`, mentioned, true)
					akame.groupDemoteAdmin(from, mentioned)
					}					 
					break
				    case 'promote':  
				    case 'promover':
                    if (isBanned) return reply(sayo.ban())
                    if (!isRegistered) return reply(sayo.noregis())
					if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					if (!isGroupAdmins) return reply('SOMENTE ADMINS DO GRUPO PODE USAR ESTE COMANDO?')
					if (!isBotGroupAdmins) return reply('O BOT NÃO E ADMINISTRADOR')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `Você foi promovido a admin do grupo (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					akame.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`Parabéns @${mentioned[0].split('@')[0]} *Você agora e um admin* (+_+)`, mentioned, true)
					akame.groupMakeAdmin(from, mentioned)
					}					 
					break	                     
                    case 'oxo':                    
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
                    break                    
                    case 'tts': 
                    		if (!isRegistered) return reply(sayo.noregis())
                    if (isBanned) return reply(sayo.ban())
				    if (args.length < 1) return akame.sendMessage(from, 'O Código de idioma e obrigatório!!', text, {quoted: nay})					 
					if (args.length < 2) return akame.sendMessage(from, 'Cadê o texto?', text, {quoted: nay})
					dtt = body.slice(8)
					const gtts = require('./lib/gtts')(args[0])
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('O texto e muito grande!!!')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return reply('ERROR')
					akame.sendMessage(from, buffer, audio, {ptt:true, quoted:nay1})
					fs.unlinkSync(rano)
					})
					})
					break
					case 'bugtroli':  
							if (!isRegistered) return reply(sayo.noregis())
     if (isBanned) return reply(sayo.ban()) 
					if (!isOwner) return reply('Esse Comando é somente para meu criador 🐤')
					anu = await akame.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await akame.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					akame.sendMessage(_.jid, buff, image, {caption: `❮ *CAPAZ DE OBTER A PESQUISA* ❯\n\n${replytroli}`})
					}
					reply('*SUCESSO* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*[ TROLL!!! ]*\n\n${replytroli}`)
					}
					reply('*SUCESSO* ')
					}
					break
				 
					case 'randomfigu': 
							if (!isRegistered) return reply(sayo.noregis())
					if (isBanned) return reply(sayo.ban()) 
					wibuC = ['wibu1','wibu2','wibu3','wibu4','wibu5','wibu6','wibu7','wibu8','wibu8','wibu10','wibu11','wibu12']
					wibuF = wibuC[Math.floor(Math.random() * (wibuC.length))]
					wibuz = fs.readFileSync(`wibu/${wibuF}.webp`)					
                    akame.sendMessage(from, wibuz, sticker, {quoted: nay1})
                    break                    
                    case 'limit':                     
                    		if (!isRegistered) return reply(sayo.noregis())
				    checkLimit(sender)
					break 
			     	case 'leveling':
			     	if (!isRegistered) return reply(sayo.noregis())
                  		if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
                    if (!isGroupAdmins) return reply('SOMENTE ADMINS DO GRUPO PODE USAR ESTE COMANDO?')
                    if (args.length < 1) return reply('SELECIONE ativar/desativar')
                    if (args[0] === 'ativar') {
                    if (isLevelingOn) return reply('*[❗] modo leveling ja esta ativo*')
                    _leveling.push(from)
                    fs.writeFileSync('./akame/leveling.json', JSON.stringify(_leveling))
           	        reply('[❗] MODO LEVELING ATIVADO ✅')
                    } else if (args[0] === 'desativar') {
                	_leveling.splice(from, 1)
                    fs.writeFileSync('./akame/leveling.json', JSON.stringify(_leveling))
                    reply('[❗] MODO LEVELING DESATIVADO ✅')
                    } else {
           	        reply('SELECIONE ativar/desativar')
                  	}
				    break 
				    
		            		    case 'level':
                    if (!isLevelingOn) return reply('[❗] O MODO LEVELING ESTA DESATIVADO')
                    		if (!isRegistered) return reply(sayo.noregis())
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    if (userLevel === undefined && userXp === undefined) return reply(sayo.lvlnul())
                    const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                    resul = `╭──❲ ${xxx}SEU NÍVEL${xxx} ❳${xxx}\n│${tz} ${xxx} *Nome* : ${pushname}${xxx}\n│${tz} ${xxx}wa.me/${sender.split("@")[0]}${xxx}\n│${tz} ${xxx} Seu XP :  ${userXp}/${requiredXp}${xxx}\n│${tz} ${xxx} Seu nível : ${userLevel}${xxx}\n╰──❲ ${xxx}AKAME V.6.9.1${xxx} ❳`
                    reply(resul)
            			    	break     
            		case 'gerarnick': //@Kratos 愛
            				if (!isRegistered) return reply(sayo.noregis())
	if (isBanned) return reply(sayo.ban())             		
teks = body.slice(10)
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teks}`)
teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️
🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Térceiro ${send.random_3} 
🍙Quarto ${send.random_4} 
🍙Quinto ${send.random_5}
 
   👾EXTRAS👾
 👾${send.squares}
 👾${send.inverted_squares}
 👾${send.italic}
 👾${send.bold}
 👾${send.future_alien}
 👾${send.asian_1}
 👾${send.asian_2}
 👾${send.squiggle}
 👾${send.squiggle_2}
 👾${send.squiggle_3}
 👾${send.squiggle_4}
 👾${send.neon}
 
 
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
    
    ©akame
 `
akame.sendMessage(from, teks, text, {quoted: nay})
break	     	   			 		     	   			 	     	   			 		     	   			 	    	
			    				    
			    	case 'tomp3':
			    			if (!isRegistered) return reply(sayo.noregis())
			        if (isBanned) return reply(sayo.ban())
				    akame.updatePresence(from, Presence.composing)
			     	if (!isQuotedVideo) return reply('[❗] Marque o vídeo :V')
				    reply(sayoespere)
			        encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				    media = await akame.downloadAndSaveMediaMessage(encmedia)
				    ran = getRandom('.mp4')
			 	    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Deu erro mano :(')
					buffer = fs.readFileSync(ran)
					akame.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: nay, caption: `>_< ${pushname}`})
					fs.unlinkSync(ran)
			     	})
					break 
					
					case 'spam':
							if (!isRegistered) return reply(sayo.noregis())
					if (isBanned) return reply(sayo.ban())
					var FG = body.slice(7)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})					
					reply('SPAM ENVIADO 🔥')
					break					
					
					case 'enviar':
							if (!isRegistered) return reply(sayo.noregis())
					if (isBanned) return reply(sayo.ban())
					var FG = body.slice(7)
					var F1 = FG.split(" ")[0];
					var F2 = FG.split(" ")[1];
					akame.sendMessage(`${F1}@s.whatsapp.net`, `A PARTIR DE ${pushname}\nMENSAGEM : ${F2}`, text, {quoted:nay1})					
					reply('MENSAGEM ENVIADA ✅')
					break					
									
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ HENTAI ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                 					
case 'holo':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//GIF

case 'solo':
try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'ero':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'erofeet':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'spank':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'feet':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'classic':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'holoero':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'cum':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'eroyuri':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'eron':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'pwankg':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'anal':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewd':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewdkemo':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'solog':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewdk':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break


case 'blowjob':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'hentai':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'hololewd':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'trap':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'les':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'smallboobs':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'futanari':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'femdom':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'feed':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'erok':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'feetg':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'erokemo':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case'boobs':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'pussy':

try {
if (isBanned) return reply(sayo.ban())
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
reply('[❌] deu error ao enviar o hentai 😞')
} 
}
break
                                         
                

//GIFS
case 'ngif':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.video, {mimetype: 'video/gif', quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'smug':

try {
if (isBanned) return reply(sayo.ban())
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//ANIMES
case 'slap':
 if (isBanned) return reply(sayo.ban())
axios.get('https://nekos.life/api/v2/img/slap').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
break

case 'rhug':
 if (isBanned) return reply(sayo.ban())
axios.get('https://nekos.life/api/v2/img/hug').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: nay1})
})
})
break
case 'wallpaper2':
if (isBanned) return reply(sayo.ban())
akame.updatePresence(from, Presence.composing)
am = ["wallaper de anime para celular"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
quoted: fkontak, caption: `Achei esse para você 👩🏻‍💻`
})
break

case 'loli2':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["lolis fofas"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
quoted: fkontak, caption: `loli!!`
})
break

case 'waifu2':
   if (isBanned) return reply(sayo.ban())
akame.updatePresence(from, Presence.composing)
am = ["waifu anime fofa"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
quoted: fkontak, caption: `waifu!!`
})
break

case 'tanjiro':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Tanjiro Kamado"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'nezuko':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Nezuko Kamado"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'inosuke':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Inosuke Hashibira"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'zenitsu':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Zenitsu Agatsuma"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'genya':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Genya Shinazugawa"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'kanao':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Kanao Tsuyuri"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'hashiras':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Giyuu Tomioka (Hashira da Água)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'kyojuro':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Kyojuro Rengoku (Hashira das Chamas)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'shinobu':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Shinobu Kocho (Hashira dos Insetos)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'tengen':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Tengen Uzui (Hashira do Som)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'mitsuri':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Mitsuri Kanroji (Hashira do Amor)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'muichiro':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Muichiro Tokito (Hashira da Névoa)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'obanai':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Obanai Iguro (Hashira da Serpente)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'naruto':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Naruto Uzumaki"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'sasuke':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Sasuke Uchiha"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'madara':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Madara Uchiha"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'itachi':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Itachi Uchiha"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'kakashi':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Kakashi Hatake"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'obito':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Obito Uchiha"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'sakura':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Sakura Haruno"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'nagato':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["nagato"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'criador':
         if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)		
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://i.imgur.com/fHrhwDg.jpg`)
akame.sendMessage(from, buffer, image, {quoted: fkontak, caption: 'Criador sayo wa.me/556181496039'})
break				

case 'minato':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Minato Namikaze"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'hinata':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Hinata Hyuga"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'jiraiya':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Jiraiya"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'gaara':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Gaara da areia"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'tsunade':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Tsunade Senju"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'deidara':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Deidara"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'shikamaro':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Shikamaru Nara"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'ino':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Ino Yamanaka"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'orochimaru':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Orochimaru"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'neji':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Neji Hyuga"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'sasori':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Sasori"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'nagatoro':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Hayase Nagatoro"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'kilua':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Killua Zaoldyeck"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'deku':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Izuku Midoriya (Deku)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'allmight':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Toshinori Yagi (All Might)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'katsuki':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Katsuki Bakugo (Kacchan)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'tenya':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Ten'ya Iida (Ingenium)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'ochaco':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Ochaco Uraraka (Uravity)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'minoru':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Minoru Mineta"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'ashido':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Mina Ashido (Alien Queen/Pinky)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'shoto':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Shoto Todoroki (Shoto)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'tsuyu':
6				

akame.updatePresence(from, Presence.composing)
am = ["Tsuyu Asui (Froppy/Tsu)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'denki':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Denki Kaminari (Chargebolt)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'eijiro':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Eijiro Kirishima (Red Riot)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'fumikage':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Fumikage Tokoyami (Tsukuyomi)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'yaoyorozu':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Momo Yaoyorozu (Everything Hero: Creati)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'itsuka':
   if (isBanned) return reply(sayo.ban())

akame.updatePresence(from, Presence.composing)
am = ["Itsuka Kendo (Battle Fist)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'neito':
   if (isBanned) return reply(sayo.ban())
akame.updatePresence(from, Presence.composing)
am = ["Neito Monoma (Phantom Thief)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'mei':
   if (isBanned) return reply(sayo.ban())
akame.updatePresence(from, Presence.composing)
am = ["Mei Hatsume (Mei)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayoespere) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break

case 'neko2':
   if (isBanned) return reply(sayo.ban())
akame.updatePresence(from, Presence.composing)
am = ["neko"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(sayo.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {
})
break


/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ HENTAI2 OFF ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                 					
case 'lolizinhas': // @Kratos 愛
//off
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/neko`)
akame.sendMessage(from, buffer, image, {quoted: nay1})
break
case 'hentai2': //@Kratos 愛
//off
 if (isBanned) return reply(sayo.ban())
//off
reply('Enviando....')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/neko2`)
akame.sendMessage(from, buffer, image, {quoted: nay1})
break
case 'waifu': //@Kratos 
//off
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/neko2`)
akame.sendMessage(from, buffer, image, {quoted: nay1})
break					                                                                                                                                                                                                                                                 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 

                    
      case"":     
      if (!isAutofigu) return
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
const media = await akame.downloadAndSaveMediaMessage(encmedia)               
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('deu error tente novamente')
})
.on('end', function () {
console.log('AUTO FIGURINHA!!!')
exec(`webpmux -set exif ${addMetadata('akame-bot', 'sayo')} ${ran} -o ${ran}`, async (error) => {
akame.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
const media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
})
.on('end', function () {
console.log('AUTO FIGU!!!')
exec(`webpmux -set exif ${addMetadata('akame-bot', 'sayo')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply('❌DEU ERROR TENTE NOVAMENTE OU USE O #ST')
akame.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
const media = await akame.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
exec(`webpmux -set exif ${addMetadata('akame-bot', 'sayo')} ${ranw} -o ${ranw}`, async (error) => {
akame.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: nay1})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break                                        
                                                            
                                                                                
                                                                                                    
                                                                                                                                            
     default:            
    
     
     if (budy.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('[❗] ADM E PERMITIDO ENVIAR LINKS [❗]')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					akame.updatePresence(from, Presence.composing)					
					}, 0)
				    }
				    
				    
				    if (budy.includes("Https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('[❗] ADM E PERMITIDO ENVIAR LINKS [❗]')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					akame.updatePresence(from, Presence.composing)					
					}, 0)
				    }
				    
				    if (budy.includes("https")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('[❗] ADM E PERMITIDO ENVIAR LINKS [❗]')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					akame.updatePresence(from, Presence.composing)					
					}, 0)
				    }
				    
				    if (budy.includes("ps://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('[❗] ADM E PERMITIDO ENVIAR LINKS [❗]')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					akame.updatePresence(from, Presence.composing)					
					}, 0)
				    }
				    
				    if (budy.includes("wa.me")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('[❗] ADM E PERMITIDO ENVIAR LINKS [❗]')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					akame.updatePresence(from, Presence.composing)					
					}, 0)
					
				    }
				    if (budy.includes("t.me/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('[❗] ADM E PERMITIDO ENVIAR LINKS [❗]')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					akame.updatePresence(from, Presence.composing)					
					}, 0)
				    }			
				    	   
				    if (budy.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('[❗] ADM E PERMITIDO ENVIAR LINKS [❗]')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					akame.updatePresence(from, Presence.composing)					
					}, 0)
				    }	   
				   
                    if (budy.includes("Gosto de pau")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('[❗] o adm e gay? 😑')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }
				    
				    if (budy.includes("Lgbt")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('[❗] o adm e gay? 😑')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }
				    
				    if (budy.includes("🏳️‍🌈")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('[❗] o adm e gay? 😑')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }
				     
				    if (budy.includes("Rola")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('[❗] o adm e gay? 😑')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})			
					}, 0)
				    }
				    if (budy.includes("Sou gay")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('[❗] o adm e gay? 😑')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    
			    	 if (budy.includes("oqoqoqooqo1o1o1o")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})			
					}, 0)
				    }
				    if (budy.includes("Kwai")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    
				    if (budy.includes("Clique no botão abaixo para copiar o código de convite e vincular no seu aplicativo kwai para ganhar R$ 500,00 na Hora! Faça Já o Download do Aplicativo Kwai. (Disponível para Android e IOS).")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    
				    if (budy.includes("kwai")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("www.kwai.com")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("kwai3")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("kwai5")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("kwai6")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("kwai7")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("kwai8")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("kwai9")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("código do kwai")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }				    
				    
				    if (budy.includes("código do kawai")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`vai postar kwaii na casa do caralho seu mendigo`)
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    
				    if (budy.includes("*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})			
					}, 0)
				    }
				    
				 if (budy.includes("ผิดุท้่เึางืผิดุท้่เึางื")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})				
					}, 0)
				    }
				    if (budy.includes("*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})	
					}, 0)
				    }
				    if (budy.includes("*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
    	if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }
				    if (budy.includes("👤1000 contatos")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
    	if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }
				    if (budy.includes("ᬊ͜͡𝘿𝙤𝙪𝙜𝙡𝙖𝙨𝙈𝙤𝙙𝙙𝙚𝙧☠️🏴‍☠️️")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
    	if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }
				    if (budy.includes("👑͜ৣ̷়⃕𝔻ؙۥ𝕠࿆ⷤ𝕦ิ़़ࣩ⃔𝔾𝕝𝕒͍̽𝕤͜ॢ𝕄ꨶ𝕠ⷤ𝕕ูۘۘ𝕕ۣۣۥ𝕖ⷤℝ࿆⃔͜🥇҈҈҈͍ۣ̘⁢̘")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }				   
				     if (budy.includes("https://www.instagram.com/p/CE0pVKZs5Wk/?igshid=5ihhd4xdsgrh")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }				 
				    if (budy.includes("https://www.instagram.com/p/CGDblaZjFEy/?igshid=dcbexumnqlpb")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }				 
				    if (budy.includes("https://lol.davizinmaker.ml/nagazap")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }				 
				    if (budy.includes("∆꙰꙱꙲꙱꙲꙰.🧙‍♂️ 文 𝑂𝑉𝐸𝑅𝑇𝐸𝐼𝐾𝐸𝑅 || 𝟏𝟗𝟔𝟕 Ω 🧙‍♂️")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Adm pode 😎')
					akame.updatePresence(from, Presence.composing)
					if (messagesC.includes("@556181496039")) return reply("permissão aceita")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout( () => {
					akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 0)
				    }				 
				    if ((budy === "Qual e o prefix")){
				    reply(`O meu prefix e ${p}`)
				    }
				    if ((budy === "gak")){
				    const F2 = fs.readFileSync('sound/F2.mp3')
                    akame.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `gostosa`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
				               if ((budy === `Gostosa`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `gostoso`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
				               if ((budy === `Gostoso`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `linda`)){
                    const F3 = fs.readFileSync('menu/linda.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Linda`)){
                    const F3 = fs.readFileSync('menu/linda.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Caralho`)){                     
                    const F3 = fs.readFileSync('menu/caralho.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `caralho`)){                     
                    const F3 = fs.readFileSync('menu/caralho.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `blz`)){                     
                    const F3 = fs.readFileSync('menu/blz.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Blz`)){                     
                    const F3 = fs.readFileSync('menu/blz.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Frefire`)){                     
                    const F3 = fs.readFileSync('menu/frefiro.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `frefire`)){                     
                    const F3 = fs.readFileSync('menu/frefiro.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Ff`)){                     
                    const F3 = fs.readFileSync('menu/frefiro.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `ff`)){                     
                    const F3 = fs.readFileSync('menu/frefiro.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `pq`)){                     
                    const F3 = fs.readFileSync('menu/pq.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Pq`)){                     
                    const F3 = fs.readFileSync('menu/pq2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Porque`)){                     
                    const F3 = fs.readFileSync('menu/pq3.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `porque`)){                     
                    const F3 = fs.readFileSync('menu/pq4.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `ara`)){                     
                    const F3 = fs.readFileSync('menu/ara.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Ara`)){                     
                    const F3 = fs.readFileSync('menu/ara.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `ARA`)){                     
                    const F3 = fs.readFileSync('menu/ara.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `cu`)){                     
                    const F3 = fs.readFileSync('menu/cu.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Cu`)){                     
                    const F3 = fs.readFileSync('menu/cu.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Aleatório`)){                     
                    const F3 = fs.readFileSync('menu/cu.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `aleatório`)){                     
                    const F3 = fs.readFileSync('menu/cu.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }     
                    if ((budy === `@`)){
                      
                    const F3 = fs.readFileSync('menu/@.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }                               
                    if ((budy === `bem vinda(o)`)){                     
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Bem vinda(o)`)){                     
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Bem vindo(a)`)){                     
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Bem vindo`)){                     
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Bem vinda`)){                     
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `bem vindo`)){                     
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `bem vinda`)){                     
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }     
                    if ((budy === `foda`)){                      
                    const F3 = fs.readFileSync('menu/foda.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }     
                    if ((budy === `Foda`)){                      
                    const F3 = fs.readFileSync('menu/foda.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }                                                             
                    if ((budy === `gay`)){                      
                    const F3 = fs.readFileSync('menu/gay.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Gay`)){                      
                    const F3 = fs.readFileSync('menu/gay.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `xvideos`)){                      
                    const F3 = fs.readFileSync('menu/inocente.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Xvideos`)){                      
                    const F3 = fs.readFileSync('menu/inocente.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `to chorando`)){                      
                    const F3 = fs.readFileSync('menu/falido.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `To chorando`)){                      
                    const F3 = fs.readFileSync('menu/falido.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `triste`)){                      
                    const F3 = fs.readFileSync('menu/falido.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Triste`)){                      
                    const F3 = fs.readFileSync('menu/falido.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `bot baiano`)){                      
                    const F3 = fs.readFileSync('menu/baiano.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Bot baiano`)){                      
                    const F3 = fs.readFileSync('menu/baiano.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `baiano`)){                      
                    const F3 = fs.readFileSync('menu/baiano.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Baiano`)){                      
                    const F3 = fs.readFileSync('menu/baiano.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Bom dia`)){                     
                     reply(`Bom dia 🥱`)
                    const F3 = fs.readFileSync('menu/dia.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `bom dia`)){            
                    reply(`Bom dia 🥱`)
                    const F3 = fs.readFileSync('menu/dia.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `leticia`)){                      
                    const F3 = fs.readFileSync('menu/leticia.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Leticia`)){                      
                    const F3 = fs.readFileSync('menu/leticia.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Ban`)){                      
                    const F3 = fs.readFileSync('menu/ban.webp')                 
                    const F4 = fs.readFileSync('menu/ban2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    akame.sendMessage(from, F4, sticker, {quoted: nay1})
                    }
                    if ((budy === `ban`)){                                        
                    const F3 = fs.readFileSync('menu/ban.webp')                 
                    const F4 = fs.readFileSync('menu/ban2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    akame.sendMessage(from, F4, sticker, {quoted: nay1})
                    }
                    if ((budy === `corno`)){                                        
                    const F3 = fs.readFileSync('menu/corno1.webp')                 
                    const F4 = fs.readFileSync('menu/corno2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    akame.sendMessage(from, F4, sticker, {quoted: nay1})
                    }
                    if ((budy === `Corno`)){                                        
                    const F3 = fs.readFileSync('menu/corno1.webp')                 
                    const F4 = fs.readFileSync('menu/corno2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    akame.sendMessage(from, F4, sticker, {quoted: nay1})
                    }
                    if ((budy === `sayo`)){                      
                    const F3 = fs.readFileSync('menu/sayo.webp')
                    reply(`ele ta dormindo`)
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Sayo`)){                      
                    const F3 = fs.readFileSync('menu/sayo.webp')
                    reply(`ele ta dormindo`)
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }                   
                    if ((budy === `Amor`)){                      
                    const F3 = fs.readFileSync('menu/amor.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `amor`)){                      
                    const F3 = fs.readFileSync('menu/amor.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `akame`)){             
                    reply(`ao deu dispor 😊`)         
                    const F3 = fs.readFileSync('menu/akame.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Akame`)){                   
                    reply(`ao deu dispor 😊`)         
                    const F3 = fs.readFileSync('menu/akame.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Bot`)){                      
                    reply(`Que foi porra`)         
                    const F3 = fs.readFileSync('menu/porra.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `bot`)){                      
                    reply(`Que foi porra`)         
                    const F3 = fs.readFileSync('menu/porra.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `safada`)){                      
                    const F3 = fs.readFileSync('menu/safada.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Safada`)){                      
                    const F3 = fs.readFileSync('menu/safada.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `yamete`)){                      
                    const F3 = fs.readFileSync('menu/ya.webp')
                    const F2 = fs.readFileSync('sound/ya.mp3')
                    reply(`yaaaaah`)         
                    akame.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Yamete`)){                      
                    const F3 = fs.readFileSync('menu/ya.webp')
                    const F2 = fs.readFileSync('sound/ya.mp3')
                    reply(`yaaaaah`)         
                    akame.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `gozei`)){                      
                    const F3 = fs.readFileSync('menu/goza.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Gozei`)){                      
                    const F3 = fs.readFileSync('menu/goza.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Goza`)){                      
                    const F3 = fs.readFileSync('menu/goza.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `goza`)){                      
                    const F3 = fs.readFileSync('menu/goza.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Machista`)){                      
                    const F3 = fs.readFileSync('menu/machista.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `machista`)){                      
                    const F3 = fs.readFileSync('menu/machista.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Análise`)){                      
                    const F3 = fs.readFileSync('menu/analize.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `análise`)){                      
                    const F3 = fs.readFileSync('menu/analize.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Blz mas olha`)){                      
                    const F = fs.readFileSync('menu/olha.webp')
                    const F2 = fs.readFileSync('menu/olha2.webp')
                    const F3 = fs.readFileSync('menu/olha3.webp')
                    const F4 = fs.readFileSync('menu/olha4.webp')
                    const F5 = fs.readFileSync('menu/olha5.webp')
                    akame.sendMessage(from, F, sticker, {quoted: nay1})
                    akame.sendMessage(from, F2, sticker, {quoted: nay1})
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    akame.sendMessage(from, F4, sticker, {quoted: nay1})
                    akame.sendMessage(from, F5, sticker, {quoted: nay1})
                    }
                    if ((budy === `blz mas olha`)){                      
                    const F = fs.readFileSync('menu/olha.webp')
                    const F2 = fs.readFileSync('menu/olha2.webp')
                    const F3 = fs.readFileSync('menu/olha3.webp')
                    const F4 = fs.readFileSync('menu/olha4.webp')
                    const F5 = fs.readFileSync('menu/olha5.webp')
                    akame.sendMessage(from, F, sticker, {quoted: nay1})
                    akame.sendMessage(from, F2, sticker, {quoted: nay1})
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    akame.sendMessage(from, F4, sticker, {quoted: nay1})
                    akame.sendMessage(from, F5, sticker, {quoted: nay1})
                    }
                    if ((budy === `Grupo morto`)){                      
                     const F = fs.readFileSync('menu/morto.webp')
                    const F2 = fs.readFileSync('menu/morto2.webp')
                    const F3 = fs.readFileSync('menu/morto3.webp')
                    const F4 = fs.readFileSync('menu/morto4.webp')
                    const F5 = fs.readFileSync('menu/morto5.webp')
                    akame.sendMessage(from, F, sticker, {quoted: nay1})
                    akame.sendMessage(from, F2, sticker, {quoted: nay1})
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    akame.sendMessage(from, F4, sticker, {quoted: nay1})
                    akame.sendMessage(from, F5, sticker, {quoted: nay1})
                    }
                    if ((budy === `grupo morto`)){                      
                     const F = fs.readFileSync('menu/morto.webp')
                    const F2 = fs.readFileSync('menu/morto2.webp')
                    const F3 = fs.readFileSync('menu/morto3.webp')
                    const F4 = fs.readFileSync('menu/morto4.webp')
                    const F5 = fs.readFileSync('menu/morto5.webp')
                    akame.sendMessage(from, F, sticker, {quoted: nay1})
                    akame.sendMessage(from, F2, sticker, {quoted: nay1})
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    akame.sendMessage(from, F4, sticker, {quoted: nay1})
                    akame.sendMessage(from, F5, sticker, {quoted: nay1})
                    }
                    if ((budy === `🤡`)){                      
                    const F3 = fs.readFileSync('menu/🤡.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Gb`)){                      
                    const F3 = fs.readFileSync('menu/gb.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                     if ((budy === `gb`)){                      
                    const F3 = fs.readFileSync('menu/gb.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `eita`)){                      
                    const F3 = fs.readFileSync('menu/eita.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                     if ((budy === `Eita`)){                      
                    const F3 = fs.readFileSync('menu/eita.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                     if ((budy === `Bot falido`)){                  
                    reply(`${pushname} Quero ver fazer melhor filho da puta`)     
                    const F3 = fs.readFileSync('menu/melhor.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                     if ((budy === `bot falido`)){                      
                    const F3 = fs.readFileSync('menu/melhor.webp')
                    reply(`${pushname} Quero ver fazer melhor filho da puta`)
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                     if ((budy === `gf`)){                      
                    const F3 = fs.readFileSync('menu/gf.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Gf`)){                      
                    const F3 = fs.readFileSync('menu/gf.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
             if ((budy === "prefix")){
				    reply(`O meu prefix e ${p}`)
				    }
				    if ((budy === "Prefix")){
				    reply(`O meu prefix e ${p}`)
				    }
     				if ((budy === "anjing")){
    					const F2 = fs.readFileSync('sound/F3.mp3')
                    akame.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === "ara ara")){
				    const SS1 = fs.readFileSync('sound/araara.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === "Ara Ara")){
				    const SS1 = fs.readFileSync('sound/araara.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === "Ara ara")){
				    const SS1 = fs.readFileSync('sound/araara.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === "Ara")){
				    const SS1 = fs.readFileSync('sound/araara.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === "ara")){
				    const SS1 = fs.readFileSync('sound/araara.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }                    
                    if ((budy === `Olá`)){
				    const SS1 = fs.readFileSync('sound/moshi.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `olá`)){
				    const SS1 = fs.readFileSync('sound/moshi.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `ola`)){
				    const SS1 = fs.readFileSync('sound/moshi.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                   if ((budy === `Ola`)){
				    const SS1 = fs.readFileSync('sound/moshi.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `oi`)){
				    const SS1 = fs.readFileSync('sound/moshi.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Oi`)){
				    const SS1 = fs.readFileSync('sound/moshi.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }                    
                    if ((budy === `Pow`)){
				    const SS1 = fs.readFileSync('sound/bang.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `pow`)){
				    const SS1 = fs.readFileSync('sound/bang.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Arigato`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `arigato`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Obrigada`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Obrigado`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `obrigado`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `obrigada`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Makasi`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `makasi`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `thq`)){
				    const SS1 = fs.readFileSync('sound/arigatou.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `vn`)){
				    const SS1 = fs.readFileSync('sound/bang.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Vn`)){
				    const SS1 = fs.readFileSync('sound/bang.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Loli`)){
				    const SS1 = fs.readFileSync('sound/suki.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `syng`)){
				    const SS1 = fs.readFileSync('sound/suki.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `sayang`)){
				    const SS1 = fs.readFileSync('sound/suki.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Yukki`)){
				    const SS1 = fs.readFileSync('sound/suki.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Syng`)){
				    const SS1 = fs.readFileSync('sound/suki.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Loli`)){
				    const SS1 = fs.readFileSync('sound/suki.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `makasih`)){
				    const SS1 = fs.readFileSync('sound/suki.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `${p}menu`)){
				    const SS1 = fs.readFileSync('sound/suki.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Vn`)){
				    const SS1 = fs.readFileSync('sound/bang.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `ohayo`)){
				    const SS1 = fs.readFileSync('sound/ohayo.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `syng`)){
				    const SS1 = fs.readFileSync('sound/ohayo.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Ohayou`)){
				    const SS1 = fs.readFileSync('sound/ohayo.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `pagi`)){
				    const SS1 = fs.readFileSync('sound/ohayo.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Darling`)){
				    const SS1 = fs.readFileSync('sound/ohayo.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `Sayang`)){
				    const SS1 = fs.readFileSync('sound/ohayo.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if ((budy === `${numberbot}`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
				    if ((budy === `${criadorf}`)){
                    const F3 = fs.readFileSync('menu/tag2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if ((budy === `Yukki`)){
                    const F3 = fs.readFileSync('menu/tag3.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (body.startsWith(`${p}${command}`)) {
                    const SS1 = fs.readFileSync('sound/baka.mp3')
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay2})
                    }                                        
                    
                    function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
                    
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API GRÁTIS ]==============================================================*/                  	    
/*====================================================[ CASE BY SAYO E NAYLA ]==============================================================*/                    	 				    

                     
                    if (body.startsWith(`${p}${command}`)) {                    
                    anu1 = `─────────────────\n`
                    anu1 += `DESCULPE *${pushname}* ${notc1} MAS\n`
                    anu1 += `O COMANDO *${command}* \n`
                    anu1 += `NÃO ENCONTREI ESSE COMANDO NO MENU DIGITE PARA A LISTA DOS MEUS COMANDOS *${p}menu*\n`
                    anu1 += `─────────────────`
                    reply(anu1)
                    }                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		   reply('A APIKEY DEVE ESTA INVALIDA :(')
		}
	})
}
starts() 