/**
 * Purpose   : Finding percentage of heads or tails after flipping a coin.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 22-07-2018
 */
var utility = require('../utility/utility.js')
var val;
var input = utility.userInput();
input.question('Enter total flip times ', (size)=>{
    // input.question('Enter a',(a)=>{
    //     input.question('Enter b',(b)=>{
            flip(size);
            input.close();
    //     })
    // })
})

flip=(size) => {
    // console.log('a',a);
    // console.log('b',b);
    var randomValues=[];
    var heads=0;
    var tails=0;
    for(var i=0; i<size; i++){
        randomValues[i] = utility.random();
        console.log(randomValues[i]);
        
        if(randomValues[i]<0.5){
            tails++;
        } else{
            heads++;
        }
    }
    console.log('Heads % : ',(heads/size)*100,'%');
    console.log('Tails % : ',(tails/size)*100,'%');
    //console.log(randomValues);
}
