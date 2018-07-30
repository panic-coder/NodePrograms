var readline = require('readline');
var prompt = require('prompt');
var utility = require('../utility/utility');
var fs = require('fs');
var queue = require('../data_structure/queue_linkedlist');
var stack = require('../data_structure/stack_linkedlist');
var stackCalender = require('../data_structure/stack_linkedlist_calendar');

exports.stringReplace = function (string, username) {
    return string.replace("<<UserName>>", username);
}

exports.userInput = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
}

exports.random = () => {
    return Math.random();
}

exports.leap = (year) => {
    if (year % 100 != 0 && year % 4 == 0) {
        return true;
    } else if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

exports.powerOfTwo = (number) => {
    var results = 1;
    sum = 0;
    for (var i = 0; i < number; i++) {
        results = results * 2;
    }
    return results;
}

exports.harmonic = (N) => {
    sum = 0;
    for (var i = 1; i <= N; i++) {
        sum = sum + 1 / i;
    }
    return sum;
}

exports.factors = (value) => {
    var i = 2;
    var calculatingValue = value;
    while (i <= value) {
        if (calculatingValue % i == 0) {
            console.log(i);
            calculatingValue = calculatingValue / i;
        } else if (calculatingValue % i != 0) {
            i++;
        }
    }
}

exports.gambler = (cash, stake, goals, trails) => {
    var won = 0,
        bets = 0,
        loss = 0;
    var current;

    while (trails > 0 && goals > cash && cash > 0) {
        bets++;
        current = Math.floor(Math.random() * 2);
        console.log(current);

        if (current === 1) {
            cash = Number(cash) + Number(stake);
            won++;
        } else {
            cash = Number(cash) - Number(stake);
            loss++;
        }
        trails--;
    }
    console.log('Win % = ', (won / bets) * 100);
    console.log('Loss % = ', (loss / bets) * 100);
}

exports.coupon = (totalCoupons) => {
    var unique = [totalCoupons];
    var number;
    for (var i = 0; i < totalCoupons; i++) {
        random = (Math.floor(Math.random() * totalCoupons)) + 1;
        if (i == 0) {
            unique[i] = random;
        } else {
            var loop = 0;
            var count = 0;
            while (loop == 0) {
                random = (Math.floor(Math.random() * totalCoupons)) + 1;
                for (var j = 0; j < totalCoupons; j++) {
                    if (unique[j] == random) {
                        count++;
                    }
                }

                if (count == 0) {
                    unique[i] = random;
                    loop = 1;
                }
                count = 0;
            }
        }
    }
    return unique;
}

exports.array = (m, n) => {
    var arr = [
        [1, 2],
        [3, 4]
    ];

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            console.log(arr[i][j]);
        }
    }
}

exports.triplets = (array) => {
    var count = 0;
    for (var k = 0; k < array.length; k++) {
        for (var j = k + 1; j < array.length; j++) {
            for (var i = j + 1; i < array.length; i++) {
                if (Number(array[k]) + Number(array[j]) + Number(array[i]) == 0) {
                    count++;
                    console.log(array[k] + " " + array[j] + " " + array[i]);
                }
            }
        }
    }
    return count;
}


exports.distance = (x, y) => {
    return Math.sqrt(x * x + y * y);
}

exports.permutator = (inputArr) => {

    let result = [];

    const permute = (array, m = []) => {
        if (array.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < array.length; i++) {
                let current = array.slice();
                let next = current.splice(i, 1);
                permute(current.slice(), m.concat(next))
            }
        }
    }
    permute(inputArr)
    return result;
}

exports.quad = (a, b, c) => {
    var delta = (b * b) - (4 * a * c);
    var root1 = (-b + Math.sqrt(delta)) / (2 * a);
    var root2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log('Root 1 =', root1);
    console.log('Root 2 =', root2);
}

