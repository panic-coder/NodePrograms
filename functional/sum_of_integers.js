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