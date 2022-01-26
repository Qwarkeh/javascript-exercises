const removeFromArray = function(array, ...args) {

    let argsArray = args;
    let argsLength = argsArray.length;

    let arrayLength = array.length;
        for (let i = 0; i < arrayLength; i++) {
            for (let j = 0; j < argsLength; j++) {
                if (array[i] === argsArray[j]) {
                    array.splice(i, 1);
                    i--;
                }
            }
        }
        return array;
};

//removeFromArray([1,2,3], 3, 4, 5);

// Do not edit below this line
module.exports = removeFromArray;