exports.chill = (t, v) => {
    var w = 35.74 + (0.6215 * t) + ((0.4275 * t) - (35.75)) * Math.pow(v, 0.16);
    return w;
}

exports.isAnagram = (data1, data2) => {
    var word1 = spaceAndArrange(data1);
    var word2 = spaceAndArrange(data2);
    if (word1 == word2) {
        return true;
    } else {
        return false;
    }
}

spaceAndArrange = (data) => {
    data = data.toString();
    data = data.replace('', '');
    data = data.split('').sort().join('');
    return data
}

exports.isPrime = (data) => {
    var count = 0;
    for (var i = 2; i < data / 2; i++) {
        if (data % i == 0) {
            count++;
        }
    }
    if (count == 0) {
        return true;
    } else {
        return false;
    }
}

exports.isPrimeAnagram = (dataArray) => {
    var anagram = [];
    var count = 0;
    var data;
    for (var i = 0; i < dataArray.length; i++) {
        count = 0;
        for (let j = i + 1; j < dataArray.length - 1; j++) {
            var result = utility.isAnagram(dataArray[i], dataArray[j]);
            if (result) {
                count++;
                data = dataArray[j];
            }
        }
        if (count > 0) {
            anagram.push(dataArray[i]);
            anagram.push(data);
        }
    }
    var anagramUnique = [];
    for (var i = 0; i < anagram.length; i++) {
        var index = anagramUnique.indexOf(anagram[i]);
        if (index == -1) {
            anagramUnique.push(anagram[i]);
        }
    }
    anagramUnique.sort((a, b) => {
        return (a - b)
    });
    return anagramUnique;
}

exports.binarySearch = (search, array) => {
    var start = 0;
    var end = array.length;
    while (start < end) {
        var midp = Math.floor((start + end) / 2);
        if (array[midp] == (search)) {
            return true;
        } else if (array[midp] < search) {
            start = midp + 1;
        } else {
            end = midp;
        }
    }
    return false;
}

exports.insertion = (array) => {
    for (var i = 1; i < array.length; i++) {
        var ne = array[i];
        var j;
        for (j = i; j > 0 && (array[j - 1] > (ne)); j--) {
            array[j] = array[j - 1];
        }
        array[j] = ne;
    }
    return array;
}

exports.bubble = (array) => {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

exports.vendingmachine = (amount) => {

    var notes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    var notesCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < notes.length; i++) {
        if (amount < 0)
            return;
        else if (amount >= notes[i]) {
            notesCount[i] = Math.floor(amount / notes[i]);
            amount = amount % notes[i];
        }
    }
    for (var i = 0; i < notes.length; i++) {
        console.log(`${notes[i]}     notes :   ${notesCount[i]}`);
    }
}

exports.day = (month, day, year) => {
    var calculationMonth, calculationDay, calculationYear;
    calculationYear = (Number(year) - Number(Math.floor((14 - month) / 12)));
    var x = (Number(calculationYear) + Number(Math.floor(calculationYear / 4)) - Number(Math.floor(calculationYear / 100)) + Number(Math.floor(calculationYear / 400)));
    calculationMonth = (Number(month) + Number((12 * Math.floor((14 - month) / 12)) - 2));
    calculationDay = ((Number(day) + Number(x) + Number(Math.floor((31 * calculationMonth) / 12))) % 7);
    return calculationDay;
}

exports.toFahrenheit = (C) => {
    return (Number(C * 9 / 5) + Number(32));
}

exports.toCelsius = (F) => {
    return (Number(F - 32) * Number(5 / 9));
}

exports.payment = (P, Y, R) => {
    var n = 12 * Y;
    console.log(n);

    var r = R / (12 * 100);
    console.log(r);

    var payment = (P * r) / (Number(1) - (Number((Math.pow((1 + r), -n)))));
    return payment;
}

exports.sqrtOfNumber = (c) => {
    var t = 0;
    t = c;
    var epsilon = 1e-15;
    do {
        t = (Number(c / t) + Number(t)) / 2;
    } while ((Math.abs(Number(t) - Number(c / t))) > (epsilon * t));
    console.log(t);
}

