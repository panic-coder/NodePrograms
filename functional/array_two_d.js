/**
 * Purpose   : Displaying the 2D array
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 22-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the rows ',(m) => {
    input.question('Enter the columns ',(n) => {
        utility.array(m,n);
        input.close();
    })
})