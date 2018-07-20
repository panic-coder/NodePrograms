var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the 1st string ', (data1) => {
    input.question('Enter the 2nd string ',(data2) => {
        
        if (utility.isAnagram(data1,data2)) {
            console.log('Anagram');
        } else {
            console.log('Not Anagram');
        }
        input.close();
    })
})