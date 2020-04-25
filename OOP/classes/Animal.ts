/**
 4 Pillars of OOP:
 
 1. Abstraction: abstract classes and Interfaces

 2. Inheritence:  extends and implements--  class className <name_of_Interface>

 3. Encapsulation:  restrict access keywords:=== public, private, protected, -default- ===  and Getter-Setter methods

 4. Polymorphism: many-forms  - in same class or file - 
        === a. Same name function-method  with different parameters (Overload)
        === b. Same name function-method from Parent-to-Child with same parameters, but different Logic (Override)

 */
interface Body 
{
   skelet: string 
}


export default class Animal<Body>   // class with interface  
{ 
     z:string ="hello Animal" ;    // default

   private tail:boolean;
   private voice:string;
   private legs : number;
   private skelet:string="horde"  // from Interface bpdy 

   protected eye:string ="2 yeys";
   
    constructor ()
  {
      this.tail = true;
      this.voice = "rrrrrr";
      this.legs = 4; 
  }

 public getRun(params:boolean)
 {
    if (params)    console.log("Fast running");
      else {  console.log("slow running");}
    
 }


  
  public  setTail(tail:boolean): void 
    { 
        this.tail = tail; 
    } 

    public  getTail():boolean
   {
      return this.tail;
   }

   // Setter and Getter for voice fields banch
   public  setVoice(voice:string): void 
   { 
       this.voice = voice; 
   } 

   public  getVoice():string
    {
     return this.voice;
    }



   // Setter and Getter for legs fields banch
   public  setLegs(legs:number): void 
   { 
       this.legs = legs; 
   } 

   public getLegs():number
    {
     return this.legs;
    }


    public toString() : string
    {   return "tail = "+this.tail+" voice = "+this.voice+ " legs = "+ this.legs;    }


}



