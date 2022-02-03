const fibonacci = function(num) {

    if (num < 0) {
        return "OOPS";
    }
    else {
        let num1 = 0;
        let num2 = 1;
        var step = 0;

        for (i = 1; i < num; i++) {
            if (i < 1) {
                step = i
            }
            else {
                step = num1 + num2;
                num1 = num2;
                num2 = step;
            }
        }
        return num2;
    }
};

// Do not edit below this line
module.exports = fibonacci;

// 1 1 2 3 5 8 13 21