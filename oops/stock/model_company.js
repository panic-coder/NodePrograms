module.exports = class Company{
    constructor(symbol, pricePerShare, totalShares){
        this.symbol = symbol;
        this.pricePerShare = pricePerShare;
        this.totalShares = totalShares;
    }
    getSymbol(){
        return this.symbol;
    }
    setSymbol(symbol){
        this.symbol = symbol;
    }
    getPricePerShare(){
        return this.pricePerShare;
    }
    setPricePerShare(pricePerShare){
        this.pricePerShare = pricePerShare;
    }
    getTotalShares(){
        return this.totalShares;
    }
    setTotalShares(totalShares){
        this.totalShares = totalShares;
    }
    toString(){
        return '\nSymbol\t\t:\t'+this.symbol+'\nPrice per share\t:\t'+this.pricePerShare+'\nToatal Shares\t:\t'+this.totalShares;
    }
}