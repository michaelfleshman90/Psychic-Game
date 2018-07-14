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


function choice() {
    for (var i = 0; i < alphabet.length; i++)
        lettersGuessed = lettersGuessed + .onkeyup;
};
//player win counter +1, else guesses left -1
function counters() {
    if (playerGuess === letterChosen) {
        playerWins = playerWins + 1;
    } else {
        guessesLeft = guessesLeft - 1;
    }
    //player lose if guesses =0
    if (guessesLeft === 0) {
        playerLoses = playerLoses - 1;
    }
};
//if player wins updates the page +1
function update() {
    if (playerGuess === letterChosen) {
        text += "<br>#wins" + 1;
        //text1 += "<br>Wins: " + 1;
    } else if (playerGuess ==! letterChosen) { //if not player guess -1
        lettersGuessed_push(lettersGuessed, playerGuess)
        text += "<br>#guessesLeft" - 1;
        //text2 += "<br>Guesses left: " - 1;
    }
}
// player guesses reaches 0 then reset game.
if (guessesLeft === 0) {
    gameReset
}
                                    //would it be easier to call the function and have it write it on the html?
document.getElementById("#wins").innerHTML = + 1;
document.getElementById("#guessesLeft").innerHTML = - 1;
document.onkeyup = function() {choice()}