module.exports = class Appointment{
    constructor(patient, doctor, date){
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
    }
    getPatient(){
        return this.patient;
    }
    setPatient(patient){
        this.patient = patient;
    }
    getDoctor(){
        return this.doctor;
    }
    setDoctor(doctor){
        this.doctor = doctor;
    }
    getDate(){
        return this.date;
    }
    setDate(date){
        this.date = date;
    }
    toString(){
        return '\n\tAppointment\t:\t'+this.patient+this.doctor+'\n\tDate\t:\t'+this.date;
    }
}