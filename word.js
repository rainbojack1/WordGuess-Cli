var Letter = require("./letter.js");

// var wordArr = process.argv[2].split('');
var wordArr = ['a', 'p', 'p', 'l', 'e'];
var letterArr = [];
var hiddenWord = "";

function Word(){
    this.createString = function(){
        for (let i = 0; i < wordArr.length; i++) {
            letterArr.push(new Letter(wordArr[i]).replace());
        }
       this.updateString();
    },
    this.checkGuess = function(guess){
        var temp = new Letter(guess);
        for (let i = 0; i < wordArr.length; i++) {
            if(wordArr[i] === temp.letter) {
                temp.guessed = true;
                temp.checkLetter(wordArr[i]);
                letterArr[i] = guess;
            }
        }
        this.updateString();
    },
    this.updateString = function(){
        hiddenWord = letterArr.slice().join(" ");
        console.log(hiddenWord);
        return hiddenWord;
    }
}

// var check = new Letter(process.argv[2]);
// check.print();
//console.log(wordArr);
var check2 = new Word();
check2.createString();
check2.checkGuess(process.argv[2]);


/*  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`) */

module.exports = Word;
