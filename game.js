var playerWins = 0;
var playerLoses = 0;
var guessesLeft = 9;
var letterGuessed = [];
var gameReset;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length) + 1];
    //key up event function
document.addEventListener("keyup", function(event) {
    //push the guess into letterGuessed array
    letterGuessed.push(event.key);
    //adds the guess to the html page
    document.getElementById("guesses").innerHTML += event.key + ",";
    //calls the counter function
    counters(event.key);
});
//reset game
function gameReset() {
    //get another random number when game reset
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length) + 1];
    //reset guesses to 9
    guessesLeft = 9;
    //updates wins if player wins
    document.getElementById("wins").innerHTML = playerWins;
    //updates guesses left 
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    //updates loses if player loses
    document.getElementById("loses").innerHTML = playerLoses;
    //resets guesses
    document.getElementById("guesses").innerHTML = "";
}
    
//counter function for wins loses and guessesleft
function counters(letter) {
    if (letter == computerGuess) {
        playerWins = playerWins + 1;
        //update the wins if player wins
        document.getElementById("wins").innerHTML = playerWins;
        alert("you win");
        //reset if game is won
        gameReset();
    } else {
        //guesses count down
        guessesLeft = guessesLeft - 1;
        //updates the guesses 
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }
    //player lose if guesses game lost
    if (guessesLeft === 0) {
        //player loses + 1
        playerLoses = playerLoses + 1;
        //updates the loses if the player loses
        document.getElementById("loses").innerHTML = playerLoses;
        alert("You lose\n the letter was " + computerGuess);
        //reset if player guesses =0
        gameReset();
    }
    };







                                    


