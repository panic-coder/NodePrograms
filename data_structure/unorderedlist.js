/**
 * Purpose   : Reading text from a file and search for a word, is present delete the word or else remove it using user defined linked list.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 27-07-2018
 */
var utility = require('../utility/utility');
var linkedlist = require('./linkedlist');
input = utility.userInput();
var fs = require('fs');
fs.readFile('unordered.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split(",");
    for(var i=0;i<array.length;i++) {
        linkedlist.add(array[i]);
    }
    linkedlist.display();
    console.log();
    
    input.question('Enter a word ', (word) => {
        var searchResults = linkedlist.search(word);
        if (searchResults) {
            linkedlist.remove(word);
            array.pop(word);
        } else {
            array.push(word);
            linkedlist.add(word);
        }
        console.log();
        
        linkedlist.display();
        linkedlist.writeTextFile(array,'./unordered.txt');
        input.close();
    })
})

