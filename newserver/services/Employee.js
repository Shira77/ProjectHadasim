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
//רשימת כל העובדים
async function getAllEmployee(){
  const employees = await db.query("SELECT * FROM employee;" );
  return employees;
}
//פרטי עובד
async function employee(data){
    if(!(isOnlyDigits(data.ID))||data.ID.length!=9){
        return ("ID is incorrect");
    }
    const users = await db.query(`SELECT * FROM employee WHERE ID="${data.ID}";`);
    return users; 
}
//הכנסת עובד חדש
async function insertEmployee(data){
    if(data.DateOfBirth>Date){
        return ("The date of birth is incorrect");
    }
    if (!(isOnlyDigits(data.Phone))||data.Phone=="") {
        return ("The phone number is invalid");
    }
    if (!(isOnlyDigits(data.MobilePhone))||data.MobilePhone=="") {
        return ("The mobile phone number is invalid");
    }
    if(!(isOnlyDigits(data.ID))||data.ID.length!=9){
        return ("ID is incorrect");
    }
    const employees = await db.query(`INSERT INTO employee(FirstName ,LastName,ID,Adress,DateOfBirth,MobilePhone,Phone,Image) VALUES ("${data.FirstName}","${data.LastName}","${data.ID}","${data.Adress}","${data.DateOfBirth}","${data.MobilePhone}","${data.Phone}","${data.Image}");` );
    return employees;
}
//עדכון כתובת עובד
async function updateAdress(data){
    if(!(isOnlyDigits(data.ID))||data.ID.length!=9){
        return ("ID is incorrect");
    }
    const employees = await db.query(`UPDATE employee SET Adress=${data.Adress} WHERE ID="${data.id}";`);
    return employees;
}

module.exports = {
    getAllEmployee,
    employee,
    insertEmployee,
    updateAdress
}