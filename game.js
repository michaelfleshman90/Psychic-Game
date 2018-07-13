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
    if (guessesLeft === 0) {
        playerLoses = playerLoses - 1;
    }
};
function update() {
    if (playerGuess === letterChosen) {
        text1 += "<br>Wins: " + 1;
    } else {
        text2 += "<br>Guesses left: " - 1;
    }
}
// player guesses reaches 0 then reset game.
if (playerGuesses === 0) {
    reset
}
document.getElementById("wins").innerHTML = text1;
document.getElementById("guessesLeft").innerHTML = text2;
