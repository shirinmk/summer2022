//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

// let num;
// function halfNumber(num){
//     return num/2

// }
// do{
//     num = prompt('Enter the number')
// }while(isNaN(num))

// let result= halfNumber(num)
// console.log(`Half of ${num} is ${result}`)

//notes
// W1
// in fuction do I need to define parameter
//define global num not getting error
//  check user input number 

//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

//GLOBAL VARIABLE
// let num

// function squareNumber(num){
//     return (num)**2
// }
// do{
//     num = prompt('Enter the number')
// }while(isNaN(num) || num == "")

// let result = squareNumber(num)
// console.log(`The result of squaring the number ${num} is ${result}.`);

// notes:
// also check if user not put anything
//Q
// how to stop loop in browser? cancel button

//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
//GOLOBAL VARIABLE
// let num1, num2

// function percentOf(num1 ,num2){
//     return (num1 * 100) / num2 ;
// }

// do{
//     num1 = prompt('Enter the number')
// }while(isNaN(num1) || num1 == "")
// do{
//     num2 = prompt('Enter the number and it can nott be 0')
// }while(isNaN(num2) || num2 == "" || num2 == 0)

// let result = percentOf(num1, num2)
// console.log(`${num1} is ${result}% of ${num2}.`)

//notes
//bepors the concept kz soal

//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

//todo later

//STEP 5
// Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

// first solution
// let num;
// function sumOfNumbers(num){

//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//      }
//      console.log(sum)
//     return sum;

// }

// // num = prompt('enter numbers with comma seprated')
// // num = (3, 4,5,7) it has () not[]

// let result = sumOfNumbers(3,4,5,6); // it is for given numbers
// console.log(result)
// console.log(`sum of the numbers entered is ${result}`)

// second solution
let num;
function sumOfNumbers(num){

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
     }
     console.log(sum)
    return sum;

}

num = prompt('enter number comma seperated')
console.log(num.split(','))
// let result = sumOfNumbers(num.split(','));
// console.log(result)
// console.log(`sum of the numbers entered is ${result}`)

//todo 
// extract number 