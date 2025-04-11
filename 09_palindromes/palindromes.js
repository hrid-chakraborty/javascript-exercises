function isalnum(c) {
    return /^[a-z0-9]+$/i.test(c);
}

const palindromes = function (word) {
    let left = 0;
    let right = word.length - 1;
    while (left<right){
        if(!isalnum(word[left])) {
            left += 1;
            continue;
        }
        if(!isalnum(word[right])) {
            right -= 1;
            continue;
        }
        if(word[left].toLowerCase()!=word[right].toLowerCase()) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
