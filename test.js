const arrayOfObjects = require('./persons');
const {getEmail} = require("./solution")


const emails = getEmail(arrayOfObjects);
const emailList = emails.join('\n');
console.log(`The email address of all individuals are - ${emailList}`);


