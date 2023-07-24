// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'Christmas';
favHoliday = favHoliday.toUpperCase();
console.log(favHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'potatoes';
let lastCharacters = str.slice(-3);
alert(lastCharacters);
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNums(n1, n2, n3, n4, n5){
    let result = Math.abs(100 - (n1 + n2 + n3 + n4 + n5));
    alert(result);
}
fiveNums(5, 4, 42, 36, 39);


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNums(num1, num2, num3){
    let maxValue = Math.max(num1, num2, num3);
    let minValue = Math.min(num1, num2, num3);
    console.log(`The lowest number is ${minValue} and the highest number is ${maxValue}`);
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsAndTails(){
    let result = Math.random();
    if (result < 0.5){
        return 'heads';
    }else{
        return 'tails';
    }
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipNumTimes(n){
    for(let i = 1; i<= n; i++){
        let result = headsAndTails();
        console.log(result);
    }
}
flipNumTimes(10);