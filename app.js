//Black output =  That is a String
// Blue OUtput = That is a Number

// Game Function
// - Player must guess a number between a min and max 
// - Player gets  a certain amount of guesses
// -Notify player of guesses remaining
// - Notify the player of the correct answer if he losses
// - let player choose to play again

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI ELEMENTS
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Asiign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again Event Listener
game.addEventListener('mousedown',function(e){
if(e.target.className === 'play-again'){
    window.location.reload();
}
});

//Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value); // Blue Output = That is a Number

    //Validate 
    if (isNaN(guess) || guess < min || guess > max) {
       return setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    //Game over - Won

    //cheak if won
    if (guess === winningNum) {
        //Disable Input
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        //Set Message
        setMessage(`${winningNum} is correct You Won!!`, 'green');
         //Play Again?
         guessBtn.value = 'Play Again';
         guessBtn.className += 'play-again';
    }
    else {
        //Wrong Number
        guessesLeft -= 1;

        //Game Over  - Lost
        if (guessesLeft === 0) {
            //Disable Input
            guessInput.disabled = true;
            //Change border color
            guessInput.style.borderColor = 'red';

            //vhange text Color
            message.style.color = 'red';

            //Set Message
            setMessage(`Game Over, You Lost!!. The Correct number was ${winningNum} `, 'red');
           
            //Play Again?
            guessBtn.value = 'Play Again';
            guessBtn.className += 'play-again';
        } else {
            //Game Continous  -  Wrong answer 

            //Chang color to red
            guessInput.style.borderColor = 'red';

            // Clear the input
            guessInput.value = '';

            //Tell user to how many has left chances
            setMessage(`${guess} is not Correct , ${guessesLeft} guesses left `, 'red');

        }

    }



});

guessInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        guessBtn.click()
    }
});


//Get Wining Number
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}