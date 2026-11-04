function createLogger(prefix) {
    return function(message) {
        return prefix + ':' + message ;
    };
}

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');


console.log('authLogger() :>> ', authLogger('User logged in'));
console.log('apiLogger() :>> ', apiLogger('Request failed'));