/**
 * Purpose   : Binary Search, Insertion sort and Bubble sort.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 24-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
var array = [];
input.question('Enter the size of array ',(n) => {
    input.question('Enter 1 for Binary Search\n2 for Insertion Sort\n3 for Bubble Sort ',(choice) => {
        console.log(choice);
        switch (choice) {
            case '1':
                addBinary(n);
                break;
            case '2':
                addInsertion(n);
                break;
            case '3':
                addBubble(n);
                break;
            default:
                console.log('Wrong Choice');
                input.close();
        }
    })
})

var i = 0;
/**
 * @description Binary Search
 */
addBinary = (n) => {
    if(i>n-1){
        console.log(array);
        input.question('Data to be searched ',(search) =>{
            var data = utility.binarySearch(search,array);
            console.log(data);
            if(data){
                console.log('Found');
            } else {
                console.log('Not found');
            }
            input.close();
        })
    } else {
        i++;
        input.question('Enter the value ', (value) => {
            array.push(value);
            addBinary(n);
        })
    }
}

/**
 * @description Insertion Sort
 */
addInsertion = (n) => {
    if(i>n-1){
        console.log(array);
        var data = utility.insertion(array);
        console.log(data);
        input.close();
    } else {
        i++;
        input.question('Enter the value ', (value) => {
            array.push(value);
            addInsertion(n);
        })
    }
}

/**
 * @description Bubble Sort
 */
addBubble = (n) => {
    if(i>n-1){
        console.log(array);
        var data = utility.bubble(array);
        console.log(data);
        input.close();
    } else {
        i++;
        input.question('Enter the value ', (value) => {
            array.push(value);
            addBubble(n);
        })
    }
}


