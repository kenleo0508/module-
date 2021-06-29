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
        "Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?",
        "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc.",
        "Anh yêu ơi ới ời. Anh đang ở đâu?",
        "Em có muốn con mình sau này có ADN của anh không?",
        "Anh cho phép em ở mãi trong trái tim anh đấy.",
        "Cái gì đầy trong mắt em đó? Hình như là anh.",
        "Điện thoại của em có vấn đề rồi. Nó không có số điện thoại của anh.",
        "Hôm nay 14 tháng 3, mà sao chưa ai tặng quà anh nhỉ?",
        "Trong tim em có chỗ nào cho anh không?",
        "Tay anh đây ấm lắm, em muốn nắm thử không?",
        "Em nên vui vẻ vì chúng ta là bạn bè, hay là nên buồn khi chúng ta chỉ là bạn bè?",
        "Anh vô gia cư hay sao cứ ở trong đầu em mãi.",
        "Em nghĩ chúng mình có điểm chung đấy. Đó là anh yêu bản thân anh, còn em thì cũng yêu anh!",
        "Nếu không có gì là mãi mãi, anh có thể là “không có gì” của em được không?",
        "Anh gì ơi cho em mượn cái đèn pin được không. Trời tối quá em không biết đường nào để đi đến trái tim anh.",
        "Mọi người đều yêu cái đẹp, nên anh yêu em.",
        "Chỉ cần em yêu anh thôi, còn cả thế giới cứ để anh lo",
        "Này em ơi, mẹ anh đang gọi con dâu kìa.",
        "Cuộc đời này chắc chắn không như ý anh muốn, vậy em sẽ như ý anh muốn.",
        "Em có thể đưa anh đến tiệm bánh được không? Vì anh cũng muốn có một chiếc bánh Cutie giống như em vậy"
    ];
    return api.sendMessage(`${thinh[Math.floor(Math.random() * thinh.length)]}`, event.threadID,event.mentions);
}