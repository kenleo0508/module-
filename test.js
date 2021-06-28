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

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "bot ngu") ? api.sendMessage("kick bỏ mẹ bây giờ", event.threadID, () => 
            global.data.userBanned.set(parseInt(event.senderID), 1);
			api.sendMessage(`[${event.senderID} | ${name}] Đã ban thành công!`, event.threadID);
module.exports.run = () => {}