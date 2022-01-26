const sumAll = function(intOne, intTwo) {

    const inputArray = [intOne, intTwo];
    const sortedArray = inputArray.sort();

    //create a new array and fill it with incremental integers
    let incrementedArray = [sortedArray[0]];
    let num = sortedArray[0];
    for (let i = 1; i < sortedArray[1]; i++) {
        num += 1;
        incrementedArray.push(num);
    }

    //get the sum using reduce method
    let sum = incrementedArray.reduce(function(a, b) {
        return a + b;
    }, 0);  

    //check for negative numbers
    if ((intOne < 0 || intTwo < 0)) {
        sum = "ERROR";
    }
   
    //check for non-numbers
    if (typeof intOne !== "number" || typeof intTwo !== "number") {
        sum = "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
