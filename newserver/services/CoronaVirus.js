const db = require('./db');
const helper = require('../helper');
const config = require('../config');

function isOnlyDigits(string) {
    for (let i = 0; i < string.length; i++) {
       var ascii = string.charCodeAt(i);
       if (ascii < 48 || ascii > 57) {
          return false;
       }
    }
    return true;
}
//רשימת כל החולים עכשיו
async function getAllSicks(){
    const employees = await db.query("SELECT * FROM patients where positive IS NOT NULL AND Recovery IS NULL;" );
    return employees;
}
//רשימת מחלימים
async function getAllHealers(){
    const employees = await db.query("SELECT * FROM patients where Recovery IS NOT NULL;" );
    return employees;
}
//רשימת כל המחוסנים 4 חיסונים
async function getAllVaccinated4(){
    const employees = await db.query("SELECT * FROM Vaccinated where vaccinationDate4 IS NOT NULL;" );
    return employees;
}
//רשימת כל המחוסנים 3 חיסונים
async function getAllVaccinated3(){
    const employees = await db.query("SELECT * FROM Vaccinated where vaccinationDate3 IS NOT NULL AND vaccinationDate4 IS NULL;" );
    return employees;
}
//רשימת כל המחוסנים 2 חיסונים
async function getAllVaccinated2(){
    const employees = await db.query("SELECT * FROM Vaccinated where vaccinationDate2 IS NOT NULL AND vaccinationDate3 IS NULL;" );
    return employees;
}
//רשימת כל המחוסנים 1 חיסונים
async function getAllVaccinated1(){
    const employees = await db.query("SELECT * FROM Vaccinated where vaccinationDate1 IS NOT NULL AND vaccinationDate2 IS NULL;" );
    return employees;
}
//רשימת כל המחוסנים 4 חסונים של אותו יצרן
async function getAllsameManufacturer(){
    const employees = await db.query("SELECT * FROM Vaccinated where vaccinationDate4 IS NOT NULL AND Manufacturer1=Manufacturer2 AND Manufacturer2=Manufacturer3 AND Manufacturer3=Manufacturer4;" );
    return employees;
}
//עדכון תאריך חיסון ראשון
async function updateVaccinationDate1(data){
    if(!(isOnlyDigits(data.IDEmployee))||data.IDEmployee.length!=9){
        return ("ID is incorrect");
    }
    const employees = await db.query(`INSERT INTO Vaccinated(IDEmployee,vaccinationDate1,Manufacturer1) VALUES ("${data.IDEmployee}","${data.vaccinationDate1}","${data.Manufacturer1}");`);
    return employees;
}
//עדכון תאריך חיסון שני
async function updateVaccinationDate2(data){
    if(!(isOnlyDigits(data.IDEmployee))||data.IDEmployee.length!=9){
        return ("ID is incorrect");
    }
    const employees = await db.query(`UPDATE Vaccinated SET vaccinationDate2="${data.vaccinationDate2}", Manufacturer2="${data.Manufacturer2}" WHERE IDEmployee="${data.IDEmployee}";`);
    return employees;
}
//עדכון תאריך חיסון שלישי
async function updateVaccinationDate3(data){
    if(!(isOnlyDigits(data.IDEmployee))||data.IDEmployee.length!=9){
        return ("ID is incorrect");
    }
    const employees = await db.query(`UPDATE Vaccinated SET vaccinationDate3="${data.vaccinationDate3}", Manufacturer3="${data.Manufacturer3}" WHERE IDEmployee="${data.IDEmployee}";`);
    return employees;
}
//עדכון תאריך חיסון רביעי
async function updateVaccinationDate4(data){
    if(!(isOnlyDigits(data.IDEmployee))||data.IDEmployee.length!=9){
        return ("ID is incorrect");
    }
    const employees = await db.query(`UPDATE Vaccinated SET vaccinationDate4="${data.vaccinationDate4}", Manufacturer4="${data.Manufacturer4}" WHERE IDEmployee="${data.IDEmployee}";`);
    return employees;
}
//עדכון על אדם חיובי לקורונה
async function updatePositive(data){
    if(!(isOnlyDigits(data.IDEmployee))||data.IDEmployee.length!=9){
        return ("ID is incorrect");
    }
    const employees = await db.query(`INSERT INTO patients(IDEmployee,Positive) VALUES ("${data.IDEmployee}","${data.Positive}");`);
    return employees;
}
//עדכון תאריך החלמה
async function updateRecovery(data){
    if(!(isOnlyDigits(data.IDEmployee))||data.IDEmployee.length!=9){
        return ("ID is incorrect");
    }
    const employees = await db.query(`UPDATE patients SET Recovery="${data.Recovery}" WHERE IDEmployee="${data.IDEmployee}";`);
    return employees;
}
//שאלת בונוס: כמה חברי קופה אינם מחוסנים כלל
async function notVaccinated(){
    const employees = await db.query("SELECT * FROM hmo.employee where ID not in (select IDEmployee from hmo.vaccinated);");
    return employees.length;
}
module.exports = {
    getAllSicks,
    getAllHealers,
    getAllVaccinated4,
    getAllVaccinated3,
    getAllVaccinated2,
    getAllVaccinated1,
    getAllsameManufacturer,
    updateVaccinationDate1,
    updateVaccinationDate2,
    updateVaccinationDate3,
    updateVaccinationDate4,
    updatePositive,
    updateRecovery,
    notVaccinated
}