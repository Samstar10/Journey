//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['Friends', 'Big bang theory', 'HIMYM'];
for(let i = 0; i < shows.length; i++){
    console.log(shows[i]);
}
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [2, 5, 7, 4, 9];
let newNums = nums.filter(item => item % 2 === 0)
alert(newNums);
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function arrNumbers(arr){
    let sorted = arr.sort((a,b) => a-b);
    alert(sorted[1]  + sorted[sorted.length -2]);
}
arrNumbers([7,9,4,8,2,3]);