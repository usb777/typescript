enum enuma {
 
    ACTIVE,
    INACTIVE = 'INACTIVE777',
    ONHOLD =1
    
 
}
console.log(enuma[0]);          //ACTIVE
console.log(enuma); // all values
console.log(enuma.INACTIVE);


console.log("==============================");
enum AppStatus {
    ACTIVE,
    INACTIVE,
    ONHOLD
}
 
console.log(AppStatus.ACTIVE);      //0
console.log(AppStatus['INACTIVE']); //1
console.log(AppStatus[0]);          //ACTIVE
console.log(AppStatus.ONHOLD);      //2



enum arrow 
{
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}