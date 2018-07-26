var utility = require('../utility/utility');
var linkedlist = require('./linkedlist');
input = utility.userInput();
var fs = require('fs');
fs.readFile('unordered.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split(",");
    //linkedlist.add(data.toString().split("\n"));
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
    
    //process.exit();

})

