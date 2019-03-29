// Psueo code hangman:

// Create a function to start the game. When the player presses a key, this will start the game. When the game starts, underscores will appear. The number of underscores equals the number of letters in the word that the user is trying to guess.

document.onkeypress = function(event) {

}

// Create variables that hold references to the places in the HTML where we want to display things.
var gameText = document.getElementById("gameText");
var guessesRemaining = document.getElementById("guessesRemaining");
var guessedLetters = document.getElementById("guessedLetters");
var totalWins = document.getElementById("totalWins");


// Create a list of words for the computer to choose

var words = [
    "beach",
    "ocean",
    "coconut",
    "fish",
    "vacation",
    "sunshine"
];
console.log(words);

// Have computer randomly select from list of words which word will be used in the game using math.random function. 

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// Create empty array and fill with underscores to match the number of letters in word. Create different div and replacing inner text when user guesses correct.

var answerArray = [];
    for (i=0; i < word.length; i++) {
        answerArray[i] = "_";
        var letterSpace = document.createElement("span");
    }


var remainingLetters = word.length;

// While the word has not been guessed {
    // show the player their current progress (fill in letters )

    while (remainingLetters > 0) {

// get a guess from the player }
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
// If  (player wants to quit the game) {
    // quit the game - or "break"; }
    if (guess === null) {
        break;
    }

// Else if the guess is not a single letter {
    // prompt/tell player to pick only one letter }
    else if (guess.length !== 1){
        alert("Please enter a single letter.")
    }
// Else {
    // if player's letter guess is in the word {
        // update _ with correct letter; and 
        // update player's progress (show number of guesses remaining and show which letters the user has already guessed) }
        // Record the letters that the user has guessed

    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            System.out.print(answerArray[j]);
            
        }
    }
}
    



// Create a variable that defines how many guesses the player is allowed to have.

var maxGuesses = 10;

// Create a loop that will decrease by 1 how many guesses are left. Then show in HTML the number of guesses remaining
