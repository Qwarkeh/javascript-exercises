const add = function(num1, num2) {
  const sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
  const substraction = num1 - num2;
  return substraction;
};

const sum = function(array) {
    return array.reduce((total, nextNumber) => total + nextNumber, 0);
};

const multiply = function(numbers) {
    return numbers.reduce((firstNumber, nextNumber) => firstNumber* nextNumber);
};

const power = function(num1, num2) {
    return num1**num2;
};

const factorial = function(num) {

  if (num === 0){
    return 1;

  } else {
      let intArray = []; 
      for (let i = 1; i < num + 1; i++) {
      intArray.push(i);
    } 
    return intArray.reduce((firstNumber, nextNumber) => firstNumber * nextNumber);
  }
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
