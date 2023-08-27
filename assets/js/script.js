// put elements in variable
var startButton = document.querySelector(".start-button");
var topContent = document.querySelector(".title-question");
var midContent = document.querySelector(".choices-result");
var botContent = document.querySelector(".extra-info");
var timer = document.querySelector(".timer");

//creating li elements for the questions
// var ulChoicesEl = document.createElement("ul"); 
var choice0El = document.createElement("li");
var choice1El = document.createElement("li");
var choice2El = document.createElement("li");
var choice3El = document.createElement("li");

choice0El.setAttribute("id", "choice0");
choice1El.setAttribute("id", "choice1");
choice2El.setAttribute("id", "choice2");
choice3El.setAttribute("id", "choice3");

var answer0 = choice0El;
var answer1 = choice1El;
var answer2 = choice2El;
var answer3 = choice3El;

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

// creating ol and ul element to be used when displying high scores or answer choices
var olScoreEl = document.createElement("ol")
var ulQuesEl = document.createElement("ul");

// object that stores high scores
var highScores = {};

// variable that stops the timer if set to true
var stopTimer = false;

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

        if (stopTimer) {
            timer.textContent = "Time: " + timeLeft;
            clearInterval(decreaseTime);
        };

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
        stopTimer = true;
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
        // var liEl = document.createElement("li");

        if (i === 0) {
            var liEl = choice0El;
        } else if (i ===1) {
            var liEl = choice1El;
        } else if (i ===2) {
            var liEl = choice2El;
        } else if (i ===3) {
            var liEl = choice3El;
        }

        liEl.textContent = choices[i];
        liEl.setAttribute("style", "cursor:pointer; text-align:left; margin:5px 0; display:block");
        // liEl.setAttribute("id", "choice" + i);
        ulQuesEl.appendChild(liEl);
    }

    // increase counter so when function is executed again, the next question will display
    questionCounter++;
}

// function that loads the final page with results and asks for initials
function showResults() {
    topContent.children[0].textContent = "All done!";
    midContent.children[0].textContent = "Your final score is " + timeLeft;
    ulQuesEl.remove();
    midContent.appendChild(labelEl);
    midContent.appendChild(inputEl);
    midContent.appendChild(submitButton);
}

// function that shows the page where the high scores are shown
function showHighScores() {
    topContent.children[0].textContent = "High Scores";

    highScores[inputEl.value] = timeLeft;
    var firstLast = Object.keys(highScores);
    var displayScore = Object.values(highScores);
    midContent.children[0].textContent = "";
    midContent.appendChild(olScoreEl);

     for (var x=0; x < firstLast.length; x++) { 
         var liScoreEl = document.createElement("li");
         liScoreEl.textContent = x + 1 + ". " + firstLast[x] + " - " + displayScore[x];
         liScoreEl.setAttribute("style", "text-align:left; margin:5px 0;");
         olScoreEl.appendChild(liScoreEl);
     };

    labelEl.remove();
    inputEl.remove();
    submitButton.remove();

    botContent.appendChild(goBackButton);
    botContent.appendChild(clearHighScoresButton);
    

}

function resetPage() {
    topContent.children[0].textContent = "Coding Quiz Challenge";
    midContent.children[0].textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    olScoreEl.innerHTML = "";
    olScoreEl.remove();
    goBackButton.remove();
    clearHighScoresButton.remove();
    botContent.appendChild(startButton);
}

// makes the start button interactive and starts timer and displays the first question
startButton.addEventListener("click", function() {
    stopTimer = false;
    countDown();
    midContent.appendChild(ulQuesEl);
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

goBackButton.addEventListener("click", resetPage);