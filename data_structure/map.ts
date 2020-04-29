import Pig from "../OOP/classes/Pig"

//let pig = new Pig(true);
let map = new Map();  //  key , value

function myfucn()
{
    console.log("I'm func");
}
//  key  , value    - key must be Unique
map.set("key1","Andrew");
map.set(2,"Dzmitry");
map.set(3,"zzz"); // double key
map.set(3,"Vasilij"); // double key
map.set(4, "Anna");
map.set(5, "Anna");
//map.set(100); // always 2 argument

//map.set("third", pig);
//map.set("third", myfucn());


console.log("size of map = " + map.size);  //size
console.log(map);
console.log("=======================");
console.log("get by key " + map.get(3) );  // get work by Key  only
console.log("get by value " + map.get("Anna")); // undefined  

console.log("has by key 3 is " + map.has(3) );  // get work by Key  only
console.log("has by key 100 is " + map.has(100) );  // get work by Key  only
console.log("has by value " + map.has("Anna")); // undefined  

console.log("========Before delete===============");
console.log("get by key " + map.get(3) );  // get work by Key  only

map.delete(3);

console.log("========After delete===============");
console.log("get by key " + map.get(3) );  // get work by Key  only

console.log("========Before clear ===============");
console.log(map);



// Iteration over Map
console.log("========Iteration 1 ===============");
for (let key of map.keys())
 {
    console.log(key+" - " + map.get(key));                   //Lokesh Raj John
}

console.log("========Iteration 2 ===============");
//Iterate over map values  
for (let value of map.values()) 
{  
    console.log("Map Values= " +value);      
}  

console.log("========Iteration3 ===============");//Iterate over map entries  
for (let entry of map.entries()) 
{  
    console.log(entry[0], entry[1]);   // 0 - key, 1 - value 
}  


console.log("========Iteration 4 Classic for ===============");

for (let i = 0;i<map.size;i++)
{
    console.log("map["+i+"] key = "+map.values[i] )
}



map.clear(); // delete all values

console.log("========After clear ===============");
console.log(map);
