/**
 * Purpose   : Game called find your number.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 24-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
var array = [];
input.question('Enter the size ', (n) => {
    var lastValue = utility.powerOfTwo(n);
    findingYourNumber(0, lastValue);
})
findingYourNumber = (firstValue, lastValue) => {
    var first = firstValue;
    var last = lastValue;
    if (first == last) {
        console.log('Your Number is: ' + first);
        input.close();
        process.exit();
        return;
    }
    var mid = parseInt((Number(first) + Number(last)) / 2);
    input.question(`Enter 'yes' if number exists in this range ${first}-${mid} : \nEnter 'no' if number exists in this range  ${mid+1}-${last} : \n`, (number) => {
        if (number == 'yes') {
            findingYourNumber(first, mid);
        } else if (number == 'no'){
            findingYourNumber(Number(mid + 1), last);
        }
        else{
            console.log("Enter yes or no only");
            findingYourNumber(first, last);
        }
    });
}