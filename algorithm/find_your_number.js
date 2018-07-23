var utility = require('../utility/utility');
var input = utility.userInput();
var array = [];
input.question('Enter the size ', (n) => {
    var lastValue = utility.powerOfTwo(n);
    findingYourNumber(0, lastValue);
    //input.close();

})
findingYourNumber = (firstValue, lastValue) => {

    var first = firstValue;
    var last = lastValue;
    if (first == last) {
        console.log('Your Number is: ' + first);
        //input.close();
        // debuggere();
        return;
    }
    var mid = parseInt((Number(first) + Number(last)) / 2);
    input = utility.userInput();
    input.question(`Enter true for : ${first}-${mid} : \nEnter false for : ${mid+1}-${last} : \n`, (number) => {
        if (number == 'true') {
            findingYourNumber(first, mid);
        } else if (number == 'false')
            findingYourNumber(Number(mid + 1), last);
    });

}