var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the Nth harmonic value ',(N)=>{
    //console.log(N);
    var results = utility.harmonic(N);
    console.log(results);
    
    input.close();
})