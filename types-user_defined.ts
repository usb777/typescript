
// Touple 
let a: [string, number, any];   
// Initialize it  
a = ["hi", 8, 10000]; // OK 
console.log(a);

////////Array

// type1
let arr = [1,2,"string",4,5]    // Javascript Style
console.log("array = "+arr);

var list1 : number[] = [1, 3, 5];  // typescript
console.log("array1 = "+list1);

var list2 : Array<number> = [1, 3, 5];   //typescript
console.log("array2 = "+list2);

var list3 : Array<any> = [1, "stroka", 5];   //typescript
console.log("array3 = "+list3);

var list4 : any[] = [1, 3, 5,"stroka", null,undefined]; 
console.log("array4 = "+list4); // =null= and =undefined= dont see in console



// ENUM

enum Color {      Red, Green, Blue  };  
let c: Color;  
c = Color.Red;  
console.log("color = "+c);


