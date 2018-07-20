var utility = require('../utility/utility');
var input = utility.userInput();
var array = []//['a','b','c','d','e'];
input.question('Enter the size ',(n) => {
    add(n);
})
console.log(array);

// input.question('Enter the number to be searched ', (size) => {
//     var data = utility.binarySearch(size,array);
//     if(data){
//         console.log('Found');
//     } else {
//         console.log('Not found');
//     }
//     input.close();
// })

add = (n) => {
    var i = 0;
    if(i<n){
        var data = utility.binarySearch(n,array);
    if(data){
        console.log('Found');
    } else {
        console.log('Not found');
    }
    } else {
        input.question('Enter the number ', (value) => {
            array.push(value);
            i++;
            add();
        })
    }
}