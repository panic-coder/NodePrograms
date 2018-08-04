/**
 * Purpose   : Calculating the sum of harmonic numbers.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 23-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the Nth harmonic value ',(N)=>{
    //console.log(N);
    var results = utility.harmonic(N);
    console.log(results);
    
    input.close();
})