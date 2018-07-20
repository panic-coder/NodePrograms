var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter total number of coupons ', (totalCoupons) => {
    var numbers = utility.coupon(totalCoupons);
    console.log(numbers);
    input.close();
})