var Letter = require("./letter.js");

var wordArr = process.argv[2].split('');

function Word(){
    this.letterArr = [],
    this.createString = function(){
        
        for (let i = 0; i < wordArr.length; i++) {
            this.letterArr.push(new Letter(wordArr[i]).replace());
        }
       //console.log(this.letterArr);
       let hiddenWord = this.letterArr.slice().join(" ");
       //console.log(hiddenWord);
       return hiddenWord;
    },
    this.checkGuess = function(guess){
        Letter.checkGuess();
    }
}

// var check = new Letter(process.argv[2]);
// check.print();
//console.log(wordArr);
var check2 = new Word();
check2.createString();

/*  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`) */