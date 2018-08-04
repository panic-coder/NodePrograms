/**
 * Purpose   : Swapping nibbles in a binary value.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 25-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();

input.question('Enter the binary number ', (data) => {
    var output = utility.toBinary(data);
    console.log(utility.swapNibbles(output));
    input.close();
})