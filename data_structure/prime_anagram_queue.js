var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the range 1-1000 ', (range) => {
    if(range <= 1000 && range>1){
        utility.primeAnagram2dQueue(range);
    } else {
        console.log('Wrong input');
    }
    input.close();
})