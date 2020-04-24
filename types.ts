let str:string;
let n:number;
let other: any;   // any )) 
let flag: boolean = true;  

let znull: null  = undefined
let zundefined: undefined 
let zvoid:void = null;    // undefined or null 

let znan:any = NaN

// undefined and null  -  can be type or value of variable
// void - can be only type of variable



str = "String variable" ;
console.log(" str = "+ str+ "  Type of str = "+ typeof(str));

n = 5; // cannot be n= "str"

other = 55;
console.log(" other = "+ other+ "  Type of other = "+ typeof(other));

other = 55+ "sdfsdfsdf";
console.log(" other = "+ other+ "  Type of other = "+ typeof(other));
console.log(" boolean by default flag = "+ flag+ "  Type of flag = "+ typeof(flag));

console.log(" void = "+ zvoid+ "  Type of other = "+ typeof(zvoid));


const str2 = "Constant"

// str2 = ""  // constant cannot re-assign

let str3 = ""
str3 = "strok"

let x

console.log("x = "+x)
