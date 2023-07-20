//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenArray(arr){
    let newArr = arr.map((item) => item % 2 === 0);
}

//second solution
function evenArray(arr){
    let evens = [];

    arr.forEach((item) => {
        if(item % 2 === 0){
            evens.push(item);
        }
    })
    
    return evens;
}