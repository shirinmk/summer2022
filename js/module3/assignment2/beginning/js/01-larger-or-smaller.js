

// Larger or Smaller? 

// Usage: Use simple conditional statements 

// Create an application that accepts two integers within two separate prompts. Then, 
// display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal. 

let num1 = Number(prompt('please enter first number'));
let num2 = Number(prompt('please enter swcond number'));



if (num1 > num2){
    console.log(`larger number is ${num1}`);
}else if( num2 > num1){
    console.log(`larger number is ${num2}`);

}else if( num1 === num2){
    console.log("two mumbers are equal");
} else{
    console.log("error");
}



// additional info
// On Windows or Linux, simply press Alt+Z. to wrap text

// check for empty, not number ??