var utility = require('../utility/utility');
var queue = require('/home/bridgelabz/Shubham/NodePrograms/data_structure/queue_linkedlist.js');
var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var names = ["Clubs", "Diamonds", "Hearts", "Spades"];
var deck = utility.shuffle();
var deckAllign = [];

var str = '';
for (var i = 0; i < 4 * 9; i++) {
    if (deck[i] >= 0 && deck[i] <= 12)
        str = str + (names[0] + "[" + cards[deck[i]] + "]\t");
    else if (deck[i] >= 13 && deck[i] <= 25)
        str = str + (names[1] + "[" + cards[(deck[i]) % 13] + "]\t");
    else if (deck[i] >= 26 && deck[i] <= 38)
        str = str + (names[2] + "[" + cards[(deck[i]) % 13] + "]\t");
    else if (deck[i] >= 39 && deck[i] <= 51)
        str = str + (names[3] + "[" + cards[(deck[i]) % 13] + "]\t");
    if ((i + Number(1)) % Number(9) == 0) {
        deckAllign.push(str);
        str = '';
    }
}
console.log('Unsorted');

for (var i = 0; i < deckAllign.length; i++) {
    console.log(deckAllign[i]);

}

console.log();
console.log('Sorted');


var deckArranged = utility.sort(deck);

deck = [];
deck = deckArranged;
str = '';
deckAllign = [];
for (var i = 0; i < 4 * 9; i++) {
    if (deck[i] >= 0 && deck[i] <= 12)
        str = str + (names[0] + "[" + cards[deck[i]] + "]\t");
    else if (deck[i] >= 13 && deck[i] <= 25)
        str = str + (names[1] + "[" + cards[(deck[i]) % 13] + "]\t");
    else if (deck[i] >= 26 && deck[i] <= 38)
        str = str + (names[2] + "[" + cards[(deck[i]) % 13] + "]\t");
    else if (deck[i] >= 39 && deck[i] <= 51)
        str = str + (names[3] + "[" + cards[(deck[i]) % 13] + "]\t");
    if ((i + Number(1)) % Number(9) == 0) {
        deckAllign.push(str);
        str = '';
    }
}

for (var i = 0; i < deckAllign.length; i++) {
    queue.push(deckAllign[i]);
}

queue.display();

