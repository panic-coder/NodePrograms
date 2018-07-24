var utility = require('../utility/utility');
var input = utility.userInput();

input.question('Enter the binary number ', (data) => {
    var output = utility.toBinary(data);
    console.log(utility.swapNibbles(output));
    input.close();
})