exports.toBinary = (num) => {
    var bin = 0;
    var binNumber = '';
    while (num > 0) {
        bin = num % 2;
        num = Math.floor(num / 2);
        binNumber = binNumber + bin;
    }
    binNumber = reverseString(binNumber);
    return binNumber;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

exports.swapNibbles = (binaryInput) => {
    var c = Array.from(binaryInput);
    console.log(c);

    var swapedNibbles = "";
    if (c.length < 8) {
        var count = 8 - c.length;
        while (count > 0) {
            swapedNibbles += "0";
            count--;
        }
    }
    for (var i = 0; i < c.length; i++) {
        swapedNibbles += c[i];
    }
    c = Array.from(swapedNibbles);
    swapedNibbles = "";
    console.log(swapedNibbles);
    for (var i = Math.floor(c.length / 2); i < c.length; i++) {

        swapedNibbles = swapedNibbles + c[i];
    }
    for (var i = 0; i < Math.floor(c.length / 2); i++) {
        swapedNibbles = swapedNibbles + c[i];
    }
    return swapedNibbles;
}

exports.dequePalindrome = (word) => {
    var dq = require('../data_structure/deque');
    var c = Array.from(word);
    for (var i = 0; i < c.length; i++) {
        dq.addFront(c[i]);
    }

    var s = "";
    for (var i = 0; i < c.length; i++) {
        var ch = dq.removeFront();
        s = s + ch.data;
    }
    console.log(s);
    if (s == word)
        return true;
    else
        return false;
}

exports.binarySearchTree = (totalNodes) => {
    var numerator = factorial(2 * totalNodes);
    var denominator = (factorial(Number(totalNodes) + Number(1))) * (factorial(totalNodes));
    var differentTrees = (numerator / denominator);
    return differentTrees;
}

factorial = (i) => {
    var fact = 1;
    while (i > 0) {
        fact = fact * i;
        i--;
    }
    return fact;
}

exports.calender = (month, year) => {

    var year1, month1, x, day = 1,
        day1;
    year1 = (Number(year) - Number(Math.floor((14 - month) / 12)));
    x = Number(year1) + Number(Math.floor(year1 / 4)) - Number(Math.floor(year1 / 100)) + Number(Math.floor(year1 / 400));
    month1 = (Number(month) + Number((12 * Math.floor((14 - month) / 12)) - 2));
    day1 = ((Number(day) + Number(x) + Number(Math.floor((31 * month1) / 12))) % 7);
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var monthDay = 0;
    for (var i = 0; i < monthDays.length; i++) {
        if (i == Number(month) - 1) {
            monthDay = monthDays[i];
        }
    }
    var totalDays = [];
    var leap = leapYear(year);
    if (leap && month == 1) {
        monthDay = 29;
    }
    var z = 1;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if (i == 0 && j < day1) {
                totalDays.push(' ');
            } else if (z <= monthDay) {
                totalDays.push(z);
                z++;
            } else {
                totalDays.push(' ');
            }
        }
    }
    console.log();
    for (var i = 0; i < 12; i++) {
        if (month == Number(i) + 1) {
            console.log(monthName[i] + " " + year);

        }
    }
    var dayName = ["S", "M", "T", "W", "T", "F", "S"];
    var j = 0;
    var k = 1;
    var monthArray = [];
    var value = '';
    for (var i = 0; i < 7; i++) {
        value = value + dayName[i] + '  ';
    }
    monthArray.push(value);
    value = '';

    for (var i = 0; i < 7; i++) {
        value = value + totalDays[i] + '  ';
    }
    monthArray.push(value);
    value = '';
    for (var i = 7; i < 14; i++) {
        if (totalDays[i] < 10) {
            value = value + totalDays[i] + '  ';
        } else {
            value = value + totalDays[i] + ' ';
        }
    }
    monthArray.push(value);
    value = '';
    for (var i = 14; i < 21; i++) {
        if (totalDays[i] < 10) {
            value = value + totalDays[i] + '  ';
        } else {
            value = value + totalDays[i] + ' ';
        }
    }
    monthArray.push(value);
    value = '';
    for (var i = 21; i < 28; i++) {
        value = value + totalDays[i] + ' ';
    }
    monthArray.push(value);
    value = '';
    for (var i = 28; i < 35; i++) {
        value = value + totalDays[i] + ' ';
    }
    monthArray.push(value);
    value = '';
    for (var i = 35; i < 42; i++) {
        value = value + totalDays[i] + ' ';
    }
    monthArray.push(value);
    value = '';
    for (var i = 0; i < monthArray.length; i++) {
        console.log(monthArray[i]);
    }
}

