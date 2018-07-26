var utility = require('../utility/utility');
var hash = require('./hash_chaining');
var input = utility.userInput();
var fs = require('fs');
var chain = new hash(11);
console.log(chain);

fs.readFile('hashInput.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split(",");
    //linkedlist.add(data.toString().split("\n"));
    for(var i=0;i<array.length;i++) {
        hash.insert(array[i]);
    }
    hash.display();
    console.log();
})
