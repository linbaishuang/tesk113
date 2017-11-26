module.exports.main = function main() {
    console.log("Debug Info");
    return 'Hello World!';
};

module.exports.allmoney = function allmoney(run, wait) {
    var money = 0;
    if(run > 8){
        money += (run-8) * (0.8+0.8*0.5) + 8*0.8;
    }
    else if(run >2 && run <=8 ){
        money += 0.8*8;
    }
    else if(run>0 && run <=2){
        money += 6;
    }

    if(wait>0){
        money += wait * 0.25;
    }

    console.log(Math.round(money));
};