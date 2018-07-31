module.exports = class Patient{
    constructor(name, id, phoneNumber, age){
        this.name = name;
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age = age;
    }
    toString(){
        return '\n\tName\t\t:\t'+this.name+'\n\tID\t\t:\t'+this.id+'\n\tPhone No.\t:\t'+this.phoneNumber+'\n\tAge\t\t:\t'+this.age;
    }
}