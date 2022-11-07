//Constants
var startButton = document.getElementById('start-button')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')
var nextEl = document.getElementById('next')
var restartEl = document.getElementById('restart')
var timeLeft = document.getElementById("time-left");
var scoreEl = document.getElementById("user-score");
var finalEl = document.getElementById("final-score");
var questionCount;
var completeQuiz;
var count;

let shuffledQuestions, currentQuestionIndex


//Quiz Question Array
const questions = [ 
  {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      {text: "let", correct: false},
      {text: "var",  correct: false},
      {text: "Both A and B", correct: true},
      {text: "None of the above", correct:false},
    ],
  },
  
  {
    question: "When an operators value is NULL, the type of returned by the unary operator is:",
    answers: [
      {text: "Object", correct: true},
      {text: "Boolean",  correct: false},
      {text: "Undefined", correct: false},
      {text: "Integer", correct:false},
    ]
  },
  
  {
    question: "How do we write a comment in javascript?",
    answers: [
      {text: "**", correct: false},
      {text: "//",  correct: true},
      {text: "/* */", correct: false},
      {text: "-?", correct:false},
    ] 
  },
  
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      {text: "var", correct: false},
      {text: "let",  correct: false},
      {text: "constant", correct: false},
      {text: "const", correct:true},
    ] 
  },
  
  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      {text: "getElementbyId()", correct: false},
      {text: "getElementsByClassName()",  correct: false},
      {text: "Both A and B", correct: true},
      {text: "None of the above", correct:false},
    ]    
  }
  ]

//Start Game
function startQuiz() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide')
  restartEl.classList.remove('hide')
  setNextQuestion()
}


function setNextQuestion(){
  resetstate()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  if(completeQuiz == 0){
    var totalScore = $(".score").text()
    alert("quiz completed. Total Score is :", totalScore);
  }
}

//Showing Questions
function showQuestion(question){
  questionEl.innerText = question.question
  question.answers.forEach(answers => {
    const button = document.createElement('button')
    button.innerText = answers.text
    button.classList.add('btn')
    if(answers.correct){
      button.dataset.correct = answers.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsEl.appendChild(button)
  })
}

function resetstate() {
  nextEl.classList.add('hide')
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild
    (answerButtonsEl.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  nextEl.classList.remove('hide')
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct){
    element.classList.add('correct')
  }
  else {
    element.classList.add('wrong')
  }
}

function clearStatusClass (element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//Event Listeners
startButton.addEventListener('click', startQuiz)
nextEl.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

restartEl.addEventListener('click', () => {
  location.reload();
})


//Final Score Show



//Timer
function timer() {
  var t = 60;
  clearInterval(window.timerInterval);

  window.timerInterval = setInterval(function() {
    if (t >= 0) {
      document.getElementById("time-left").innerHTML = t;
      console.log(t);
      t--;
    } else {
      document.getElementById("time-left").innerHTML = "Time Up! Please Restart.";
      resetstate();
    }
  }, 1000);

}

//Scoreboard

let numCorrect = 0;

function scoreCheck(element, answers) {
  clearStatusClass(element)

console.log(numCorrect);
scoreEl.innerHTML = `${numCorrect} out of 5`;
}