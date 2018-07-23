var utility = require('../utility/utility');
var primeArray = [];
for(var i=2;i<=1000;i++){
    var results = utility.isPrime(i);
    if(results == true){
        primeArray.push(i);
    }
}
// for(var i=0;i<primeArray.length;i++){
//     console.log(primeArray[i]);
// }
utility.isPrimeAnagram(primeArray);