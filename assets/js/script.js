// put elements in variable
var startButton = document.querySelector(".start-button");
var topContent = document.querySelector(".title-question");
var midContent = document.querySelector(".choices-result");
var botContent = document.querySelector(".extra-info");
var timer = document.querySelector(".timer");
var ulEl = document.createElement("ul");

//timer variable
var timeLeft = 0;

// put questions in an arry
var questions = [
    "Commonly used data types DO Not Include:", //question 0
    "The condition in an if/else statement is enclosed with _______.", //question 1
    "Arrays in JavaScript can be used to store _______.", //question 2
    "String values must be enclosed within _______ when being assigned to variables.", //question 3
    "A very useful tool used during development and debugging fo printing content to the debugger is:" //question 4
];

// put answer choices in an object
// var choices = {
//     q0: ["strings", "booleans", "alerts", "numbers"],
//     q1: ["quotes", "curl brackets", "parenthesis", "square brackets"],
//     q2: ["numbers and strings", "other arrays", "booleans", "all of the above"],
//     q3: ["commas", "curly brackets", "quotes", "parenthesis"],
//     q4: ["JavaScript", "terminal/bash", "for loops", "console.log"]
// };

var choice0 = ["strings", "booleans", "alerts", "numbers"];
var choice1 = ["quotes", "curl brackets", "parenthesis", "square brackets"];
var choice2 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var choice3 = ["commas", "curly brackets", "quotes", "parenthesis"];
var choice4 = ["JavaScript", "terminal/bash", "for loops", "console.log"];


// function for the countdown
function countDown() {
    timeLeft = 75;
    var decreaseTime = setInterval(function() {
        timer.textContent = "Time: " + timeLeft;
        timeLeft--;

        if (timeLeft === 0) {
            timer.textContent = "Time: " + timeLeft;
            clearInterval(decreaseTime);
        };
    }, 1000);
}

function showQuesAnsw(questionCounter) {

    //adds question to the top
    topContent.children[0].textContent = questions[questionCounter];

    if (questionCounter === 0) {
        var choices = choice0;
    } else if (questionCounter === 1) {
        var choices = choice1;
    } else if (questionCounter === 2) {
        var choices = choice2;
    } else if (questionCounter === 3) {
        var choices = choice3;
    } else {
        var choices = choice4;
    }

    //putting answer choices into ul element

    for (var i=0; i<choices.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = choices[i];
        liEl.setAttribute("style", "cursor:pointer; text-align:left; margin:5px 0;");
        liEl.setAttribute("class", "choice-button");
        ulEl.appendChild(liEl);
    }

    
    //showing the answer choices
    midContent.children[0].remove();
    midContent.appendChild(ulEl);

    questionCounter++;
};

startButton.addEventListener("click", function() {
    countDown();
    var questionCounter = 0;
    showQuesAnsw(questionCounter);
    // topContent.children[0].textContent = questions[0];
    // for (var i=0; i<choices0.length; i++) {
    //     var liEl = document.createElement("li");
    //     liEl.textContent = choices0[i];
    //     liEl.setAttribute("style", "cursor:pointer; text-align:left; margin:5px 0;");
    //     liEl.setAttribute("class", "choice-button");
    //     ulEl.appendChild(liEl);
    // };
    // midContent.children[0].remove();
    // midContent.appendChild(ulEl);
    startButton.remove();
});


