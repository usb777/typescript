let set = new Set();

let arr = [1,2,3,"stroka",4]
set.add(5);
set.add(100);
set.add("Dzen");
set.add( false) ;
set.add(true);
set.add(null);
set.add(undefined)
set.add(100)  // cannot insert dublicate
set.add(arr);



console.log(set);
console.log(arr);
let x = {}; 
console.log("Size of set = " +set.size )
console.log("get from JSON  = "+  set.toJSON);
console.log("get from JSON  = "+  JSON.stringify(set.toJSON) );

console.log("=========values==============");
console.log(set.values() );

console.log("=========HAS==============");
console.log("Has 5?  "+ set.has(5) );
console.log("Has 6?  "+ set.has(6) );

console.log("=========Delete==============");
set.delete(5);
console.log("Has 5?  "+ set.has(5) );


console.log("========Iteration 1 ===============");
for (let currentValue of set) 
{ 
    console.log(currentValue);    
} 

console.log("========Iteration 2 ===============");
// Iterate set entries with forEach
set.forEach(function(value)
 { 
  console.log(value);         
 
});
/*
console.log("========Iteration 3 Classic for ===============");

for (let i = 0;i<set.size;i++)
{
   // console.log(set.values[i] )
}
*/

console.log("========clear ===============");
set.clear()
console.log(set)


let set1 = new Set(["oranges", "apples", "bananas"]);
console.log(set1 )