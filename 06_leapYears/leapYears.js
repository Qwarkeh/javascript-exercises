const leapYears = function(year) {
    let leapYear;
    if (year % 4 === 0) {
        leapYear = true;
    } else {
        leapYear = false;
    }

    if (leapYear === true){
        if (year % 100 === 0) {
            if (year % 400 === 0){
               leapYear = true;
            }
        }
    }

    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
