const arrayOfObjects = require('./persons.js');

//  Question -1
function getEmail(){

    const emails =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {   
            emails.push(arrayOfObjects[i].email);
        }    
       return emails;
    }



// Question -2
function getHobby( age){
    if (age === undefined || age === null) {
        return "Please enter an age.";
    }
   
    let found = false
    const hobby =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {
            
            if(arrayOfObjects[i].age === age){
                hobby.push(arrayOfObjects[i].hobbies);
                found = true;  
            }     
        }
       
        if (!found) {
            return "No age found";
        }
       
       return hobby;
    }


// Question -3

function getNames(Country){

    if (typeof Country !== 'string') {
        return `Invalid country parameter`;
    }

    const newnames =[]
    let found = false;
    for (let i = 0; i < arrayOfObjects.length; i++) {
        
        if(arrayOfObjects[i].isStudent === true && arrayOfObjects[i].country ===Country){
            newnames.push(arrayOfObjects[i].name);
            found = true;
        }  
    }
    if (!found) {
        return `No data found in this name `;
    }
    return newnames;
}    
   

// Question - 4    
function getNameCity(index){
    if (index === undefined || index === null) {
        return "Please enter an index";
    }
   
    let f = false
    const newNameCity =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {
            
            if(arrayOfObjects[i].id === index){
                newNameCity.push("Name is -"+arrayOfObjects[i].name , " and city is - " + arrayOfObjects[i].city);
                f=true
            }
            
        }
        if (!f) {
            return "No index found";
        }
       
       
       return newNameCity;
    }

// Question -5
function getAge(){

    const newNameCity =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {

                newNameCity.push(arrayOfObjects[i].age );
            }
            
       return newNameCity;
    }   

// Question -6

function getFirstHobby(){

    const hobbylist =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {

            if (arrayOfObjects[i].hobbies.length > 0) {
                hobbylist.push(arrayOfObjects[i].hobbies[0]);
            } else {
                hobbylist.push("No hobbies available");
            }
        }
            
       return hobbylist;
    }

// question -7
function getNameEmail(age) {
    const nameemailList=[]
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if(arrayOfObjects[i].age === age){
            nameemailList.push("the names are - "+arrayOfObjects[i].name ,"and the emails are - "+arrayOfObjects[i].email);
           
        }
        
    }
    return nameemailList;
}   


// question -8
function getCityCountry(){

    const CityList =[]
    const CountryList =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {
           
            CityList.push(arrayOfObjects[i].city);
            CountryList.push(arrayOfObjects[i].country);
            }
            return {CityList,CountryList};
    }
       


module.exports = { getEmail, getHobby, getNames, getNameCity, getAge, getFirstHobby, getNameEmail, getCityCountry};
        
