function getNumber(prompt) {
    let readlineSync = require('readline-sync');
    let number = readlineSync.questionFloat(prompt);
    return number
}
let firstNumber = getNumber('What is the first number?\n');
let secondNumber = getNumber('What is the second number?\n');
console.log(`The ansewer to ${firstNumber} x ${secondNumber} is ${firstNumber * secondNumber}.`);