leapYear = (year) => {
    if (year % 100 != 0 && year % 4 == 0) {
        return true;
    } else if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

exports.calenderQueue = (month, year) => {
    var year1, month1, x, day = 1,
        day1;
    year1 = (Number(year) - Number(Math.floor((14 - month) / 12)));
    x = Number(year1) + Number(Math.floor(year1 / 4)) - Number(Math.floor(year1 / 100)) + Number(Math.floor(year1 / 400));
    month1 = (Number(month) + Number((12 * Math.floor((14 - month) / 12)) - 2));
    day1 = ((Number(day) + Number(x) + Number(Math.floor((31 * month1) / 12))) % 7);
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var monthDay = 0;
    for (var i = 0; i < monthDays.length; i++) {
        if (i == Number(month) - 1) {
            monthDay = monthDays[i];
        }
    }
    var totalDays = [];
    var leap = leapYear(year);
    if (leap && month == 1) {
        monthDay = 29;
    }
    var z = 1;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if (i == 0 && j < day1) {
                totalDays.push(' ');
            } else if (z <= monthDay) {
                totalDays.push(z);
                z++;
            } else {
                totalDays.push(' ');
            }
        }
    }
    console.log();
    for (var i = 0; i < 12; i++) {
        if (month == Number(i) + 1) {
            console.log(monthName[i] + " " + year);

        }
    }
    var dayName = ["S", "M", "T", "W", "T", "F", "S"];
    var j = 0;
    var k = 1;
    var monthArray = [];
    var value = '';
    for (var i = 0; i < 7; i++) {
        value = value + dayName[i] + '  ';
    }
    queue.push(value);
    value = '';

    for (var i = 0; i < 7; i++) {
        value = value + totalDays[i] + '  ';
    }
    queue.push(value);
    value = '';
    for (var i = 7; i < 14; i++) {
        if (totalDays[i] < 10) {
            value = value + totalDays[i] + '  ';
        } else {
            value = value + totalDays[i] + ' ';
        }
    }
    queue.push(value);
    value = '';
    for (var i = 14; i < 21; i++) {
        if (totalDays[i] < 10) {
            value = value + totalDays[i] + '  ';
        } else {
            value = value + totalDays[i] + ' ';
        }
    }
    queue.push(value);
    value = '';
    for (var i = 21; i < 28; i++) {
        value = value + totalDays[i] + ' ';
    }
    queue.push(value);
    value = '';
    for (var i = 28; i < 35; i++) {
        value = value + totalDays[i] + ' ';
    }
    queue.push(value);
    value = '';
    for (var i = 35; i < 42; i++) {
        value = value + totalDays[i] + ' ';
    }
    queue.push(value);
    value = '';
    queue.display();
}

