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



