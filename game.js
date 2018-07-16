var playerWins;
var playerLoses;
var guessesLeft = 9;
var lettersGuessed = [];
var gameReset;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length) + 1];

for (var i = 9; i < guessesLeft; i--) {
    document.onkeyup = function keylog(event) {
        letterGuessed.push(event.key);
        console.log(letterGuessed);
        document.getElementById("guesses").innerHTML += event.key + ",";
    };
    keylog(event);


    //player win counter +1, else guesses left -1
    function counters() {
        if (lettersGuessed === computerGuess) {
            playerWins = playerWins + 1;
            document.getElementById("wins").innerHTML = + 1;
        } else {
            guessesLeft = guessesLeft - 1;
            document.getElementById("guessesLeft").innerHTML = - 1;
        }
        //player lose if guesses =0
        if (guessesLeft === 0) {
            playerLoses = playerLoses + 1;
            document.getElementById("loses").innerHTML = + 1;
        }
    };
}
//document.getElementById("#wins").innerHTML = playerWins;
//document.getElementById("#guessesLeft").innerHTML = guessesLeft;
//document.getElementById("#loses").innerHTML = playerLoses;


// player guesses reaches 0 then reset game.
if (guessesLeft === 0) {
    gameReset
}
                                    


