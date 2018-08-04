/**
 * Purpose   : Full object oriented inventary management system.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 30-07-2018
 */
var fs = require('fs');
var Inventary = require('./model.js');
var data = new Inventary();
var utility = require('/home/bridgelabz/Shubham/NodePrograms/utility/utility.js');
var input = utility.userInput();

var array=[];
var obj = JSON.parse(fs.readFileSync('./inventory_output.json', 'utf8'));
obj.forEach(elements => {
    data = new Inventary()
    data.setInventaryName(elements.name);
    data.setInventaryPrice(elements.price);
    data.setInventaryWeight(elements.weight);
    console.log(data);
    
    array.push(data);
    
});
console.log(array);

/**
 * @description Menu for inventary
 */
menu = () => {
    input.question('1. Insert new products\n2. Edit existing products\n3. Delete \n4. Save \n5. Exit ', (choice) => {
        if (choice == '1') {
            data = new Inventary();
            input.question('Enter the product name ', (name) => {
                input.question('Enter the price ', (price) => {
                    input.question('Enter the weight ', (weight) => {
                        data.setInventaryName(name);
                        data.setInventaryPrice(price);
                        data.setInventaryWeight(weight);
                        array.push(data);
                        menu();
                    })
                })
            })
        } else if (choice == '2') {
            array.forEach(element => {
                element.toString();
                
            });
            input.question('Enter the name of article to edit ', (editName) => {
                var count = 0;
                array.forEach(element => {
                    if(element.name == editName){
                        count++;
                    }
                });
                if (count > 0) {
                    input.question('1. Price\n2. Weight\n3. Exit ', (attribute) => {
                        if (attribute == '1') {
                            input.question('Enter the new price ',(newPrice) => {
                                array.forEach(element => {
                                    if (element.name == editName) {
                                        element.getInventaryPrice();
                                        element.setInventaryPrice(newPrice);
                                        console.log('Success');
                                        menu();
                                    }
                                })
                            });
                            
                        } else if (attribute == '2') {
                            input.question('Enter the new weight ',(newWeight) => {
                                array.forEach(element => {
                                    if (element.name == editName) {
                                        element.setInventaryWeight(newWeight);
                                        console.log('Success');
                                        menu();
                                    }
                            })
                            });
                        } else if (attribute == '3') {
                            console.log('Closing');
                            menu();
                        } else {
                            console.log("Data entered doesn't exists");
                            menu();
                        }
                    })
                    
                } else {
                    console.log("\nData entered doesn't exists\n");
                    menu();
                }
                menu();
            })
        } else if (choice == '3') {
            array.forEach(element => {
                element.toString();
            });
            input.question('Enter the name of article to delete ', (deleteName) => {
                for(var i=0;i<array.length;i++){
                    if(array[i].name == deleteName){
                        array.splice(i,1);
                    }
                }
                console.log(array);
                menu();
            })
        } else if (choice == '4') {
            console.log('save');
            var json = JSON.stringify(array);
            fs.writeFile('./inventory_output.json', json, function (err) {
                if (err) throw err;
                console.log('complete');
            });

            menu();
        } else if (choice == '5') {
            console.log('Closing');
            input.close()
            process.exit();
        } else {
            console.log('Something went wrong !');
            input.close();
            process.exit();
        }
    })
}

menu();
