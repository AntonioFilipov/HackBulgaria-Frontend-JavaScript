var prompt = require('prompt');

function setWords()
{
    var array = [["car","Driving a _ _ _"],
                 ["elephant","Animal"],
                 ["cucumber","Vegetable"],
                 ["javascript","Programming language"],
                 ["hackbulgaria","Best programming accademy"]
                ];
    return array;
}

//returns random index from 0 to length of words` array
function getRandomIndex(wordCount) {
    return Math.floor(Math.random() * wordCount);
}

//returns random word from words` array
function getRandomWord(words){
    return words[getRandomIndex(words.length)];
}

//initialize empty array for the word that have to be found
function initializeFillWordArray(searchedWord){
    var wordToFill = new Array(searchedWord.length);
    for(var i=0;i<searchedWord.length;i++){
        wordToFill[i] = "_";
    }
    return wordToFill;
}

//fill array for the word that have to be found with letter
function fillWord(letter){
    var temp = 0;
    for(var i=0;i<searchedWord.length;i++){
        if(searchedWord[i]===letter){
            arrayToFill[i] = letter;
            temp = 1;
        }
        
    }
    if(temp===0){
        lifes--;
    }
}

function isWordsEqual(searchedWord, arrayToFill)
{
    var counter = 0;
    for(var i=0;i<searchedWord.length;i++){
        if(searchedWord[i]!=arrayToFill[i]){
            return false;
        }
    }
    return true;
}

function promptLetter(){
    prompt.get(['letter'], function (err, result) {
    var inputLetter = result.letter;

    if(lifes===1)
    {
        console.log("No more lifes");
        return;
    }
    else if (inputLetter.length != 1){
        console.log("Use letters!");
        console.log(arrayToFill);
        console.log("Lifes:",lifes);
        if(isWordsEqual(searchedWord,arrayToFill)){
        console.log("You win!");
        return;
        }
        promptLetter();
    }
    else{
        fillWord(inputLetter);
        console.log(arrayToFill);
        console.log("Lifes:",lifes);
        if(isWordsEqual(searchedWord,arrayToFill)){
        console.log("You win!");
        return;
        }
        promptLetter();
    }

    
    });

}
var lifes = 9;
var words = setWords();
var wordAndExplanation = getRandomWord(words);
var searchedWord = wordAndExplanation[0];
var searchedWordExplanation = wordAndExplanation[1];
console.log(searchedWordExplanation);
var arrayToFill = initializeFillWordArray(searchedWord);
console.log(arrayToFill);
prompt.start();
promptLetter();
