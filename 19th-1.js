// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'apples';
favFood = 'chapati';
alert(favFood);


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'Burgers';
//alert (str[1]);
alert(str.charAt(1));


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(num1, num2, num3){
    alert((num1 / num2) * num3);
}
threeNums(6,3,2);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num){
    console.log(Math.cbrt(num).toFixed(4));
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthSeason(month){
    let monthLowerCase = month.toLowerCase();
    if(monthLowerCase === 'June' || monthLowerCase === 'July' || monthLowerCase === 'August'){
        alert("YAY");
    }else{
        alert("Boooo")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function numberFive(num){
    for(let i = 1; i <= num; i++){
        if(i % 5 !== 0){
            console.log(i);
        }
    }
}