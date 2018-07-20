var readline = require('readline');
var prompt = require('prompt');

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

exports.quad = (a,b,c) => {
    var delta = (b*b) - (4*a*c);
    var root1 = (-b + Math.sqrt(delta))/(2*a);
    var root2 = (-b - Math.sqrt(delta))/(2*a);
    console.log('Root 1 =', root1);
    console.log('Root 2 =', root2);
}

exports.chill = (t,v) => {
    var w = 35.74 + (0.6215*t) + ((0.4275*t)-(35.75))*Math.pow(v,0.16);
    return w;
}

exports.isAnagram = (data) => {
    console.log(data);
    
}