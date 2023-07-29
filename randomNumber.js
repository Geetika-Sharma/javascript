const prompt = require("prompt-sync")();

// Generate random number between 0 and 100
const target = Math.round(Math.random()*100)
let guesses = 0;

while(true){
    guesses++

    const guess = Number(prompt("Guess the number(0-100): "))
    if(guess > target) {
        console.log("Your guess is too high")
    } else if(guess < target) {
        console.log("Your guess is too low")
    } else {
        console.log("You won!!")
        break
    }
}

console.log("You guessed it in ", guesses, " tries")