module.exports = class Doctor {
    constructor(name, id, specialization, availability, numberOfPatients) {
        this.name = name;
        this.id = id;
        this.specialization = specialization;
        this.availability = availability;
        this.numberOfPatients = numberOfPatients;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getSpecialization() {
        return this.specialization;
    }
    setSpecialization(specialization) {
        this.specialization = specialization;
    }
    getAvailability() {
        return this.availability;
    }
    setAvailability() {
        this.availability = availability;
    }
    getNumberOfPatients(){
        return this.numberOfPatients;
    }
    setNumberOfPatients(numberOfPatients){
        this.numberOfPatients = numberOfPatients;
    }
    toString(){
        return '\n\tName\t\t:\t'+this.name+'\n\tID\t\t:\t'+this.id+'\n\tSpecialization\t:\t'+this.specialization+'\n\tAvailability\t:\t'+this.availability;
    }
}