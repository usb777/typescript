import Animal from "./classes/Animal"


let zver= new Animal();

console.log(zver.getTail);    // print type
 console.log(zver.getTail()); // print


 console.log("Zver rychit "+zver.getVoice()  )


 console.log(zver.z);

console.log(zver.eye);  //  protected var - only can access through -Animal- or his child 
 
