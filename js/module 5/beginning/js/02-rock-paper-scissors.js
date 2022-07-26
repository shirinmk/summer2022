// The Rock, Paper, Scissors Game
// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// Our code will break the game into 3 phases:
// User makes a choice. How will we collect the user’s choice?
// Computer makes a choice. How will we collect the computer’s choice?
// A conditional that determines who wins.
// You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
// Begin by prompting the user for their choice.
// Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
// Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
// Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
// What if the result ends in a tie? Figure out how to handle that as well.
// What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as wel



let userChoice = Number(prompt('enter 0 for scissors, 1 for rocl and 2 for paper'))
let compChoic = Math.floor(Math.random() * 3);
console.log(compChoic)
console.log("direction enter 0 for scissors, 1 for rocl and 2 for paper")

switch (userChoice) {
    case 0:
        if (compChoic == 0) {
            console.log("sciec and scisor tie")
        } else if (compChoic == 1) {
            console.log(`you loos computer choice is ${compChoic} and your choice is ${userChoice} `)
        } else {
            console.log(`you win computer choice is ${compChoic} and your choice is ${userChoice}`)
        }
        break
    case 1:
        if (compChoic == 0) {
            console.log(`you win computer choice is ${compChoic} and your choice is ${userChoice}`)
        } else if (compChoic == 1) {
            console.log(`you tie computer choice is ${compChoic} and your choice is ${userChoice} `)
        } else {
            console.log(`you loose computer choice is ${compChoic} and your choice is ${userChoice}`)
        }
        break

    case 2:
        if (compChoic == 0) {
            console.log(`you loose computer choice is ${compChoic} and your choice is ${userChoice}`)
        } else if (compChoic == 1) {
            console.log(`you win computer choice is ${compChoic} and your choice is ${userChoice} `)
        } else {
            console.log(`you tie computer choice is ${compChoic} and your choice is ${userChoice}`)
        }
        break

    default:
        console.log("you enterd not defined")

}





// reference
// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php