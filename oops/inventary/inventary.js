var Inventary = require('./model.js');
var data = new Inventary();
var utility = require('/home/bridgelabz/Shubham/NodePrograms/utility/utility.js');
var input = utility.userInput();
var array = [];

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
                console.log(editName);
                menu();
            })
        } else if (choice == '3') {
            array.forEach(element => {
                element.toString();
            });
            input.question('Enter the name of article to delete ', (deleteName) => {
                console.log(deleteName);
                menu();
            })
        } else if (choice == '4') {
            console.log('save');
            var json = JSON.stringify({
                "Total_Price": totalPrice,
                "Total_Weight": totalWeight
            });
            fs.writeFile('./json/inventory_output.json', json, function (err) {
                if (err) throw err;
                console.log('complete');
            });

            menu();
        } else if (choice == '5') {
            console.log('Exit');
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

// data.setInventaryName('wheat');
// data.setInventaryPrice(100) ;
// data.setInventaryWeight(50) ;
// array = [];
// array.push(data);
// data = new Inventary();
// data.setInventaryName('rice');
// data.setInventaryPrice(70) ;
// data.setInventaryWeight(50) ;
// array.push(data)

// array.forEach(element => {
//     element.toString();
// });