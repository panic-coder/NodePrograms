/**
 * Purpose   : Model for transaction object.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 02-08-2018
 */
module.exports = class Transaction{
    constructor(buySell, name, symbol, date){
        this.buySell = buySell;
        this.name = name;
        this.symbol = symbol;
        this.date = date;
    }
    getBuySell(){
        return this.buySell;
    }
    setBuySell(buySell){
        this.buySell = buySell;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getSymbol(){
        return this.symbol;
    }
    setSymbol(){
        this.symbol = symbol;
    }
    getDate(){
        return this.date;
    }
    setDate(date){
        this.date = date;
    }
    toString(){
        return '\nTrade\t:\t'+this.buySell+'\nName\t:\t'+this.name+'\nSymbol\t:\t'+this.symbol+'\nDate\t:\t'+this.date;
    }
}