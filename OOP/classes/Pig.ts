import Animal from "./Animal";

class Pig extends Animal<Body>
{
   
 //getEmployee() 


 //getEmployee(email: number, name: string):any; 


  private domestic:boolean;

  constructor (domestic:boolean)
  {
     super();
     this.setVoice("Hru-hru");
     this.domestic = domestic

  }




  public  checkFriendly()
  {
    console.log("i dont like people, they eat me");
  }

  /*
public function checkFriendly(str:string):string
  { let str1:string = str;
    console.log("i dont like people, they eat me");
    return str1;
  }
  */
/*
 public getRun():void
 {
    console.log("slow running");     
 }
*/


 public getRun(parameter:boolean)   // Same paramslike in parent class 
 {
    console.log("pig slow running");     
    //return true;
 }

 

}  // class


let pig1 = new Pig(true); // pig - this is Object,  Pig()  - this is constructor

console.log("legs = "+pig1.getLegs() );
console.log(pig1.getVoice() ) ;
pig1.checkFriendly();

let pig2 = new Pig(true); // pig - this is Object,  Pig()  - this is constructor
pig2.setVoice("hreu- Not Hru")
console.log(pig2.getVoice() ) ;

pig2.getRun(true);
pig2.getRun(false);



// var custs: Customer[]= [new Customer("A123"), new Customer("B456")];
/*
mypigs[0].getRun(true);
mypigs[1].getRun(true);
mypigs[2].getRun(true);
mypigs[3].getRun(true);
mypigs[4].getRun(true);
mypigs[5].getRun(true);

*/
console.log("====Array of pigs =====");
let mypigs: Array<Pig> = [new Pig(true), new Pig(true)];
mypigs[0].getRun(true);
mypigs[1].getRun(true);

var pigs: Pig[]= [new Pig(true), new Pig(true)];
console.log("====Array of pigs =====");
pigs[0].getRun(true);
pigs[1].getRun(true);