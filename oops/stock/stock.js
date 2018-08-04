/**
 * Purpose   : Stock Management System creating account, buy, sell shares, saving data in json file.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 02-08-2018
 */
var utility = require('/home/bridgelabz/Shubham/NodePrograms/utility/utility.js');
var Company = require('./model_company');
var Customer = require('./model_customer');
var Transaction = require('./model_transaction');
var glob = require('glob');
var linkedlist = require('/home/bridgelabz/Shubham/NodePrograms/data_structure/linkedlist.js');
var stack = require('/home/bridgelabz/Shubham/NodePrograms/data_structure/stack_linkedlist.js');
var queue = require('/home/bridgelabz/Shubham/NodePrograms/data_structure/queue_linkedlist.js')
var input = utility.userInput();
var companyArray = [];
var customerArray = [];
var transactionArray = [];
var filesArray = [];
var company = new Company();
var customer = new Customer();
var transaction = new Transaction();
var name = '';

/**
 * @description Main menu of stock.
 */
menu = () => {
    input.question('1. Create Account\n2. Open Existing Account\n3. Add & Remove Company\n4. Exit ', (choice) => {
        if (choice == '1') {
            var count = 0;
            console.log();
            input.question('Enter the name for new account ', (newAccountName) => {
                filesArray.forEach(element => {
                    if (element == newAccountName + '.json') {
                        count++;
                    }
                });
                if (count == 0) {
                    utility.write('./' + newAccountName + '.json', customerArray);
                    menu();
                } else {
                    console.log('Customer with name ' + newAccountName + ' already exists\nEnter different name');
                    menu();
                }

            })

        } else if (choice == '2') {
            input.question('Enter the name of your existig account ', (accountName) => {
                var existigAccountCount = 0;
                console.log(accountName);

                filesArray.forEach(element => {
                    console.log(element);

                    if (element == accountName + '.json' && element != 'company.json' && element != 'transaction.json') {
                        existigAccountCount++;
                    }
                });
                if (existigAccountCount > 0) {
                    name = accountName;
                    readCustomer();
                    accountMenu();
                } else {
                    console.log("Account doesn't exists");
                    menu();
                }

            })
        } else if (choice == '3') {
            addRemoveMenu = () => {
                input.question('1. Add\n2. Remove\n3. Save\n4. Exit ', (companyChoice) => {
                    if (companyChoice == '1') {
                        companyArray.forEach(element => {
                            linkedlist.add(element);
                        });
                        input.question('Enter symbol ', (symbol) => {
                            input.question('Enter price per share ', (price) => {
                                input.question('Enter total shares ', (shares) => {
                                    company = new Company(symbol, Number(price), Number(shares));
                                    linkedlist.add(company);
                                    companyArray.push(company);
                                    linkedlist.display();
                                    addRemoveMenu();
                                })
                            })
                        })
                    } else if (companyChoice == '2') {
                        input.question('Enter the symbol you want to delete ', (symbol) => {
                            companyArray.forEach(element => {
                                if (element.getSymbol() == symbol) {
                                    companyArray.pop(element);
                                    console.log(companyArray);
                                    addRemoveMenu()
                                }
                            })
                        })
                    } else if (companyChoice == '3') {
                        utility.write('./company.json', companyArray);
                        addRemoveMenu();
                    } else if (companyChoice == '4') {
                        console.log('Closing company Add & Remove Menu');
                        menu();
                    } else {
                        console.log('Something went wrong!\nClosing company Add & Remove Menu');
                        menu();
                    }
                });
            }
            addRemoveMenu();

        } else if (choice == '4') {
            console.log('Closing System');
            input.close();
            process.exit();
        } else {
            console.log('Something went wrong!\nSystem Closed');
            input.close();
            process.exit();
        }
    })
}

/**
 * @description Menu after opening existing account.
 */
