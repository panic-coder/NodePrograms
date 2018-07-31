var utility = require('/home/bridgelabz/Shubham/NodePrograms/utility/utility.js');
var Company = require('./model_company');
var Customer = require('./model_customer');
var Transaction = require('./model_transaction');
var glob = require('glob');
var input = utility.userInput();
var companyArray = [];
var customerArray = [];
var transactionArray = [];
var filesArray = [];
var company = new Company();
var customer = new Customer();
var transaction = new Transaction();

menu = () => {
    input.question('1. Create Account\n2. Open Existing Account\n3. Add & Remove Company\n4. Exit ', (choice) => {
        if(choice == '1'){
            var count = 0;
            console.log();
            input.question('Enter the name for new account ', (newAccountName) => {
                filesArray.forEach(element => {
                    if(element == newAccountName+'.json'){
                        count++;
                    }
                });
                if(count == 0){
                    utility.write('./'+newAccountName+'.json', customerArray);
                    menu();
                } else {
                    console.log('Customer with name '+newAccountName+' already exists\nEnter different name');
                    menu();
                }
                
            })

        }else if(choice == '2'){
            input.question('Enter the name of your existig account ', (accountName) => {
                var existigAccountCount = 0;
                filesArray.forEach(element => {
                    if(element == accountName+'.json' && element != 'company.json' && element != 'transaction.json'){
                        existigAccountCount++;
                    }
                });
                if(existigAccountCount == 0){
                    accountMenu();    
                } else{
                    console.log("Account doesn't exists");
                    menu();
                }
                
            })
        }else if(choice == '3'){
            console.log('Add & Remove company');
        }else if(choice == '4'){
            console.log('Exit');
        }else{
            console.log('Something went wrong!\nSystem Closed');
            input.close();
            process.exit();
        }
    })
}

accountMenu = () => {
    input.question('1. Add amount\n2. Buy Shares\n3. Sell Shares\n4. Save Account\n5. Print Report\n6. Exit ', (accountChoice) => {
        if(accountChoice == '1'){
            customer = new Customer();
            input.question('Enter the amount ', (amount) => {
                customer.setAmount(Number(amount));
                accountMenu();
            })
            
        }else if(accountChoice == '2'){
            var customerAmount = 0;
            input.question('Enter the symbol ', (symbol) => {
                input.question('Enter the amount ', (amount) => {
                    companyArray.forEach(element => {
                        if(element.symbol == symbol){
                            customerArray.forEach(element => {
                                customerAmount = element.getAmount();
                            });
                            if(customerAmount >= amount){
                                
                            }
                        }
                    });
                })
            })
        }else if(accountChoice == '3'){

        }else if(accountChoice == '4'){

        }else if(accountChoice == '5'){

        }else if(accountChoice == '6'){

        }else{
            console.log('Something went wrong!/nSystem Closed');
            input.close();
            process.close();
        }
    })
}

checkingFiles = () => {
    glob("*.json", function (err, files) {
        if (err) {
            console.log("cannot read the folder, something goes wrong with glob", err);
        }
        files.forEach(files => {
            filesArray.push(files);
        })
    })
}

checkingFiles();

menu();
