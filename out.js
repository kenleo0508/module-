module.exports.config = {
    name: "out",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    description: "Tự out khỏi nhóm",
    commandCategory: "noprefix",
    cooldowns: 5,
},


module.exports.handleReaction = async ({ event, api, Users, handleReaction }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
			const name = global.data.userName.get(handleReaction.target) || await Users.getNameUser(handleReaction.target);
            api.removeUserFromGroup(parseInt(handleReaction.target),event.threadID);
}

module.exports.handleEvent = ({event, api}) => (event.body.toLowerCase() == "out") ? api.sendMessage(`Bạn có chắc muốn out box này?\n\nHãy reaction vào tin nhắn này để out!`, event.threadID, (error, info) => {
    global.client.handleReaction.push({
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        target: event.senderID
    });
 }) : '';

module.exports.run = () => {}

