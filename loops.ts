console.log("=========LOOP while============");
let a1:number = 5;

//WHILE 
while (a1 >5)
{
    console.log("while a1 = "+a1);
    a1--;
}

///console.log("a1 = "+a1);

//DO_WHILE

console.log("=====LOOP do-while=====");
let a2 = 5
do 
{
    console.log("do-while a2 = "+a2); // making One iteration
    a2--;
}while (a2>5)
console.log("=======LOOP for=======");
for(let i=0;i<5;i++)
{console.log(`Iteration - ${i+1}  i=`+i);}

//Infinite LOOP
let i = 0;
for(;;)
{  i++;
    console.log("Infinite loop "+i);
}

