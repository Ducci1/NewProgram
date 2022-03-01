/*The code in development below is a code that stores data, and produces them upon request.
* it is still in development. Eventually, it can be made into a database.
/**This is a program that takes data ,stores it as variable and reproduces it later.
 * It is still in development.
 */



//First to create the list of employees.
//if var n["name"]===[inputName] , return value is what we are going to use with the filter function. 
const prompt = require("prompt-sync")()


var employeeList = [
    {"Name": "JONATHAN", "Date of birth": "09/05/2002" , "Blood type": "O", "Gender": "M", "Height": "182cm", "Telephone no.": "07035677872"},

    {"Name": "CHIAMAKA", "Date of birth": "23/09/2000" , "Blood type": "AB", "Gender": "F", "Height": "176cm", "Telephone no.": "08022333781"},

    {"Name": "NATHAN", "Date of birth": "03/04/1999" , "Blood type": "A", "Gender": "M", "Height": "187cm", "Telephone no.": "08181356872"},
    
    {"Name": "KOREDE", "Date of birth": "24/11/2000", "Blood type": "O", "Gender": "M", "Height": "179cm", "Telephone no.": "07035758223"},

    {"Name": "JESSICA", "Date of birth": "30/04/1998", "Blood type": "AB", "Gender": "F", "Height": "178cm", "Telephone no.": "08123122118"},

    {"Name": "PRISCILLA", "Date of birth": "02/08/1999", "Blood type": "B", "Gender": "F", "Height": "179cm", "Telephone no.": "08035768772"},

]


// We can put a conditional function to run this funtion if the user needs to add a new employee.
//function for adding new employees to the array list.


function employeeFiles(name, dateOfBirth, bloodType, gender, height, telephoneNo){
    this.name = name = prompt("Input your name here-- ")
    this.dateOfBirth = dateOfBirth = prompt("Input your date of birth here in (dd/mm/yyyy) this format--  ")
    this.bloodType = bloodType = prompt("Input your blood type here-- ")
    this.gender = gender = prompt("M or F-- ")
    this.height = height = prompt("Input your height(cm) here-- ")
    this.telephoneNo = telephoneNo = prompt("Input your telephone no.-- ")

    const employeeData = [
        {'Name':this.name.toUpperCase() ,
         'Date of birth': this.dateOfBirth,
         'Blood type': this.bloodType.toUpperCase(), 
         'Gender': this.gender.toUpperCase(),
         'Height': this.height + "cm",
         'Telephone No.': this.telephoneNo
        }
    ]
    var employeeList = employeeList.push(employeeData);
    return employeeList;
    
    
}  



//function for finding employee from input data.
function findEmployee(){
        const inputName = prompt("Input full name of employee here__ ");
        for (var i = 0; i < employeeList.length; i++){
            if (inputName.toUpperCase() === employeeList[i]["Name"]) {
            
                return employeeList[i]  
            
            }
        }

        return `${inputName} is not in our database.`

            

}



/*There is still work to be done and functions to be improved. This is mostly the basic functionality. The exception handlers in cases of wrong input
will be put eventually. Use of filter function to improve the search algorithm. Use of arrows for code simplification.
In ample time, it can be made into a proper database management system, especially with the use of database languages
*/ 
function main(){
    console.log("Welcome User.")
    console.log("-------------------")
    const choice = prompt(`Type "search" to search for employee , or "store" to save new employee data__`)
    if (choice.toLowerCase() == "search"){
        console.log(findEmployee());
    }

    else if(choice.toLowerCase() == "store"){
        console.log(employeeFiles());
    }

    else {
        console.log("Invalid input");
    }

//Insert the loop of the code afterwards.


}

main();

//Remember to create function that saves the new records to the original
// The search function is mostly completed. Most of the remaining work to be done is in the store function.


