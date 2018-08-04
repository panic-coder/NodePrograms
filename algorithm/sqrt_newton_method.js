/**
 * Purpose   : Finding square root using newton method.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 25-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter a non-negative number ', (c) => {
    utility.sqrtOfNumber(c);
    input.close();
})