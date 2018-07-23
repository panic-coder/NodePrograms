var utility = require('../utility/utility.js');
var value = process.argv[2];
if(value>=0 && value<31){
    var result = utility.powerOfTwo(value);
    console.log(result);
} else{
    console.log('please Enter " 0 >= number < 31 "');
    
}





