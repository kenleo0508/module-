odule.exports.config = {
	name: "bống",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "gai",
	cooldowns: 5
    dependencies: {
        "axios": "",
        "request": "",
        "fs": ""
    }
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://nqvapi.ml/lebong2005.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/bống.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bống.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/bống.${ext}`)).on("close", callback);
			})
}