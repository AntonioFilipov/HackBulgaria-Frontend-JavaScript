var prompt = require('prompt');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function findBullsCows(generatedNumber, inputNumber){
    var cows = 0;
    var bulls = 0;

    var digitsInGeneratedNumber = new Array();
    while(generatedNumber > 0){
        var digit = generatedNumber%10;
        generatedNumber = Math.floor(generatedNumber/10);
        digitsInGeneratedNumber.push(digit);
    }

    var digitsInInputNumber = [];
    while(inputNumber > 0){
        var digit = inputNumber%10;
        inputNumber = Math.floor(inputNumber/10);
        digitsInInputNumber.push(digit);
    }
    //Bulls
    for(var i=0;i<digitsInGeneratedNumber.length;i++){
        if (digitsInGeneratedNumber[i] === digitsInInputNumber[i]){
            ++bulls;
            digitsInGeneratedNumber[i] = -1;
            digitsInInputNumber[i] = -2;
        }
    }
    //Cows
    for(var i=0;i<digitsInGeneratedNumber.length;i++){
        for(var j=0;j<digitsInInputNumber.length;j++){
            if(digitsInGeneratedNumber[i]=== digitsInInputNumber[j]){
                ++cows;
            }
        }
    }

    console.log("Bulls:"+bulls);
    console.log("Cows:"+cows);
}

function promptNumber(){
    prompt.get(['number'], function (err, result) {
    var inputNumber = parseInt(result.number);
    if (result.number.length != 4){
        console.log("Incorect length");
        promptNumber();
    }
    else if(generatedNumber === inputNumber)
    {
        console.log("Success");
    }
    else{
        findBullsCows(generatedNumber,inputNumber);
        console.log("Try again!");
        promptNumber();
    }
    });

}
prompt.start();

var generatedNumber = parseInt(getRandomInt(1000,9999));
console.log("Generated number:"+generatedNumber);
promptNumber();
