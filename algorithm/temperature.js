/**
 * Purpose   : Calculating temperature from celsius to fahrenheit or fahrenheit to celsius.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 25-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question(`Enter 1 for Celsius to Fahrenheit\nEnter 2 for Fahrenheit to Celsius `, (choice) => {
    switch(choice){
        case '1':
            input.question('Enter the temperature in Celsius ', (temp) => {
                console.log(`${temp}C = ` + utility.toFahrenheit(temp) + `F`);
                input.close();
            })
            break;
        case '2':
            input.question('Enter the temperature in Fahrenheit ', (temp) => {
                console.log(`${temp}F = `+ utility.toCelsius(temp) + `C`);
                input.close();
            })
            break;
        default:
            console.log('Wrong Choice');
            input.close();
            break;
            
    }
})