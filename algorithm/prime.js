var utility = require('../utility/utility');
for(var i=2;i<=1000;i++){
    var results = utility.isPrime(i);
    if(results){
        console.log(i);
    }
}
    
// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });