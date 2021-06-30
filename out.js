module.exports.config = {
    name: "out",
    version: "1.0.1",
    credits: "Leo",
    description: "Tự out khỏi nhóm",
    commandCategory: "noprefix",
    cooldowns: 5,
},

module.exports.handleEvent = ({event, api}) => (event.body.toLowerCase() == "out") ? api.removeUserFromGroup(event.senderID,event.threadID) : '';

module.exports.run = () => {}

