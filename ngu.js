module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    description: "Nói bot ngu đi",
    commandCategory: "noprefix",
    usage: "",
    cooldowns: 0,
};


module.exports.handleEvent = ({event, api}) => {
    (event.body.toLowerCase() == "Bot ngu") ? api.sendMessage("Ngu con cac", event.threadID,event.messageID, () => api.removeUserFromGroup(senderID, event.threadID)) : '';
}
module.exports.run = () => {}    
