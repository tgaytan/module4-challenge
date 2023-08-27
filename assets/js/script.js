// put elements in variable
var startButton = document.querySelector(".start-button");
var topContent = document.querySelector(".title-question");
var midContent = document.querySelector(".choices-result");
var botContent = document.querySelector(".extra-info");
var timer = document.querySelector(".timer");
var ulEl = document.querySelector("ul");

var answer0 = document.getElementById("choice0");
var answer1 = document.getElementById("choice1");
var answer2 = document.getElementById("choice2");
var answer3 = document.getElementById("choice3");

// create button elements and store in variable
var submitButton = document.createElement("button");
var goBackButton = document.createElement("button");
var clearHighScoresButton = document.createElement("button");

    // add attribute to buttons. grouped by attributes
    submitButton.setAttribute("id", "submit");
    goBackButton.setAttribute("id", "go-back");
    clearHighScoresButton.setAttribute("id", "clear-scores");
    submitButton.setAttribute("type", "button");
    goBackButton.setAttribute("type", "button");
    clearHighScoresButton.setAttribute("type", "button");

    //add content to buttons
    submitButton.textContent = "Submit";
    goBackButton.textContent = "Go Back";
    clearHighScoresButton.textContent = "Clear High Scores";

// creating input and label elements for results page for user to type initials
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
labelEl.setAttribute("for", "initials");
labelEl.textContent = "Enter initials: ";
inputEl.setAttribute("type", "text");
inputEl.setAttribute("id", "initials");
inputEl.setAttribute("name", "name");

// object that stores high scores
var highScores = {};

//determines which question and answer choices to display. 0 is for first question
var questionCounter = 0;

//timer variable
var timeLeft = 0;

// put questions in an arry
var questions = [
    "Commonly used data types DO Not Include:", //question 0
    "The condition in an if/else statement is enclosed with _______.", //question 1
    "Arrays in JavaScript can be used to store _______.", //question 2
    "String values must be enclosed within _______ when being assigned to variables.", //question 3
    "A very useful tool used during development and debugging for printing content to the debugger is:" //question 4
];

// put answer choices in an array
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

// function that is responsible of displaying the question, along with its answer choices
function showQuesAnsw() {

    //this code block will occur after the user has answered the final question
    if (questionCounter === 5) {
        showResults();
        return;
    }

    //displays the question
    topContent.children[0].textContent = questions[questionCounter];

    //determines which array of answers choices to use, depending on the questionCounter variable
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

    // putting answer choices into li element and displaying it
    for (var i=0; i<choices.length; i++) {
        var liEl = document.getElementById("choice" + i);
        liEl.textContent = choices[i];
        liEl.setAttribute("style", "cursor:pointer; text-align:left; margin:5px 0; display:block");
    }

    // increase counter so when function is executed again, the next question will display
    questionCounter++;
}

// function that loads the final page with results and asks for initials
function showResults() {
    topContent.children[0].textContent = "All done!";
    midContent.children[0].textContent = "Your final score is " + timeLeft;
    ulEl.remove();
    midContent.appendChild(labelEl);
    midContent.appendChild(inputEl);
    midContent.appendChild(submitButton);
}

// function that shows the page where the high scores are shown
function showHighScores() {
    topContent.children[0].textContent = "High Scores";
    botContent.appendChild(goBackButton);
    botContent.appendChild(clearHighScoresButton);
    highScores[inputEl.value] = timeLeft;


}



// makes the start button interactive and starts timer and displays the first question
startButton.addEventListener("click", function() {
    countDown();
    startButton.remove();
    midContent.children[0].textContent = "";
    questionCounter = 0;
    showQuesAnsw();
});

// makes each answer choice interactive
answer0.addEventListener("click", showQuesAnsw);
answer1.addEventListener("click", showQuesAnsw);
answer2.addEventListener("click", showQuesAnsw);
answer3.addEventListener("click", showQuesAnsw);

// will save the initials to high score
submitButton.addEventListener("click", showHighScores);