module.exports.config = {
    name: "thinh",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    commandCatagory: "Love",
    cooldowns: 5,
};


module.exports.run = async ({event , api}) => {
    const thinh = [
        "H.O.L.L.A.N.D",
        "I.T.A.L.Y ",
        "L.I.B.Y.A",
        "F.R.A.N.C.E",
        "C.H.I.N.A",
        "I.N.D.I.A ",
        "K.O.R.E.A",
        "I.M.U.S",
        "Y.A.M.A.H.A",
        "S.H.M.I.L.Y",
        "25251325",
        "35351335",
        "9277",
        "7538",
        "5910",
        "520",
    ];
    return api.sendMessage(`${thinh[Math.floor(Math.random() * thinh.length)]}`, event.threadID,event.mentions);
}