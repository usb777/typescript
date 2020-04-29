class Employee 
{

}
 
function getEmployee(id: number): Employee;                     //Overload 1
function getEmployee(email: string): Employee;                  //Overload 2
function getEmployee(email: number, name: string): Employee;    //Overload 3

function getEmployee(email: string, name: string): Employee;    //Overload 4
//function getEmployee(name: string): Employee;                 //Error - Conflict with Overload 2
 
//Implement the function


function getEmployee (paramOne: string | number, paramTwo?: string ): Employee 
{ 
     
    let employee: Employee;
 
    if( typeof paramOne === 'number')
    {
        //Logic for overload 1
        console.log("type of paramater is number "+paramOne)
    } else if( typeof paramTwo != 'undefined')
     {
        //Logic for overload 3
        console.log("type of paramater is number "+paramOne+ "  parameter two = "+paramTwo) ; 
    } else 
    {
        //Logic for overload 2
        console.log("type of paramater is string "+paramOne)
    }
 
    return employee;
} 


getEmployee(5);

getEmployee(" Anton ");

getEmployee(35, "Andrew");

getEmployee("Anton", "Andrew");


