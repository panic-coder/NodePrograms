/**
 * Purpose   : Conversion of decimal number to binary.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 25-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the number ', (number) => {
    console.log(utility.toBinary(number));
    input.close();
})
