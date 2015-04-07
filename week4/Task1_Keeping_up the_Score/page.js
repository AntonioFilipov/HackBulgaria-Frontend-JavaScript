document.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM fully loaded and parsed");


var paragraphA = document.createElement("h1");
var scoreA = 0;
var textParagraphA = document.createTextNode("Team A Score "+scoreA);
paragraphA.appendChild(textParagraphA);
var buttonA = document.createElement("button");
var textA = document.createTextNode("Team A!");
buttonA.appendChild(textA);

var paragraphB = document.createElement("h1");
var scoreB = 0;
var textParagraphB = document.createTextNode("Team B Score "+scoreB);
paragraphB.appendChild(textParagraphB);
var buttonB = document.createElement("button");
var textB = document.createTextNode("Team B!");
buttonB.appendChild(textB);

var div = document.getElementById("container");
div.appendChild(paragraphA);
div.appendChild(buttonA);
div.appendChild(paragraphB);
div.appendChild(buttonB);

buttonA.onclick = function(event){
    scoreA += 1;
    paragraphA.firstChild.data = "Team A Score "+ scoreA;
}

buttonB.onclick = function(event){
    scoreB += 1;
    paragraphB.firstChild.data = "Team B Score "+ scoreB;
}
});

//first try

// document.addEventListener("DOMContentLoaded", function(event) {
// console.log("DOM fully loaded and parsed");


// var paragraphA = document.createElement("p");
// var scoreA = 0;
// paragraphA = document.createTextNode("Team A Score "+scoreA);
// var buttonA = document.createElement("button");
// var textA = document.createTextNode("Team A!");
// buttonA.appendChild(textA);

// var paragraphB = document.createElement("p");
// var scoreB = 0;
// paragraphB = document.createTextNode("Team B Score "+scoreB);
// var buttonB = document.createElement("button");
// var textB = document.createTextNode("Team B!");
// buttonB.appendChild(textB);

// var div = document.getElementById("container");
// div.appendChild(paragraphA);
// div.appendChild(buttonA);
// div.appendChild(paragraphB);
// div.appendChild(buttonB);

// buttonA.onclick = function(event){
//     scoreA += 1;
//     paragraphA = document.createTextNode("Team A Score "+scoreA);
//     alert(paragraphA.textContent);
// }

// buttonB.onclick = function(event){
//     scoreB += 1;
//     paragraphB = document.createTextNode("Team A Score "+scoreB);
//     alert(paragraphB.textContent);
// }
// });


