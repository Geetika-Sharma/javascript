const prompt = require("prompt-sync")()

console.log("Welcome to the Computer Hardware Quiz!")

let correctAnswers = 0;
const answer1 = prompt("What is the brain of the computer? ");

const correctAnswer1 = "CPU";

if (answer1.toUpperCase() === correctAnswer1) {
    console.log("You got it correct")
    correctAnswers += 1
} else {
    console.log("Sorry. Wrong answer")
}

const answer2 = prompt("What is the better a 3090ti or 4060? ");

const correctAnswer2 = "3090ti";
const totalQuestions = 3;

if (answer2.toLowerCase() === correctAnswer2) {
    console.log("You got it correct")
    correctAnswers += 1
} else {
    console.log("Sorry. Wrong answer")
}

const answer3 = prompt("What is the recommended amount of RAM in 2023? ");

const correctAnswer3 = "16GB";

if (answer3.toUpperCase() === correctAnswer3) {
    console.log("You got it correct")
    correctAnswers += 1
} else {
    console.log("Sorry. Wrong answer")
}

const percent = Math.round((correctAnswers/totalQuestions)*100)
console.log("You got ", correctAnswers, " questions correct.")
console.log("You score", percent.toString() + "%")