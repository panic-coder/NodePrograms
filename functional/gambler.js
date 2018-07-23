var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter cash ',(cash) => {
    input.question('Enter stake ',(stake) => {
        input.question('Enter goals ',(goals) => {
            input.question('Enter trails ',(trails) => {
                utility.gambler(cash,stake,goals,trails);
                input.close();
            })
        })
    })
})
// var utility = require('../utility/utility');
// var input = utility.userInput();
// var i = 0;

// input.question("What is your name?", (name) =>{
//     console.log("Hi " + name + ", nice to meet you.");
//     while(i<5){
//     deepak();
//     i++;

//     }

// })

// function deepak() {    
// input.question("enter the number", (name) =>{
//     console.log("number is " + name);

// })
// }
