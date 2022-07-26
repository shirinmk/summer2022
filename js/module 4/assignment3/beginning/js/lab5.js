// There’s a line of code in lab 5 that asks the user if they want to repeat their entry 
// Your job in this part of the assignment is to validate that entry. If it’s anything other than “y” or “n”, the prompt should simply reappear until the user enters a valid entry. 




//GLOBAL VARIABLE
let miles
let gallons
let mpq
let again = 'y'

// process user feedback
do{
    miles = parseInt(prompt('Enter miles driven'))
    gallons = parseFloat(prompt('How many gallons does your tank hold?'))
    if(!isNaN(miles) && !isNaN(gallons) && gallons > 0){
        mpq = miles / gallons
        console.log(`Your car gets ${mpq.toFixed(2)} miles per gallon.  `)
    }else{
        alert('One or both of your values in either not a number or not a')
    }
    do{
    again = prompt('do you want to run application again? (y/n)')
    alert(again !== 'y')
    
    }while(( again !== 'y') && ( again !== 'n'))
}while(again == 'y')
console.log("application has exited.")

// alt + z --- wrapt texr 


// todo 
// if cancle clicked exit excuting game??