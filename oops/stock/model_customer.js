module.exports = class Customer{
    constructor(symbol, amount, shares){
        this.symbol = symbol;
        this.amount = amount;
        this.shares = shares;
    }
    getSymbol(){
        return this.symbol;
    }
    setSymbol(symbol){
        this.symbol = symbol;
    }
    getAmount(){
        return this.amount;
    }
    setAmount(amount){
        this.amount = amount;
    }
    getShares(){
        return this.shares;
    }
    setShares(){
        this.shares = shares;
    }
    toString(){
        return '\nSymbol\t:\t'+this.symbol+'\nShares\t:\t'+this.shares;
    }
}