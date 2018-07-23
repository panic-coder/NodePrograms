var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the size of array ',(size) => {
    utility.sumOfThreeintegers(size);
    input.close();
})