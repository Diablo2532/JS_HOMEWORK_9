function createAdder(start) {
    let sum = start;
 return function(number){
    sum = sum + number;
    return sum; 
 };
    
}
const adder = createAdder(10);
console.log('adder(13) :>> ', adder(13));
console.log('adder(20) :>> ', adder(20));
console.log('adder(100) :>> ', adder(100));

const adder2 = createAdder(100);
console.log('adder2(13) :>> ', adder2(13));
console.log('adder2(100) :>> ', adder2(100));

function createLogger(prefix) {
    return function(message) {
        return prefix + ':' + message ;
    };
}

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');


console.log('authLogger() :>> ', authLogger('User logged in'));
console.log('apiLogger() :>> ', apiLogger('Request failed'));

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
