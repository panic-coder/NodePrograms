module.exports = class Inventary {
    constructor(name, price, weight) {
        // always initialize all instance properties
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
    getInventarytPrice() {
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