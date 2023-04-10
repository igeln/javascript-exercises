const add = function(add1, add2) {
	return add1 + add2;
};

const subtract = function(sub1, sub2) {
	return sub1 - sub2;
};

const sum = function(arr) {
	let sum = 0;
  for (let e of arr) {
    sum += e;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
  if (num === 0) return 1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
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
