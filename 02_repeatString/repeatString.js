const repeatString = function(st, num) {
    if(num < 0) {
        return "ERROR"
    }
    let count = 0;
    let res = "";
    while(count < num) {
        res += st;
        count+=1;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
