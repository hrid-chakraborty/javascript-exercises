const reverseString = function(st) {
    let stArray = st.split("");
    let left = 0;
    let right = stArray.length - 1;

    while(left<=right) {
        [stArray[left], stArray[right]] = [stArray[right], stArray[left]];
        left += 1;
        right -= 1;
    }

    return stArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
