const ftoc = function(fahrenheit) {
  celcius = parseFloat((( fahrenheit - 32) * (5/9)).toFixed(1));
  return celcius;
};

const ctof = function(celcius) {
  fahrenheit = parseFloat((celcius * (9/5) + 32).toFixed(1))
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
