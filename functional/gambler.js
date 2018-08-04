/**
 * Purpose   : Finding the number of wins and loss of a gambler.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 22-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter cash ',(cash) => {
    input.question('Enter stake ',(stake) => {
        input.question('Enter goals ',(goals) => {
            input.question('Enter trails ',(trails) => {
                utility.gambler(cash,stake,goals,trails);
                input.close();
            })
        })
    })
})

