function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    document.getElementById('randomNumber').innerText = "The Random Number is:" + randomNumber;
}


  