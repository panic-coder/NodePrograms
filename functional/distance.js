/**
 * Purpose   : Findng distance between x and y
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 22-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter value of x ',(x) =>{
    input.question('Enter value of y ',(y) =>{
        var output = utility.distance(x,y);
        console.log('Distance ',output);
        input.close();
    })
})