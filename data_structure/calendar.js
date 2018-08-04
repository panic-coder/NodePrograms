/**
 * Purpose   : Displaying calender after user input of month and year.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 28-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the month ',(month) => {
    input.question('Enter the year ',(year) => {
        utility.calender(month,year);
        input.close();
    })
})