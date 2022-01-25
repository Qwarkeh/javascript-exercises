const repeatString = function(string, num) {
let strAnswer = '';

    if (num < 0) {
        strAnswer = 'ERROR';
    } else {
        for (let i = 0; i < num; i++ ) {
            strAnswer += string;
        }
    }

    return strAnswer;
};

// Do not edit below this line
module.exports = repeatString;
