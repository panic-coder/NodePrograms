/**
 * Purpose   : Checking if the parethesis are balanced or not via using user defined stack.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 28-07-2018
 */
var utility = require('../utility/utility');
var stack = require('../data_structure/stack_linkedlist');
var input = utility.userInput();
input.question('Enter the expression ', (data) => {
    var c = Array.from(data);
    for (var i = 0; i < c.length; i++) {
        if (c[i] == '(') {
            stack.push(c[i]);
        } else if (c[i] == ')') {
            stack.pop();
        } else if (c[i] == '{') {
            stack.push(c[i]);
        } else if (c[i] == '}') {
            stack.pop();
        } else if (c[i] == '[') {
            stack.push(c[i]);
        } else if (c[i] == ']') {
            stack.pop();
        }
    }
    var b = stack.isEmpty();
    if (b) {
        console.log('Balanced Parenthesis');
    } else {
        console.log('Unbalanced Parenthesis');
    }
    input.close();
})