// The “Coin Flip Streak” Game
// In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:
// Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
// Create a do while loop.
// Within the do while loop assign a randomly generated number to coinFlip. You will have to use the same Math formula that you used in the previous assignment to get this number.
// Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
// Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

let coinFlip;
do {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip);
    if (coinFlip === 0) {
        document.write('Heads');
    } else {
        document.write('Tails');
    }
    document.write('<br/>')
} while (coinFlip !== 1);




// You can use Math.round(Math.random()). If Math.random() generates a number less than 0.5 the result will be 0 otherwise it should be 1.

// DONE 