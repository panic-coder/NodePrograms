/**
 * Purpose   : Finding minimum number of notes that a vending machine should drop for a given amount.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 25-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the amount ', (amount) => {
    utility.vendingmachine(amount);
    input.close();
})