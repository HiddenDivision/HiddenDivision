const {Client, Attachment, RichEmbed, Guild, GuildMember, MessageMentions, Role} = require('discord.js');
const bot = new Client();

const token = 'NTk1MDQ3ODY2OTk3ODAwOTYw.XRlbTA.JgQzN_iGs4ejQU1-DqoNOn5dpDo';

const PREFIX = '​';

bot.on('ready', () =>{
	console.log('Hidden division is now hidden.');
})

bot.on('guildMemberAdd', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "wɇƚ¢¤₥ɇ");
	if(!channel) return;
	let role = member.guild.roles.find("name", "Hidden user.");
	member.addRole(role.id);
	channel.sendMessage(`Welcome in Ɦıᴅᴅᴇɴ Ðıᴠısıᴏɴ Ᵽᴜʙʟıᴄ. Be sure you are hidden over here, ${member}.`);
})

bot.on('guildMemberRemove', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "wɇƚ¢¤₥ɇ");
	if(!channel) return;
	channel.sendMessage(`I guess ${member} wasn't hidden to stay here...`)
})

bot.on('message', msg=>{
	if(msg.content === "I'm hidden."){
		msg.reply('Ｓｔａｙ  ｈｉｄｄｅｎ  ｔｈｅｎ．');
	}
	if(msg.content === "Pwease send Spanzer's thighs."){
		const attachement = new Attachment('https://cdn.discordapp.com/attachments/574629212258959387/594448748256428042/JPEG_20190510_205536.jpg');
		msg.channel.sendMessage(attachement);
	}
	let args = msg.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'test':
			msg.channel.sendMessage('This is a test.');
		break;
		case 'help':
			const embed = new RichEmbed()
			.setTitle('Available Commands :')
			.addField('General commands', "'help' : Shows you all available commands. \n 'kick' : Kicks a specific user from the server. \n 'ban' : Ban a specific user from the server.")
			.addField('Entertainment commands', "'test' : Just a test. \n 'Pwease send Spanzer's thighs.' (Without the prefix) : Send's Spanzer's thighs.")
			msg.channel.sendEmbed(embed);
		break;
		case 'purge':
			if(!args[1]) return msg.channel.sendMessage('Please specify a number of messages to be purged!')
			msg.channel.bulkDelete(args[1]);
		break;
		case 'kick':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			const tuser = msg.mentions.users.first();
			const kreason = args.join(" ").slice(26);
			if(tuser){
				const member = msg.guild.member(tuser)
				if(member){
					if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to kick someone!");
					if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to kick someone!");
					if(!kreason){
						member.kick('You were kicked.');
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(kembed);
					}
					else{
						member.kick(kreason);
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", kreason);
						msg.channel.sendEmbed(kembed);
					}
				}
			}
		break;
		case 'ban':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			const user = msg.mentions.users.first();
			const breason = args.join(" ").slice(26);
			if(user){
				const member = msg.guild.member(user)
				if(member){
					if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to ban someone!");
					if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to ban someone!");
					if(!breason){
						member.ban('You were banned.');
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(bembed);
					}
					else{
						member.ban(breason);
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", breason);
						msg.channel.sendEmbed(bembed);
					}
				}
			}
		break;
		case 'unban':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user ID!')
			if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to unban someone!");
			if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to unban someone!");
			msg.guild.unban(args[1])
			const uembed = new RichEmbed()
			.setTitle('User has been unbanned!')
			msg.channel.sendEmbed(uembed);
		break;
	}
})

bot.login(process.env.BOT_TOKEN);
