//Constants
var startButton = document.getElementById('start-button')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')
var nextEl = document.getElementById('next-button')
var restartEl = document.getElementById('restart')
var timeLeft = document.getElementById("time-left");
var questionCount;
var scoreCount = 0;
var count = 10;
var countdown;

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
    question: "When an operator’s value is NULL, the type of returned by the unary operator is:",
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

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide')
  nextEl.classList.remove('hide')
  restartEl.classList.remove('hide')
  setNextQuestion()
}


function setNextQuestion(){
  resetstate()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//Showing Questions
function showQuestion(question){
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct = answer.correct
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

function clearStatusClass (){

}

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count} seconds`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};
