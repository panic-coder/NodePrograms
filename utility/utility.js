var readline = require('readline');
var prompt = require('prompt');
var utility = require('../utility/utility');
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
        //results = sum;
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
        // console.log('trails ',trails);
        // console.log('stake ',stake);
        // console.log('goals ',goals);
        // console.log('cash ',cash);
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
        //console.log(unique[i]);
    }
    return unique;
}

exports.array = (m, n) => {
    //var arr = new Array(m);
    var arr = [
        [1, 2],
        [3, 4]
    ];
    /*  
      for(var i=0;i<m;i++){
          
          arr[i] = new Array(n);
          for(var j=0;j<n;j++){
              var utility = require('./utility')
              var input = utility.userInput();
              input.question('value ',(a) => {
                  console.log(a);
                  arr[i].push(a);
                  input.close();
              });
          }
      } */
    //var http = require('http');
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            console.log(arr[i][j]);
        }
        // console.log(arr[i][j]);
    }
}

exports.sumOfThreeintegers = (size) => {
    prompt.start();
    var arr = [];

    for (var i = 0; i < size; i++) {
        prompt.get(['values'], function (err, input) {
            if (err) {
                return 0;
            }
            arr.push(input.values);
        })
    }
    console.log(arr);
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
    // for (let i = 0; i < anagramUnique.length; i++)
    //     console.log(anagramUnique[i]);
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
        //num >>= 1; 
        num = Math.floor(num / 2);
        //console.log(bin);
        binNumber = binNumber + bin;
    }
    //console.log(binNumber);
    binNumber = reverseString(binNumber);
    //console.log(binNumber);
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
    var year1, month1, x, day = 1,day1;
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
    var year1, month1, x, day = 1,day1;
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
    for (let i = 0; i < totalDays.length; i++){
        stack.push(totalDays[i]);
    }
    while(!stack.isEmpty()){
        stackCalender.push(stack.pop());
    }
    totalDays = [];
    while(!stackCalender.isEmpty()){
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
    for(var i=0;i<monthArray.length;i++){
        console.log(monthArray[i]);
    }
}

exports.prime2d = (range) => {
    var primeArray = [];
    var pa = [];
    var str = '';
    for(var i=2;i<range;i++){
        if(utility.isPrime(i)){
            primeArray.push(i);
            str = str + i + ' ';
        }
        if(i%100 == 0){
            pa.push(str);
            str = '';
        }
    }
    for(var i=0;i<pa.length;i++){
        console.log(pa[i]);
    }
}

exports.primeAnagram2d = (range) => {
    var primeArray = [];
    var anagram2d = [];
    var str = '';
    
    for(var i=2;i<range;i++){
        if(utility.isPrime(i)){
            primeArray.push(i);
        }
    }
    var anagramUnique = utility.isPrimeAnagram(primeArray);
    for(var i=0;i<anagramUnique.length;i++){
        //anagram2d.push(i);
        str = str + i + ' ';
        if(i%100 == 0){
            anagram2d.push(str);
            str = '';
        }
    }
    for(var i=0;anagram2d.length;i++){
        console.log(anagram2d[i]);
        
    }
    //console.log(anagramUnique);
    
}