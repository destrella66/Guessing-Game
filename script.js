let answer = Math.floor(Math.random() * 10 + 1)

let guesses = 0; 

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guess = Number(guess);
    guesses+=1; 
    if(guess == answer){
        alert(`${answer} is the number.  It took you ${guesses} guesses.`)
        guesses = 0; 
        answer = Math.floor(Math.random() * 10 + 1); 
    }
    else if(guess <= 0 || guess >10){
        alert("Please, make sure to pick a number between 1 - 10!")
    }
    else if(guess < answer){
        alert("Too small")
        
    }
    else{
        alert("Too large!")
    }
}