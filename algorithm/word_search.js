var utility = require('../utility/utility');
input = utility.userInput();
var fs = require('fs');
fs.readFile('file.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    // for(var i=0;i<array.length;i++) {
    //     console.log(array[i]);
    // }
    addBinary(array)
});
var i = 0;
addBinary = (array) => {

    console.log(array);
    input.question('Data to be searched ', (search) => {
        var data = utility.binarySearch(search, array);
        //console.log(data);
        if (data) {
            console.log('Found');
        } else {
            console.log('Not found');
        }
        input.close();
    })
}