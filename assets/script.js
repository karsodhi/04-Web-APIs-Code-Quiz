var questions = document.querySelector("#questions");
var timerHolder = document.querySelector("#timerHolder");
var answers = document.querySelector("#answers");
var submit = document.querySelector("#submit");
var start = document.querySelector("#start");
var initials = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");
var counterTimer;
var score = 0
var questionIndex = 0;
var questionsArray = [
    {
        question:"Arrays in Javascript can be used to store",
        choices:["numbers", "strings", "booleans", "all the above",],
        correctAnswer:"all the above"
    },
        {
            question:"Which method returns the length of a string",
            choices:["length()", "size()", "index()", "array()",],
            correctAnswer:"length()"
        },
        {
            question:"Inside which element do you put Javascript?",
            choices:["<var>", "<section>", "<footer>", "<script>",],
            correctAnswer:"<script>"
        },
        {
            question:"What is a element that represents TRUE or FALSE values",
            choices:["boolean", "array", "string", "condition",],
            correctAnswer:"boolean"
        },
        {
            question:"The condition in an if/else statement is enclosed with",
            choices:["curley brackets", "square brackets", "parenthesis", "quotation marks",],
            correctAnswer:"parenthesis"
        },
]
function startTime() {
    var timeInterval=setInterval(function(){
    counterTimer--;
    timerHolder.textContent=counterTimer;
    if (counterTimer === 0){
        clearInterval(timeInterval)
        // invoke function that loses the game. lose game()
        loseGame()
    }
        },1000)
}
function minusTimer() {
    counterTimer-=5
}
function loseGame() {
    localStorage.setItem("currentScore",score)
    // This is where I return my user to the end of the HTML (localstore.getitem)
}
start.addEventListener("click",startQuiz)
function startQuiz(){
    counterTimer=60;
    var startButton = document.getElementById("startDiv")
    startButton.style.display="none"
    startTime()
    runQuiz();
}
function runQuiz() {
    if (questionIndex === 5) {
        console.log('end game');
        // when the quiz is finished with time remaining
        //   capture the time remaining
        //  put time remaining in local storage
        //  and display high score

    } else {
        var choicesArea = document.querySelector('.answers');
        document.getElementById('questions').classList.remove('hide');
        var currentQuestion = questionsArray[questionIndex];
        var questionTitle = document.getElementById('question-title');
        questionTitle.textContent= currentQuestion.question;
        choicesArea.innerHTML= '';
        for (var i = 0; i < currentQuestion.choices.length; i++) {
            var option = currentQuestion.choices[i]
            var optionButton = document.createElement('button');
            optionButton.setAttribute('class', 'option')
            optionButton.setAttribute('value', option)
            optionButton.textContent = option
            answers.appendChild(optionButton)
        }
    }
}
function makeChoice(event) {
    if (event.target.value === questionsArray[questionIndex].correctAnswer) {
        console.log('correct')
    } else {
        console.log('incorrect')
    }
    questionIndex++
    runQuiz()
}
answers.onclick=makeChoice;

