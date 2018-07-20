var utility = require('../utility/utility.js');
var input = utility.userInput();
input.question('Enter the value ',(value) => {
    utility.factors(value);
    input.close();
})