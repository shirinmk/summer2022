// There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, and the number of years they would like to invest for. 

// Your job in this part of the assignment is to validate those entries. Within investment, the number should be numeric. Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.


// GLOBAL VARIABLE

let futureValue
let investment 
let rate 
let years 

// COLLECT THE VALUES FROM THE USER
do{
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'))
}while(isNaN(investment) )

do{
    rate = parseFloat(prompt('Enter interest rate as xx.x'))

}while(!((rate > 0) && (rate < 6)))
do{
    years = parseFloat(prompt('Enter the number years you plan on investing this money'))
}while(isNaN(years) || (years <0 || years >30))
// CALCULATE FUTURE VALUE
futureValue = investment
for(let i = 0; i < years ; i++){
    futureValue = futureValue + (futureValue * rate / 100)
}

// DISPLAY RESULTS
document.write(`Investment amount: $${investment.toFixed(2)} <br>` )
document.write(`interest rate: ${rate.toFixed(2)}  <br>`)
document.write(`years: ${years}  <br>`)
document.write(`Future value: $${futureValue.toFixed(2)}  <br>`)

// inside while be true loop is going on 