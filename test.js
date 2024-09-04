const arrayOfObjects = require('./persons');
const {getEmail,getHobby,getNames, getNameCity, getAge, getFirstHobby, getNameEmail} = require("./solution")


const emails = getEmail(arrayOfObjects);
const emailList = emails.join('\n');
//console.log(`The email address of all individuals are - ${emailList}`);

const hobby = getHobby(28);
console.log(`${hobby}`);

const names = getNames(arrayOfObjects);
const nameList = names.join('\n');
console.log(`The names  are  - ${nameList}`);

const value = getNameCity(3);
//console.log(`${value}`);


const ages = getAge(arrayOfObjects);
const ageList = ages.join('\n');
//console.log(`The ages of all individuals are  - ${ageList}`);


const hobies = getFirstHobby(arrayOfObjects);
const hobbyList = hobies.join('\n');
//console.log(`The first hobby of all individuals are  - ${hobbyList}`);


const nameemailList = getNameEmail(25);
console.log(nameemailList)

