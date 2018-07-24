var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter a non-negative number ', (c) => {
    utility.sqrtOfNumber(c);
    input.close();
})