//Create an array of movie titles. Loop through the array add each element to the h2.
let movieTitles = ['F & F', 'HIMYM', 'Friends'];
for (let i = 0; i < movieTitles.length; i++){
    document.querySelector('h2').innerText += movieTitles[i];
}

//Create an array of numbers. Loop through the array add three to each number and replace the old number.
let arr = [2, 4, 5];
arr.forEach((num, i) => {
    arr[i] = num + 3;
});

//Find the average of all the numbers from question 2
let sum = 0;

for(let i = 0; i < nums.length; i++){
    sum += nums[i];
}
console.log(sum / nums.length);