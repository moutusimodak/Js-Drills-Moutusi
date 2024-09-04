const arrayOfObjects = require('./persons');
const {getEmail,getHobby,getNames} = require("./solution")


const emails = getEmail(arrayOfObjects);
const emailList = emails.join('\n');
//console.log(`The email address of all individuals are - ${emailList}`);

const hobby = getHobby(arrayOfObjects,33);
//console.log(`${hobby}`);

const names = getNames(arrayOfObjects);
const nameList = names.join('\n');
console.log(`The names  are  - ${nameList}`);


