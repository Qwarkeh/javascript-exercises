const reverseString = function(str) {
    let inputArray = [];
    let outputArray = [];

    // fill inputArray
    for(let i = 0; i < str.length; i++) {
        inputArray[i] = str[i];
    }

    //pop the end off the first array, and add it to the second array
    for(let i = 0; i < str.length; i++) {
        outputArray[i] = inputArray.pop();
    }

    outputString = outputArray.join('');
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
