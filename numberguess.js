// Generate Secret Number Fuction
// It generates a 3 digit number with no 0 or digit repeatition
function generateSecretNumber() {
  let digits = []; // Initialize an empty array to contain numbers
  while (digits.length < 3) {
    // run this loop until the length of the array is less than 3
    let digit = Math.floor(Math.random() * 10); 
    // Create a random number within 0 & 9
    if (digits.length === 0 && digit === 0) continue; 
    //if its the first index or its first val is 0 skip iteration end loop start again
    if (!digits.includes(digit)) digits.push(digit);
    //if the current digit is not in array add it in
  }
  return digits.join('');
  //convert this digits array into a string
}

//call the gensecnum function
let secretNumber = generateSecretNumber();

let guessCount = 0;
const maxGuess = 10;

//Function to keep track of guesses
function checkGuess(){
    //Check input
    let userInput = document.getElementById("input").value;
    //Validate input
    if(userInput.length !== 3 || isNaN(userInput)){
        alert("Please enter a valid number");
        return;
    }

    //increase guess count 
    guessCount++;

    //Compare input and secret number
    let feedback="";
    let foundMatch = false;

    for(let i=0; i <3; i++){
        if(userInput[i] === secretNumber[i]){
            feedback += "Fermi";
            foundMatch = true;
        //If a digit matches in both value and position
        //Fermi
        }
        else if(secretNumber.includes(userInput[i])){
            feedback += "Pico";
            foundMatch = true;
        //If any value at any position is present in secret num
        }
    }
        // if no correct values
        if(!foundMatch){
            feedback = "Bagels";
        }

        document.getElementById('feedback').textContent = feedback;
        document.getElementById('remainingGuesses').textContent = `Guesses remaining: ${maxGuess - guessCount}`;


        //Game Over Conditions
        if(userInput === secretNumber){
            document.getElementById("win").textContent = "Congratulations! You Guessed it Right!"
           
            resetGame();
        }
        else if(guessCount >= maxGuess){
            document.getElementById("win").textContent = `Game Over! The number was ${secretNumber}`;
            resetGame();
        
            function resetGame() {
                console.log("Reset");
                secretNumber = generateSecretNumber();
                guessCount = 0;
                document.getElementById('input').value = "";
                document.getElementById('feedback').textContent = "";
                document.getElementById('remainingGuesses').textContent = `Guesses remaining: ${maxGuess}`;
                
            }
            
    }
}
function resetGame() {
    console.log("Reset");
    secretNumber = generateSecretNumber();
    guessCount = 0;
    document.getElementById('input').value = "";
    document.getElementById('feedback').textContent = "";
    document.getElementById('remainingGuesses').textContent = `Guesses remaining: ${maxGuess}`;
    document.getElementById("win").textContent = "";
}
