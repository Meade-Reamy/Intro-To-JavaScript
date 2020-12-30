function evenOrOdd(prompt) {
    let rlSync = require('readline-sync')
    let number = rlSync.questionFloat(prompt)
    if (!Number.isInteger(number)) {
      console.log("number is not an interger")
      return } 
    if (number % 2 === 0) {
        console.log(`${number} is even.`)
    }
    else console.log(`${number} is odd.`)
}
evenOrOdd("What is the number\n")