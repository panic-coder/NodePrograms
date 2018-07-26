var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the month ',(month) => {
    input.question('Enter the year ',(year) => {
        utility.calenderQueue(month,year);
        input.close();
    })
})