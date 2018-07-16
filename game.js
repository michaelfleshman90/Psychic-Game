var playerWins;
var playerLoses;
var guessesLeft = 9;
var lettersGuessed = [];
var gameReset;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeyup = function keylog(event) {
    letterGuessed.push(event.key);
    console.log(letterGuessed);
    var x = letterGuessed;
    document.getElementById("guesses").innerHTML = x;
};
keylog(event);


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

//document.getElementById("#wins").innerHTML = playerWins;
//document.getElementById("#guessesLeft").innerHTML = guessesLeft;
//document.getElementById("#loses").innerHTML = playerLoses;
//if player guess isnt right push letter into lettersguessed array
function update() {
    
}
// player guesses reaches 0 then reset game.
if (guessesLeft === 0) {
    gameReset
}
                                    //would it be easier to call the function and have it write it on the html?


