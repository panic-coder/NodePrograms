/**
 * Purpose   : Finding whether a year is leap or not.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 23-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the year ',(year)=>{
    if(year<1000 || year>9999){
        console.log('Wrong input ensure its a 4 digit number');
    }else{
        var results = utility.leap(year);
        if(results){
            console.log(year,' is leap');
        }
        else{
            console.log(year,' is not leap');
        }
    }
    input.close();
})