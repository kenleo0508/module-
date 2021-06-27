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


module.exports.run = async ({api, event}) => {
    const cron = require('cron');

const job = new cron.CronJob({
  cronTime: '00 30 22 * * SAT-SUN',
  onTick: function() {
    api.sendMessage('alo alo',event.threadID);
  },
  start: true, 
  timeZone: 'Asia/Ho_Chi_Minh'
});

job.start();
}