exports.calenderStack = (month, year) => {
    var year1, month1, x, day = 1,
        day1;
    year1 = (Number(year) - Number(Math.floor((14 - month) / 12)));
    x = Number(year1) + Number(Math.floor(year1 / 4)) - Number(Math.floor(year1 / 100)) + Number(Math.floor(year1 / 400));
    month1 = (Number(month) + Number((12 * Math.floor((14 - month) / 12)) - 2));
    day1 = ((Number(day) + Number(x) + Number(Math.floor((31 * month1) / 12))) % 7);
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var monthDay = 0;
    for (var i = 0; i < monthDays.length; i++) {
        if (i == Number(month) - 1) {
            monthDay = monthDays[i];
        }
    }
    var totalDays = [];
    var leap = leapYear(year);
    if (leap && month == 1) {
        monthDay = 29;
    }
    var z = 1;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if (i == 0 && j < day1) {
                totalDays.push(' ');
            } else if (z <= monthDay) {
                totalDays.push(z);
                z++;
            } else {
                totalDays.push(' ');
            }
        }
    }
    for (let i = 0; i < totalDays.length; i++) {
        stack.push(totalDays[i]);
    }
    while (!stack.isEmpty()) {
        stackCalender.push(stack.pop());
    }
    totalDays = [];
    while (!stackCalender.isEmpty()) {
        totalDays.push(stackCalender.pop());
    }
    console.log();

    for (var i = 0; i < 12; i++) {
        if (month == Number(i) + 1) {
            console.log(monthName[i] + " " + year);
        }
    }

    var dayName = ["S", "M", "T", "W", "T", "F", "S"];
    var monthArray = [];
    var value = '';
    for (var i = 0; i < 7; i++) {
        value = value + dayName[i] + '  ';
    }
    monthArray.push(value);
    value = '';

    for (var i = 0; i < 7; i++) {
        value = value + totalDays[i] + '  ';
    }
    monthArray.push(value);
    value = '';
    for (var i = 7; i < 14; i++) {
        if (totalDays[i] < 10) {
            value = value + totalDays[i] + '  ';
        } else {
            value = value + totalDays[i] + ' ';
        }
    }
    monthArray.push(value);
    value = '';
    for (var i = 14; i < 21; i++) {
        if (totalDays[i] < 10) {
            value = value + totalDays[i] + '  ';
        } else {
            value = value + totalDays[i] + ' ';
        }
    }
    monthArray.push(value);
    value = '';
    for (var i = 21; i < 28; i++) {
        value = value + totalDays[i] + ' ';
    }
    monthArray.push(value);
    value = '';
    for (var i = 28; i < 35; i++) {
        value = value + totalDays[i] + ' ';
    }
    monthArray.push(value);
    value = '';
    for (var i = 35; i < 42; i++) {
        value = value + totalDays[i] + ' ';
    }
    monthArray.push(value);
    value = '';
    for (var i = 0; i < monthArray.length; i++) {
        console.log(monthArray[i]);
    }
}

exports.prime2d = (range) => {
    var primeArray = [];
    var pa = [];
    var str = '';
    for (var i = 2; i < range; i++) {
        if (utility.isPrime(i)) {
            primeArray.push(i);
            str = str + i + ' ';
        }
        if (i % 100 == 0) {
            pa.push(str);
            str = '';
        }
    }
    for (var i = 0; i < pa.length; i++) {
        console.log(pa[i]);
    }
}

exports.primeAnagram2d = (range) => {
    var primeArray = [];
    var anagram2d = [];
    var str = '';
    var hundred = 100;
    for (var i = 2; i < range; i++) {
        if (utility.isPrime(i)) {
            primeArray.push(i);
        }
    }
    var anagramUnique = utility.isPrimeAnagram(primeArray);
    for (var i = 0; i <= anagramUnique.length; i++) {
        if (Number(anagramUnique[i]) < Number(hundred)) {
            str = str + anagramUnique[i] + ' ';
        } else {
            anagram2d.push(str);
            str = '';
            hundred = (hundred) + Number(100);
        }
    }
    for (var j = 0; j < anagram2d.length; j++) {
        console.log(anagram2d[j]);
    }
}

