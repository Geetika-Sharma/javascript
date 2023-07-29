const prompt = require("prompt-sync")()

const answer = prompt("Would you like to play? (Y/N)? ")

if (answer.toLowerCase()==="y"){
    const answer2 = prompt("Would you like to go left or right? (left/right)")

    if(answer2 === "left") {
        console.log("Oops, you go left and fall off a bridge! You lost!")
    } else {
        // right
        console.log("Nice! You go right and approach a bridge...")
        const answer3 = prompt("Would you like to cross the bridge or turn around (cross/turn)? ")

        if(answer3=="cross"){
            console.log("You won!!")
        } else {
            console.log("You lost")
        }
    }
} else {
    console.log("B'bye")
}