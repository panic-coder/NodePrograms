/**
 * Purpose   : Model class for inventary object.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 30-07-2018
 */
module.exports = class Inventary {
    constructor(name, price, weight) {
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
    getInventaryName() {
        return this.name;
    }
    setInventaryName(name) {
        this.name = name
    }
    getInventaryPrice() {
        return this.price;
    }
    setInventaryPrice(price) {
        this.price = price 
    }
    getInventaryWeight() {
        return this.weight;
    }
    setInventaryWeight(weight) {
        this.weight = weight;
    }
    toString(){
        console.log('\nName\t:\t'+this.name+'\nPrice\t:\t'+this.price+'\nWeight\t:\t'+this.weight);
    }
}