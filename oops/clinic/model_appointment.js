/**
 * Purpose   : Model for appointment object.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 01-08-2018
 */
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
        return '\nAppointment\n\n\tPatient\n\t---------------------------------'+this.patient+'\n\n\tDoctor\n\t---------------------------------'+this.doctor+'\n\tDate\t\t:\t'+this.date;
    }
}