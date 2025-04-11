const fibonacci = function(val) {
    if(typeof val == "string") {
        val = parseInt(val);
    }
    if (val < 0) {
        return "OOPS";
    }

    if (val == 0 || val == 1) {
        return val;
    }

    let prev1 = 0;
    let prev2 = 1;

    for (let i  = 2; i <= val; i++){
        let temp = prev2;
        prev2 += prev1;
        prev1 = temp; 
    }

    return prev2;
};

// Do not edit below this line
module.exports = fibonacci;