exports.primeAnagram2dStack = (range) => {
    var primeArray = [];
    for (var i = 2; i < range; i++) {
        if (utility.isPrime(i)) {
            primeArray.push(i);
        }
    }
    var anagramUnique = utility.isPrimeAnagram(primeArray);
    for (var i = 0; i < anagramUnique.length; i++) {
        stack.push(anagramUnique[i]);
    }
    stack.display();
}

exports.primeAnagram2dQueue = (range) => {
    var primeArray = [];
    for (var i = 2; i < range; i++) {
        if (utility.isPrime(i)) {
            primeArray.push(i);
        }
    }
    var anagramUnique = utility.isPrimeAnagram(primeArray);
    for (var i = 0; i < anagramUnique.length; i++) {
        queue.push(anagramUnique[i]);
    }
    queue.display();
}

exports.regex = (firstName, lastName, phoneNumber, string) => {
    var string = string.replace('<<name>>', firstName);
    var string = string.replace('<<full name>>', firstName + ' ' + lastName);
    var string = string.replace('xxxxxxxxxx', phoneNumber);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    var string = string.replace('01/01/2016', today);
    console.log(string);
}

exports.shuffle = () => {
    var size = 9;
    var cards = [];

    cards = utility.randomArray(size);
    return cards;
}

/**
 * @param size is the number of cards each player receives
 * @return the 2D array of 4x9 with random cards for 4 players
 */
exports.randomArray = (size) => {
    var r = 0;
    var c = 0;
    var random = 0;
    var x = 0;
    var bound = 52;
    var array = [];

    array = cardsDistribution(52);
    // console.log(array);
    // console.log(array.length);
    return array;
}

cardsDistribution = (totalCoupons) => {
    var unique = [9 * 4];
    var number;
    for (var i = 0; i < 9 * 4; i++) {
        random = (Math.floor(Math.random() * totalCoupons)) + 1;
        if (i == 0) {
            unique[i] = random;
        } else {
            var loop = 0;
            var count = 0;
            while (loop == 0) {
                random = (Math.floor(Math.random() * totalCoupons)) + 1;
                for (var j = 0; j < unique.length; j++) {
                    if (unique[j] == random) {
                        count++;
                    }
                }

                if (count == 0) {
                    unique[i] = random;
                    loop = 1;
                }
                count = 0;
            }
        }
    }
    return unique;
}

inputRandom = (bound) => {
    var a = Math.floor(Math.random() * bound) + 1
    console.log(a);
    return a;

}


/**
 * @param deck is the array where all the player cards are stored in random order
 * @return the cards of each player in ascending order 
 */
exports.sort = (deck) => {
    var size = 9;
    var player1 = new int[size];
    var player2 = new int[size];
    var player3 = new int[size];
    var player4 = new int[size];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < size; j++) {
            if (i == 0)
                player1[j] = deck[i][j];
            else if (i == 1)
                player2[j] = deck[i][j];
            else if (i == 2)
                player3[j] = deck[i][j];
            else if (i == 3)
                player4[j] = deck[i][j];
        }
    }
    player1 = bubbleSort(player1);
    player2 = bubbleSort(player2);
    player3 = bubbleSort(player3);
    player4 = bubbleSort(player4);
    var array = new int[4][size];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < size; j++) {
            if (i == 0)
                array[i][j] = player1[j];
            else if (i == 1)
                array[i][j] = player2[j];
            else if (i == 2)
                array[i][j] = player3[j];
            else if (i == 3)
                array[i][j] = player4[j];
        }
    }

    return array;
}

/**
 * @param array
 * @return sorted array
 */
exports.bubbleSort = (array) => {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if ((array[j] % 13) > (array[(j + 1)]) % 13) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

exports.write = (fileName, array) => {
    var json = JSON.stringify(array);
    fs.writeFile(fileName, json, function (err) {
        if (err) throw err;
        console.log('complete');
    });
}

exports.read = (fileName) => {
    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}