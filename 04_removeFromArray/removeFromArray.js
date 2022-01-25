const removeFromArray = function(array, manyMoreArgs) {

//find length of array and manyMoreArgs
//compare lengths
//larger length ends up in the for loop
//nest another for loop that loops through manyMoreArgs and compares it to array

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            array.splice(i, 1);
            i--;
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
