/**
 * Purpose   : Calculating the monthly payment for a loan.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 24-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter Principle ', (p) => {
    input.question('Enter Year ', (y) => {
        input.question('Enter rate ', (r) => {
            console.log(utility.payment(p,y,r));
            input.close();
        })
    })
})