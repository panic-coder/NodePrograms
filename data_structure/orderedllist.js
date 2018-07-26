var utility = require('../utility/utility');
var linkedlist = require('./linkedlist');
input = utility.userInput();
var fs = require('fs');
fs.readFile('ordered.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split(",");
    //linkedlist.add(data.toString().split("\n"));
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
    
    //process.exit();

})

