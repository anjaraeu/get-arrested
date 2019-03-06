module.exports = {
    loop: function(msg = "mwhahaha! it's an infinite loop!") {
        while(1) {
            console.log(msg);
        }
    }
}