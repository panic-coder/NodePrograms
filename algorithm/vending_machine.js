var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the amount ', (amount) => {
    utility.vendingmachine(amount);
    input.close();
})