module.exports.config = {
    name: "duadoi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    description: "Thời gian đua đội",
    commandCategory: "system",
    cooldowns: 5;
    dependencies: {
        "node-cron": ""
    }
};


module.exports.handleEvent = async function ({api, event}) {
    var cron = require('node-cron');
 
 cron.schedule('50 7 * * SAT-SUN', () => {
   api.sendMessage('!ping đua đội',event.threadID,event.messageID);
 }, {
   scheduled: true,
   timezone: "Asia/Ho_Chi_Minh"
 });
}
module.exports.run = function () => {}

