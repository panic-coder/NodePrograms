/**
 * Purpose   : Finding factors of particular number
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 22-07-2018
 */
var utility = require('../utility/utility.js');
var input = utility.userInput();
input.question('Enter the value ',(value) => {
    utility.factors(value);
    input.close();
})