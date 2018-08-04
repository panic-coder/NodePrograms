/**
 * Purpose   : Searching a word from a file via binary search.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 25-07-2018
 */
var utility = require('../utility/utility');
input = utility.userInput();
var fs = require('fs');
fs.readFile('file.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    addBinary(array)
});
var i = 0;
addBinary = (array) => {

    console.log(array);
    input.question('Data to be searched ', (search) => {
        var data = utility.binarySearch(search, array);
        if (data) {
            console.log('Found');
        } else {
            console.log('Not found');
        }
        input.close();
    })
}