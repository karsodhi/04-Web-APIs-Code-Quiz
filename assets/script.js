var questions = document.querySelector("#questions");
var timerHolder = document.querySelector("#timerHolder");
var answers = document.querySelector("#answers");
var submit = document.querySelector("#submit");
var start = document.querySelector("#start");
var initials = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");
var counterTimer;
var timer;
var score = 0
var option= document.querySelector(".listoption")
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
    timer=setInterval(function(){
counterTimer--;
timerHolder.textContent=counterTimer;
if (counterTimer === 0){
    clearInterval(timer)
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
showQuestion1()
}
function showQuestion1(){
    var questionHolder = document.getElementById("question1")
    var question = document.createElement("h2")
    question.textContent=questionsArray[0].question
    questionHolder.prepend(question)
    // below is list items aka choices for question
    var choices=document.getElementById("choices1")
    for (var i=0;i<questionsArray[0].choices.length;i++){
        var listItem=document.querySelector(".answer"+i+1)
        listItem.setAttribute("id",questionsArray[0].choices[i])
        listItem.textContent=questionsArray[0].choices[i]
        choices.append(listItem)


    }
}
    //check which choice user picked and do something
    function gradeAnswer(e){
        console.log("click")
        if(e.target.id === questionsArray[0].correctAnswer){
            score += 10 //add whatever score
            // User selected the correct answer 
            console.log("Correct!");
            showQuestion2()
        } else {
            showQuestion2()
            minusTimer()
            // user selected the wrong answer
            console.log("Wrong!");
        }
    }
    .addEventListener("click",gradeAnswer)
    
    function showQuestion2(){
        var questionHolder = document.getElementById("question2")
        var question = document.createElement("h2")
        question.textContent=questionsArray[1].question
        questionHolder.prepend(question)
        // below is list items aka choices for question
        var choices=document.getElementById("choices1")
        for (var i=0;i<questionsArray[1].choices.length;i++){
            var listItem=document.createElement("li")
            listItem.setAttribute("id",questionsArray[1].choices[i])
            listItem.textContent=questionsArray[1].choices[i]
            choices.append(listItem)
    
        }
    }
        // //check which choice user picked and do something
        // function gradeAnswer(e){
        //     if(e.target.id === questionsArray[1].correctAnswer){
        //         score += 10 //add whatever score
        //         showQuestion3()
        //     } else {
        //         showQuestion3()
        //         minusTimer()
        //     }
        // }

