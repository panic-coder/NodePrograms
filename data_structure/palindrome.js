var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the data for palindrome check ', (data) => {
    var output = utility.dequePalindrome(data);
    if(output){
        console.log('Palindrome');
    }else{
        console.log('Not Palindrome');
    }
    input.close();
})