const arrayOfObjects = require('./persons');
const {getEmail,getHobby} = require("./solution")


const emails = getEmail(arrayOfObjects);
const emailList = emails.join('\n');
//console.log(`The email address of all individuals are - ${emailList}`);

const hobby = getHobby(33);
console.log(`${hobby}`);
