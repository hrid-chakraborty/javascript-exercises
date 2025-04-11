const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, ele)=>(acc+ele),0);
};

const multiply = function(arr) {
  return arr.reduce((acc, ele)=>(acc*ele),1);
};

const power = function(n, p) {
  let result = 1;
	for (let i = 0; i < p; ++i) {
    result *= n;
  }
  return result;
};

const factorial = function(n) {
  let result = 1;
  while(n > 0) {
    result *= n;
    n-=1;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
