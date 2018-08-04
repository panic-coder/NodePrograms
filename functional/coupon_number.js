/**
 * Purpose   : Finding distinct coupon numbers
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 22-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter total number of coupons ', (totalCoupons) => {
    var numbers = utility.coupon(totalCoupons);
    console.log(numbers);
    input.close();
})