module.exports.config = {
    name: "duadoi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    description: "Thời gian đua đội",
    commandCategory: "system",
    cooldowns: 5,
    dependencies: {
        "node-cron": ""
    }
};


module.exports.run = async ({api, event}) => {
    var cron = require('node-cron');
 
 cron.schedule('0 56 10 * * SAT-SUN',event.threadID,  () => {
   api.sendMessage('!ping đua đội',event.threadID,event.messageID);
 }, {
   scheduled: true,
   timezone: "Asia/Ho_Chi_Minh"
 });
}

