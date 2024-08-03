const user = document.getElementById('userchoice');
const computer = document.getElementById('computerchoice');
const results = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    document.getElementById('userchoice').innerText = userChoice;
    generaterandom()
    getresults()
}))

/* the above function catches the click finds the button clicked 
and then passes the collected value to the userchoice
*/

function generaterandom(){
    computerChoice = Math.floor(Math.random() * 3 + 1)

    if(computerChoice == 1){
       computerChoice = 'ROCK';
    }
    if(computerChoice == 2){
        computerChoice = 'PAPER';
    }
    if(computerChoice == 3){
        computerChoice = 'SCISSORS';
    }
    document.getElementById('computerchoice').innerText = computerChoice;
}

function getresults(){
    if(computerChoice === userChoice){
        result = "It's a TIE!";
    }
    if(computerChoice === 'ROCK' && userChoice ==='PAPER'){
        result = "It's a WIN!";
    }
    if(computerChoice === 'PAPER' && userChoice === 'ROCK'){
        result = "You LOSE!";
    }
    if(computerChoice === 'PAPER' && userChoice === 'SCISSORS'){
        result = "You WIN!";
    }
    if(computerChoice === 'SCISSORS' && userChoice === 'PAPER'){
        result = "You LOSE!";
    }
    if(computerChoice === 'SCISSORS' && userChoice === 'ROCK'){
        result = "You WIN!";
    }
    if(computerChoice === 'ROCK' && userChoice === 'SCISSORS'){
        result = "You LOSE!";
    }

    document.getElementById('results').innerText = result;

}