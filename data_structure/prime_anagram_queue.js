/**
 * Purpose   : Displaying prime number which are anagram using user defined queue in 2D format from 1-100, 101-200 ... 901-1000.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 29-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the range 1-1000 ', (range) => {
    if(range <= 1000 && range>1){
        utility.primeAnagram2dQueue(range);
    } else {
        console.log('Wrong input');
    }
    input.close();
})