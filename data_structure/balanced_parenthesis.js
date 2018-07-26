var utility = require('../utility/utility');
var stack = require('../data_structure/stack_linkedlist');
var input = utility.userInput();
input.question('Enter the expression ', (data) => {
    //console.log(data);
    var c = Array.from(data);
    //console.log(a);
    var brackets;
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