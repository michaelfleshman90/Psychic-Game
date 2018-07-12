var playerWins;
var playerLoses;
var guessesLeft = 9;
var playerGuess;
var letterChosen;
var lettersGuessed = [];
var gameReset;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var i;
var letterChosen = alphabet[Math.floor(Math.random() * alphabet.length)];


function counters() {
    if (playerGuess === letterChosen) {
        playerWins = playerWins + 1;
    } else {
        guessesLeft = guessesLeft - 1;
    }
};
function update() {
    
}
// player guesses reaches 0 then reset game.
if (playerGuesses === 0) {
    reset
}
