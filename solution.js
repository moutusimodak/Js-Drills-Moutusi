const arrayOfObjects = require('./persons.js');

//  Question -1
function getEmail(){

    const emails =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {   
            emails.push(arrayOfObjects[i].email);
        }    
       return emails;
    }


        

    
module.exports = { getEmail
        
};