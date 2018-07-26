var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the number of node ', (nodes) => {
    console.log(utility.binarySearchTree(nodes));
    input.close();
})