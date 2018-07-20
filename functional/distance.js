var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter value of x ',(x) =>{
    input.question('Enter value of y ',(y) =>{
        var output = utility.distance(x,y);
        console.log('Distance ',output);
        input.close();
    })
})