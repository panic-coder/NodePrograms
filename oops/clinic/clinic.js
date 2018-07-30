var utility = require('/home/bridgelabz/Shubham/NodePrograms/utility/utility.js');
var Patient = require('./model_patient');
var Doctor = require('./model_doctor');
var Appointment = require('./model_appointment');
var patient = new Patient();
var doctor = new Doctor();
var appointment = new Appointment();
var input = utility.userInput();
menu = () => {
    input.question('1. Add new entries\n2. Take appointment\n3. Display\n4. Save\n5. Exit', (choice) => {
        if(choice == '1'){
            console.log('Add');
        } else if(choice == '2'){
            console.log('take appointment');
        } else if(choice == '3'){
            console.log('Display');
        } else if(choice == '4'){
            console.log('Save');
        } else if(choice == '5'){
            
        }
    })
}