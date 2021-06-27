module.exports.config = {
    name: "duadoi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    description: "Thời gian đua đội",
    commandCategory: "system",
    cooldowns: 5;
    dependencies: {
        "node-schedule": ""
    }
};


module.exports.run = async ({api, event}) => {
    var schedule = require('node-schedule');
    var cronExpress = '0 50 7 * * SAT-SUN';
    var j =  schedule.scheduleJob(cronExpress, function(fireDate) {
        return api.sendMessage("!ping đua đội",event.threadID,event.messageID);
        return api.sendMessage(fireDate,event.threadID,event.messageID)
    }); 
}

