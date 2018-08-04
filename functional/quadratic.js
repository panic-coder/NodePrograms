/**
 * Purpose   : Finding the roots for the quadratic equation.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 23-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the value of a ',(a) =>{
    input.question('Enter the value of b ',(b) =>{
        input.question('Enter the value of c ', (c) =>{
            utility.quad(a,b,c);
            input.close();
        })
    })
})