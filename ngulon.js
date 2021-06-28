module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Nói bot ngu đi",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0
};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "bot ngu") ? api.sendMessage("chúc mừng mày đã bị tao ban", event.threadID, () => {
    const name = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);
			const data = (await Users.getData(event.senderID)).data || {};
			data.banned = 1;
			await Users.setData(event.senderID, { data });
			global.data.userBanned.set(parseInt(event.senderID), 1);
			api.sendMessage(`[${event.senderID} | ${name}] Đã ban thành công!`, event.threadID);
}): '';
            
module.exports.run = () => {}