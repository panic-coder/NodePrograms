/**
 * Purpose   : Finding the sum of any 3 numbers in an array which tends to zero and finding total number of those triplets.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 23-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
var array = [];
input.question('Enter the size of array ', (size) => {
    size = Number(size) + Number(1);
    sumOfThreeNumber(size);
})

sumOfThreeNumber = (size) => {
    size--;
    if (size == 0) {
        console.log(array);
        var count = utility.triplets(array);
        console.log(count);
        input.close();
        process.exit();
    }
    input.question('Enter a number ', (number) => {
        array.push(number);
        if (size) {
            sumOfThreeNumber(size);
        }
    })
}