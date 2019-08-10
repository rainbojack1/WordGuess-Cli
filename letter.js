function Letter(letter){
    this.letter = letter,
    this.guessed = false,
    this.replace = function(){
        if(this.guessed){
            return this.letter;
        }
        else{
            return "__";
        }
    },
    this.checkLetter = function(userGuess){
        if(this.letter === this.userGuess){
            this.guessed = true;
            this.replace();
        }
    }
}

/** A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly */

  module.exports = Letter;