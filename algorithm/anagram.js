var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the string ', (data) => {
    utility.isAnagram(data);
    input.close();
})