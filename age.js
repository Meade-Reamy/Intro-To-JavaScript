let rlSync = require("readline-sync");

let age = rlSync.questionInt('What is your age?\n');

for (let i = 10; i <= 30; i += 10) {
    if (i === 10) {
        console.log(`You are ${age} years old`)
    }
    age += 10
    console.log(`In ${i} years, you will be ${age}`)
}