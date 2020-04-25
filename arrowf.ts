
var foo = function (x) { console.log( `10 + ${x}  =`+( 10 + x) ); return  10 + x; }; // lambda function
console.log(foo(100));      //outputs 110

var foo1 = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 

 foo1(55)

 let basic:any = (/**parameter */)=> { let str ="hello world"; /** body of function */console.log(str);  return str;   };    //    x = ()=>{}

 basic();


 console.log("Type of basic  = "+typeof( basic ) ) ;   // type function
 console.log("Type of basic  = "+typeof( basic()  )) ;  // type string  

 let varA:number=6;                       // same like arrow variable
 console.log(typeof(varA   )); // cannot varA() - cannot be

 var varB = (x:any)=> { 
        if(typeof x=="number") 
        {  console.log(x+" is numeric")  }
           else if(typeof x=="string") 
           {   console.log(x+" is a string")  }
           else if(typeof x=="boolean") 
           {   console.log(x+" is a boolean")  }
           else {console.log("undefined type"); }
           
 } 


 varB(12) 
 varB("Tom")
 varB(true);
 varB( basic );
 varB( basic()  );
 
