/**
 * Purpose   : Finding the prime numbers for the given range.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 24-07-2018
 */
var utility = require('../utility/utility');
for(var i=2;i<=1000;i++){
    var results = utility.isPrime(i);
    if(results){
        console.log(i);
    }
}