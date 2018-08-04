/**
 * Purpose   : Finding prime numbers that are anagram.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 24-07-2018
 */
var utility = require('../utility/utility');
var primeArray = [];
for(var i=2;i<=1000;i++){
    var results = utility.isPrime(i);
    if(results == true){
        primeArray.push(i);
    }
}

var output = utility.isPrimeAnagram(primeArray);
for(var i=0;i<output.length;i++){
    console.log(output[i]);
}