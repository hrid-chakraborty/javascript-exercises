const sumAll = function(start, end) {
    if (typeof start != "number" || typeof end != "number" || start<0 || end<0) {
        return "ERROR";
    }

    if(start%1!==0 || end%1!==0) {
        return "ERROR";
    }

    if(start > end) {
        [start, end] = [end, start];
    }
    let res = 0;
    for(let i = start; i<=end; ++i) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