accountMenu = () => {
    input.question('1. Add amount\n2. Buy Shares\n3. Sell Shares\n4. Save Account\n5. Print Report\n6. Exit ', (accountChoice) => {
        if (accountChoice == '1') {
            customer = new Customer();
            input.question('Enter the amount ', (amount) => {
                customer.setAmount(Number(amount));
                customer.setShares('');
                customer.setSymbol('');
                customerArray.push(customer);
                accountMenu();
            })

        } else if (accountChoice == '2') {
            var customerAmount = 0;
            input.question('Enter the symbol ', (symbol) => {
                input.question('Enter the amount ', (amount) => {
                    companyArray.forEach(companyElement => {
                        if (companyElement.symbol == symbol) {
                            var price = companyElement.getPricePerShare();
                            console.log('price ' + price);

                            customerArray.forEach(custommerElement => {
                                customerAmount = custommerElement.getAmount();
                            });
                            var count = 0;
                            if (customerAmount >= amount) {
                                customerArray.forEach(customElements => {
                                    if (customElements.getSymbol() == symbol) {
                                        count++;
                                        customElements.setShares(customElements.getShares() + Number(amount / price));
                                        customElements.setAmount(customElements.getAmount() - amount);
                                    }
                                })
                                if (count == 0) {
                                    customer = new Customer();
                                    customer.setSymbol(symbol);
                                    customer.setShares(amount / price);
                                    customer.setAmount(customerAmount - amount);
                                    customerArray.push(customer);

                                }
                                companyElement.setTotalShares(companyElement.getTotalShares() - Number(amount / price));
                                var date = new Date();
                                transaction = new Transaction('BUY', name, symbol, date);
                                queue.push(transaction);
                                transactionArray.push(transaction);
                                queue.pop();
                                accountMenu();
                            }
                        }
                    });
                    console.log('Symbol not found');
                    accountMenu();
                })
            })
        } else if (accountChoice == '3') {
            input.question('Enter the symbol ', (symbol) => {
                input.question('Enter the amount ', (amount) => {
                    customerArray.forEach(customerElement => {
                        if (customerElement.getSymbol() == symbol) {
                            companyArray.forEach(companyElement => {
                                if (companyElement.getSymbol() == symbol) {
                                    companyElement.setTotalShares(companyElement.getTotalShares() + (amount / companyElement.getPricePerShare()));
                                    customerElement.setAmount(customerElement.getAmount() + Number(amount));
                                    customerElement.setShares(customerElement.getShares() - (amount / companyElement.getPricePerShare()));
                                    var date = new Date();
                                    transaction = new Transaction('SELL', name, symbol, date);
                                    queue.push(transaction);
                                    transactionArray.push(transaction);
                                    queue.pop();
                                    accountMenu();
                                }
                            })
                        }
                    });
                })
            })

        } else if (accountChoice == '4') {
            utility.write('./company.json', companyArray);
            utility.write('./transaction.json', transactionArray);
            utility.write('./' + name + '.json', customerArray);
            accountMenu();
        } else if (accountChoice == '5') {
            report = () => {
                input.question('1. Customer Report\n2. Company Report\n3. Transaction Report\n4. Exit ', (reportChoice) => {
                    if (reportChoice == '1') {
                        var amount
                        customerArray.forEach(element => {
                            if (element.getSymbol() != '') {
                                console.log(element.toString());
                            }
                            amount = element.getAmount();
                        });
                        console.log(amount);

                    } else if (reportChoice == '2') {
                        companyArray.forEach(element => {
                            console.log(element.toString());
                        });
                    } else if (reportChoice == '3') {
                        transactionArray.forEach(element => {
                            stack.push(element.toString());
                        });
                        stack.display();
                    } else if (accountChoice == '4') {
                        console.log('Closing Report Menu');
                        accountMenu();
                    } else {
                        console.log('Something went wrong!\nClosing Report Menu');
                        accountMenu();
                    }
                    report();
                })
            }
            report();
        } else if (accountChoice == '6') {
            console.log('Closing User Menu');
            menu();
        } else {
            console.log('Something went wrong!/nSystem Closed');
            input.close();
            process.close();
        }
    })
}

/**
 * @description reading the json files.
 */
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

/**
 * @description reading company data from json file.
 */
readCompany = () => {
    var obj = utility.read('./company.json');
    obj.forEach(element => {
        company = new Company(element.symbol, element.pricePerShare, element.totalShares);
        companyArray.push(company);
    })
}

/**
 * @description reading customer data from json file.
 */
readCustomer = () => {
    var obj = utility.read('./' + name + '.json');
    obj.forEach(element => {
        customer = new Customer(element.symbol, element.amount, element.shares);
        customerArray.push(customer);
    })
}

/**
 * @description reading transaction data from json file.
 */
readTransaction = () => {
    var obj = utility.read('./transaction.json');
    obj.forEach(element => {
        transaction = new Transaction(element.buySell, element.name, element.symbol, element.date);
        transactionArray.push(transaction);
    })
}

readCompany();

readTransaction();

checkingFiles();

menu();