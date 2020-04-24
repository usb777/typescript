import { number } from "prop-types"

function getSum(x:number, y:number)
{ 
   let  sum:number;  
   sum = x+y+100 ;
   return x+y   // sum
}


function getMultiply(x:number, y:number):void
{
   console.log("x*y = "+ x*y)
   // no return fucntion
}

let sum = getSum(10,15);
console.log(sum);
console.log( getSum(10,15) );
getMultiply(10,5);

/////Oprional PARAMETER
function showDetails(id:number,name?:string,e_mail_id?:string) // ? - optional parameter
 {   
    console.log("ID:", id, " Name:",name);   
   /* if(e_mail_id!=undefined) */{console.log("Email-Id:",e_mail_id);   }
 }  
 showDetails(101,"Virat Kohli"); 

 showDetails(105,"Sachin","sachin@javatpoint.com");  

 showDetails(555); 

///////Default parameter


function getMultiplyDefault(x:number=100, y:number):number
{
   return x*y;
   // no return fucntion
}

console.log(getMultiplyDefault(21,5));
//console.log(getMultiplyDefault(21));


////////  REST parameter
// 1. Only one rest parameter is allowed in a function.
// 2. It must be an array type.
// 3. It must be the last parameter in a parameter list.

function suma(a: number, ...b: number[]): number 
{  
    let result = a;  
    for (var i = 0; i < b.length; i++) 
    {  
    result += b[i];  
    }  
    return result;  
}  

  let result1 = suma(3, 5);  
  let result2 = suma(3, 5, 7, 9, 11,100, 56);  
  console.log(result1 +"\n\r" + result2);  



