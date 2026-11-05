const createAdder = (start) => (number) => start += number;
const adder = createAdder(10);
console.log('adder(13) :>> ', adder(13));
console.log('adder(20) :>> ', adder(20));
console.log('adder(100) :>> ', adder(100));

const adder2 = createAdder(100);
console.log('adder2(13) :>> ', adder2(13));
console.log('adder2(100) :>> ', adder2(100));

const createLogger = (prefix) => (message) => `${prefix}: ${message}`;

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');


console.log('authLogger() :>> ', authLogger('User logged in'));
console.log('apiLogger() :>> ', apiLogger('Request failed'));

const createLimiter = (limit) => () => limit-- > 0;

const limited = createLimiter(2);

console.log( limited());
console.log( limited());
console.log( limited());
console.log( limited());
console.log( limited());
console.log( limited());
