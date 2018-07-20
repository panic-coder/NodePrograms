var utility = require('../utility/utility');
var timeStart = Date.now();
var timeStop;
var input = utility.userInput();
input.question('Enter "STOP" to stop the watch ',(stop) => {
    if(stop==='STOP'){
        timeStop = Date.now()
        console.log(timeStop-timeStart,'Milli seconds');
    } else {
        console.log('Something went wrong');
    }
    input.close();
})
console.log();
