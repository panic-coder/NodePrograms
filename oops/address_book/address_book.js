var glob = require("glob");
var fs = require("fs");
var Person = require('./model_person');
var Address = require('./model_address');
var utility = require('/home/bridgelabz/Shubham/NodePrograms/utility/utility.js');
var person = new Person();
var address = new Address();
var input = utility.userInput();
array = [];
filesArray = [];
var addressBookCount = 0;
menu = () => {
    input.question('1. New Address Book\n2. Open existing Address Book\n3. Save\n4. Save as\n5. Exit ', (choice) => {
        if (choice == '1') {
            console.log('New Address Book');
            menu();
        } else if (choice == '2') {
            checkingFiles();
            input.question('Enter the name of the address book ', (addressBookName) => {
                addressBookCount = 0;
                filesArray.forEach(element => {
                    if(element == addressBookName){
                        addressBookCount++;
                    }
                });
                if (addressBookCount > 0) {
                    innerMenu();
                }
            })
            menu();
        }else if(choice == '3'){

        }else if(choice == '4'){
            
        }
         else if (choice == '5') {
            console.log('Closing');
            input.close();
            process.exit();
        } else {
            console.log('Something went wrong !');
            input.close();
            process.exit();
        }
    })

}
checkingFiles = () => {
    glob("*.json", function (err, files) { // read the folder or folders if you want: example json/**/*.json
        if (err) {
            console.log("cannot read the folder, something goes wrong with glob", err);
        }
        var matters = [];
        console.log('Existing address books');
        files.forEach(files => {
            console.log(files);
            filesArray.push(files);
        })
    })
}

innerMenu = () => {
    person = new Person();
    address = new Address();
    input.question('Enter first name ', (firstName) => {
        input.question('Enter last name ', (lastName) => {
            input.question('Enter city ', (city) => {
                input.question('Enter state ', (state) => {
                    input.question('Enter zip ', (zip) => {
                        input.question('Enter phone number ', (phoneNumber) => {
                            person.setFirstName(firstName);
                            person.setLastName(lastName);
                            person.setPhoneNumber(phoneNumber);
                            address.setCity(city);
                            address.setState(state);
                            address.setZip(zip);
                            person.setAddress(address);
                            array.push(address);
                            //console.log(JSON.stringify(person));
                            console.log(person.toString());

                        })
                    })
                })
            })
        })
    })
}
menu();
// var _inArray = function(needle, haystack) {
//   for(var k in haystack) {
//     if(haystack[k] === needle) {
//       return true;
//     }
//   }
//   return false;
// }

// glob("*.json", function(err, files) { // read the folder or folders if you want: example json/**/*.json
//   if(err) {
//     console.log("cannot read the folder, something goes wrong with glob", err);
//   }
//   var matters = [];
//   files.forEach(files => {
//     console.log(files);
//   }) 


// fs.readFile(file, 'utf8', function (err, data) { // Read each file
//   if(err) {
//     console.log("cannot read the file, something goes wrong with the file", err);
//   }
//   var obj = JSON.parse(data);
//   obj.action.forEach(function(crud) {
//     for(var k in crud) {
//       if(_inArray(crud[k].providedAction, matters)) {
//         // do your magic HERE
//         console.log("duplicate founded!");
//         // you want to return here and cut the flow, there is no point in keep reading files.
//         break;
//       }
//       matters.push(crud[k].providedAction);
//     }
//   })
// });

//});