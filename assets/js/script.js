// put button element in variable
var button = document.querySelector(".start-button");
var topContent = document.querySelector(".title-question");
var midContent = document.querySelector(".choices-result");
var botContent = document.querySelector(".extra-info");

// put questions in an arry
var questions = [
    "Commonly used data types DO Not Include:", //question 0
    "The condition in an if/else statement is enclosed with _______.", //question 1
    "Arrays in JavaScript can be used to store _______.", //question 2
    "String values must be enclosed within _______ when being assigned to variables.", //question 3
    "A very useful tool used during development and debugging fo printing content to the debugger is:" //question 4
];

// put answer choices in an arry
var choices0 = ["strings", "booleans", "alerts", "numbers"];
var choices1 = ["quotes", "curl brackets", "parenthesis", "square brackets"];
var choices2 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var choices3 = ["commas", "curly brackets", "quotes", "parenthesis"];
var choices4 = ["JavaScript", "terminal/bash", "for loops", "console.log"];


button.addEventListener("click", function() {
});