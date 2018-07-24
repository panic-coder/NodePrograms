var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the number ', (number) => {
    console.log(utility.toBinary(number));
    input.close();
})
