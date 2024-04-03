// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAdress:'11 Broadway',
    
};
// implementing a function that updates employee information
//it returns another object with updated values for key
// it doesnt modify the value for the original object
function updateEmployeeWithKeyAndValue (employee, key, value){
    return {...employee,[key]: value }; //copies the key with the values
};

// implementing a function that updates employee information
//it returns another object with updated values for key
// it  modifies the value for the original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;
        return employee;
    
};

//implementing a function that removes the key/value pair
// it doesnt change the original object
 function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key]; //removes key properties from the object
     return newEmployee;

 }


//implementing a function that removes the key/value pair
// it changes the original object
 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]; //removes key properties from the object
    return employee;

 };
