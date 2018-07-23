var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter Principle ', (p) => {
    input.question('Enter Year ', (y) => {
        input.question('Enter rate ', (r) => {
            console.log(utility.payment(p,y,r));
            input.close();
        })
    })
})