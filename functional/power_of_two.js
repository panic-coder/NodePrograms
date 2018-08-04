/**
 * Purpose   : Calculating the power of two for the given number.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 23-07-2018
 */
var utility = require('../utility/utility.js');
var value = process.argv[2];
if(value>=0 && value<31){
    var result = utility.powerOfTwo(value);
    console.log(result);
} else{
    console.log('please Enter " 0 >= number < 31 "');
    
}





