const palindromes = function (input) {
    
    const inputArray = input.toLowerCase().split('');

    const filteredArray= inputArray.filter(character => {
        if (character !== '!' && character !== ',' && character !== ' ' && character !== '.')
            return character;
    });

    let filteredClone = [...filteredArray]; //ES6 way of copying array

    let reverseArray = filteredClone.reverse(); //reverse() changes original array

    let inputNewString = filteredArray.join('');
    let reverseArrayString = reverseArray.join('');

    if (inputNewString === reverseArrayString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

