var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter temperature gretaer than 50 ',(t) => {
    input.question('Enter speed less than 120 and not less than 3 ',(v) => {
        if(t>50 && v>4 && v<120){
            console.log(utility.chill(t,v));
        } else {
            console.log('Your values doesnot follows the required criteria');
        }
        input.close();
    })
})