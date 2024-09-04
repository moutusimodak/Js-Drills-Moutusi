//  Question -1
function getEmail(arrayOfObjects){

    const emails =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {   
            emails.push(arrayOfObjects[i].email);
        }    
       return emails;
    }



// Question -2
function getHobby(arrayOfObjects, age){
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

function getNames(arrayOfObjects){
    const newnames =[]
    for (let i = 0; i < arrayOfObjects.length; i++) {
        
        if(arrayOfObjects[i].isStudent === true && arrayOfObjects[i].country ==='Australia'){
            newnames.push(arrayOfObjects[i].name);
        }  
    }
    return newnames;
}    
   

// Question - 4    
function getNameCity(arrayOfObjects, index){
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

    
module.exports = { getEmail, getHobby, getNames, getNameCity};
        
