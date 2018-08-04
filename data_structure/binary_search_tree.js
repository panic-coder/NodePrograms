/**
 * Purpose   : Finding total number how the nodes can be arranged for a given number of nodes.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 28-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the number of node ', (nodes) => {
    console.log(utility.binarySearchTree(nodes));
    input.close();
})