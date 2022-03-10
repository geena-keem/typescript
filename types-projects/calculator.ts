/**
 *  calculator 
 */

console.log(calculate('add', 2, 5));
console.log(calculate('substract', 4, 2));
console.log(calculate('multiply', 8, 2));
console.log(calculate('divide', 6, 2));
console.log(calculate('remainder', 9, 7));

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, a: number, b: number): number {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command!');
    }
}