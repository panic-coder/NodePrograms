module.exports = class Address{
    constructor(city, state, zip){
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    getCity(){
        return this.city;
    }
    setCity(city){
        this.city = city;
    }
    getState(){
        return this.state;
    }
    setState(state){
        this.state = state;
    }
    getZip(){
        return this.zip
    }
    setZip(zip){
        this.zip = zip;
    }
    toString(){
        return ('\n\t\tcity\t:\t'+this.city+'\n\t\tstate\t:\t'+this.state+'\n\t\tzip\t:\t'+this.zip);
    }
}