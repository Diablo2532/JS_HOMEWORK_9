Написати функцію createAdder(start), яка повертає іншу функцію.

Повернена функція повинна додавати аргумент, який вона приймає, до суми, яку вона повертає.
Приклади використання:

const adder = createAdder(10);

adder(13)    // 23

adder(20)    // 43

adder(100)  // 143

const adder2 = createAdder(100);

adder2(13)    // 113

adder2(100)  // 213

Написати функцію createLogger(prefix), яка повертає функцію.

Повернена функція приймає повідомлення та виводить його в консоль з заданим префіксом.
Приклади використання:

const authLogger = createLogger('AUTH');

const apiLogger = createLogger('API');

authLogger('User logged in'); // AUTH: User logged in

apiLogger('Request failed'); // API: Request failed

Написати функцію createLimiter(limit), яка повертає функцію.

Повернена функція може бути викликана не більше limit разів.
Приклади використання:

const limited = createLimiter(2);

limited(); // ok

limited(); // ok

limited(); // Error
