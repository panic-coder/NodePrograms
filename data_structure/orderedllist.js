/**
 * Purpose   : Reading numbers from a file and taking a user input and add the number if not present or else remove it using user defined linked list.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 27-07-2018
 */
var utility = require('../utility/utility');
var linkedlist = require('./linkedlist');
input = utility.userInput();
var fs = require('fs');
fs.readFile('ordered.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split(",");
    for(var i=0;i<array.length;i++) {
        linkedlist.add(array[i]);
    }
    linkedlist.display();
    console.log();
    
    input.question('Enter a number ', (number) => {
        var searchResults = linkedlist.search(number);
        if (searchResults) {
            linkedlist.remove(number);
            array.pop(number)
        } else {
            linkedlist.add(number);
            array.push(number);
        }
        console.log();
        
        linkedlist.display();
        linkedlist.writeTextFile(array,'./ordered.txt');
        input.close();
    })
})

