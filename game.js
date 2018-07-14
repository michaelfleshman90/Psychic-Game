var playerWins;
var playerLoses;
var guessesLeft = 9;
var playerGuess = document.onkeyup();
var letterChosen;
var lettersGuessed = [];
var gameReset;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var i;
var letterChosen = alphabet[Math.floor(Math.random() * alphabet.length)];


function choice() {
    for (var i = 0; i < alphabet.length; i++)
        if ()
};
//player win counter +1, else guesses left -1
function counters() {
    if (playerGuess === letterChosen) {
        playerWins = playerWins + 1;
    break
    } else {
        guessesLeft = guessesLeft - 1;
    }
    //player lose if guesses =0
    if (guessesLeft === 0) {
        playerLoses = playerLoses - 1;
    }
};
document.getElementById("#wins").innerHTML = + 1;
document.getElementById("#guessesLeft").innerHTML = - 1;
document.getElementById("#loses").innerHTML = + 1;
//if player guess isnt right push letter into lettersguessed array
function update() {
    if (playerGuess ==! letterChosen) {
        lettersGuessed_push(lettersGuessed, playerGuess);
        
    }
}
// player guesses reaches 0 then reset game.
if (guessesLeft === 0) {
    gameReset
}
                                    //would it be easier to call the function and have it write it on the html?


document.onkeyup = function() {choice()}