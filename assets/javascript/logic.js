//Grabbing elements
var startButton = document.getElementById("start-button");
var questionContainerElement = document.getElementById("questions-container");
var choicesContainerElement = document.getElementById("choices");
var startScreen = document.getElementById("start-screen");
var timerElement = document.getElementById("timer");
//put following 3 in HTML
var submitScore 
var playerInput = document.getElementById("user-name");
var scoreSubmitButton
var timeRemaining = 120;
var currentQuestion = 0;

//Setting up the timer
function countdown() {
    timeRemaining--;

    //Displays the timer on the screen and stops it at 0 seconds
    timerElement.textContent = parseInt(timeRemaining);
    if (timeRemaining <= 0) {
        clearInterval(timer);
     }
}

function startTimer () {
    startScreen.style.display = "none";
    startButton.style.display = "none";

    timerElement.textContent = timeRemaining;
    timer = setInterval(countdown, 1000);
}


//When user clicks the Start button, the startQuiz function will run.
startButton.addEventListener("click", startQuiz);

//All this stuff runs when the Start button is clicked.
function startQuiz() {
console.log("Started") //This told me I had the Start button working.
renderQuestion();
renderAnswers();
startTimer();
};

//Get questions and answers rendered onto the screen
function renderQuestion() {
    var questionToRender = questions[currentQuestion]
    questionContainerElement.textContent = questionToRender.questionText
};

function renderAnswers() {
    var question = questions[currentQuestion];
    var choicesToRender = question.choices;
    choicesToRender.forEach(function(choice, index) {
        var choiceElement = document.createElement("button");
        choiceElement.textContent = choice;
        choicesContainerElement.append(choiceElement);

        choiceElement.addEventListener("click", function(event) {
            event.preventDefault();
        })
    })
    console.log(choicesToRender)
}


//Check Answers
function checkAnswers() {


}
