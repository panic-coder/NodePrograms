/**
 * Purpose   : Maintaining bank queue using user defined linked list queue.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 28-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
var queue = require('../data_structure/queue_linkedlist');
var bankcash = 1000000;
input.question('Enter the number of people ', (numberOfPeople) => {
    for(var i=1;i<=numberOfPeople;i++){
        queue.push(i);
    }
    queue.display();
    bankQueue();
})

/**
 * @description Performing withdwral and deposit operation
 */
bankQueue = () => {
    if (queue.isEmpty()) {
        console.log('End of Queue ');
        input.close();
        process.exit();
        return;
    }
    queue.pop();
    input.question(`Enter 1 for Withdrawl\nEnter 2 for Deposit `, (choice) => {
        if (choice == '1') {
            console.log('Bank Cash : ', bankcash);
            input.question('Enter amount you want to withdraw ', (withdrawlAmount) => {
                if (bankcash >= withdrawlAmount) {
                    bankcash = bankcash - withdrawlAmount;
                    console.log('Bank Cash : ', bankcash);
                    bankQueue();
                } else {
                    console.log('Visit again later');
                }
            })
        } else if (choice == '2') {
            input.question('Enter amount you want to deposit ', (depositAmount) => {
                bankcash = bankcash + Number(depositAmount);
                console.log('Bank Cash : ', bankcash);
                bankQueue();
            })
        }
    });
}
