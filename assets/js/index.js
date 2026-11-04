function createLimiter(limit){
    let counter = 0 ; 
    return function (){
        if (counter < limit) {
            counter++;
        return true;
        }
   
    return false;
 };
} 

const limited = createLimiter(2);

console.log( limited());
console.log( limited());
console.log( limited());
console.log( limited());
console.log( limited());
console.log( limited());
