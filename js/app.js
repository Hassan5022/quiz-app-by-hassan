var questionsArray = [
    {
        question: "Pakistan is located in Asia. What is the capital of Pakistan?",
        answer: "islamabad",
        options: [
            "Karachi",
            "Islamabad",
            "Lahore",
            "Quetta",
        ]
    },
    {
        question: "How many letters are there in Urdu alphabets?",
        answer: "37",
        options: [
            "32",
            "40",
            "37",
            "35",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "How many words are in national anthem?",
        answer: "50",
        options: [
            "43",
            "55",
            "52",
            "50",
        ]
    },
    {
        question: "The first nuclear power plant in Pakistan was established at?",
        answer: "karachi",
        options: [
            "Karachi",
            "Chashma",
            "Rawalpindi",
            "Lahore",
        ]
    },
];


function vlidate(){
    sessionStorage.clear();
    var input = document.getElementById("userName");
    if(input.value == "" || input.value == " "){
        alert("User Name Required!");
    }
    else {
        sessionStorage.setItem("name",input.value);
        startQuiz();
    }
}

function startTime(){
    var startingMin = 2;
    var time = startingMin * 60;
    var timerPara = document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timerPara.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}


function takeAgain(){
    window.location.href = "index.html";
}

var questionCount = 0;
var score = 0;
var currentAns = "";

function renderQuestion(x){
    var questionElement = document.getElementById("divQuestion");
    questionElement.innerHTML = "Q"+(x+1)+". "+questionsArray[x].question;
    var optionsElement = document.getElementsByClassName("divOption");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].innerHTML = questionsArray[x].options[i].toUpperCase();
    }
}

function putActiveClass(x){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
    optionsElement[x].classList.add("active");
}

function removeActiveClass(){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
}

function checkAnswer(x){
    var userAns = document.getElementsByClassName("active");
    if(userAns[0].innerHTML.toLocaleLowerCase() == questionsArray[x].answer){
        score += 10;
    }
}   

function showNextQuestion(){
    
    checkAnswer(questionCount);
    questionCount++;
    if(questionCount <= questionsArray.length-1){
        renderQuestion(questionCount);
    }
    removeActiveClass();
    setResult();
}

function showResult(){
    document.getElementById("result") = sessionStorage.getItem("userscore");
}


function startQuiz(){
    window.location.href = "quiz.html";
}

function setResult(){
    if(questionCount == questionsArray.length){
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}

function renderResult(){
    var cs = sessionStorage.getItem("userscore");
    result.innerHTML = "You scored "+ cs +" out of 50";

}