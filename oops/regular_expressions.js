/**
 * Purpose   : Replacing a string values via user input values after validating it.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 30-07-2018
 */
var string = 'Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.'; 
var utility = require('../utility/utility');
var input = utility.userInput();
var reText = /[A-Z]\w/;
var reNumber =  /^\d{10}$/;
input.question('Enter the first name ', (firstName) => {
    input.question('Enter the last name ', (lastName) => {
        input.question('Enter the phone number ', (phoneNumber) => {
            resultFirstName = reText.test(firstName);
            resultLastName = reText.test(lastName);
            resultPhone = reNumber.test(phoneNumber);
            if(resultFirstName && resultLastName && resultPhone){
                utility.regex(firstName,lastName,phoneNumber,string);
            }else{
                console.log('Enter valid details');
            }
            input.close();
        })
    })
})