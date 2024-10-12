let computerMove;

function computerMovement(){
    let num = Math.random();
    if(num >= 0 && num < 0.5){
        computerMove = 'heads';
    } else {
        computerMove = 'tails';
    }

    let gameResult  = document.querySelector('.js-result');
    let button = document.querySelector('.js-result');

    // Add the loader class to simulate flipping
    button.classList.add('loader');
    gameResult.innerHTML = ' ';
    
    // Simulate the delay for the coin flip animation
    setTimeout(() => {
        button.classList.remove('loader'); // Remove loader after 3 seconds

        // Show the result after the animation
        if (computerMove == 'heads') {
            gameResult.innerHTML = "Heads"; 
        } else {
            gameResult.innerHTML = "Tails"; 
        }
    }, 500);

    console.log(computerMove); // Log the computer's move for debugging
}
