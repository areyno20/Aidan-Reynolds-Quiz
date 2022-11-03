//Constants
const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-container')

//Start Game

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  startButton.classList.add('hide')
}


//Quiz Question Array
let questionOne = {
  question: "Which of the following keywords is used to define a variable in Javascript?",
  answer: ["let", "var",  "Both A and B", "None of the above"],
  correctAnswer: 3
};

let questionTwo = {
  question: "When an operator’s value is NULL, the type of returned by the unary operator is",
  answer: ["Object", "Boolean",  "Undefined", "Integer"],
  correctAnswer: 1 
};

let questionThree ={
  question: "How do we write a comment in javascript?",
  answer: ["**", "//",  "/* */", "-?"],
  correctAnswer: 2     
};

let questionFour ={
  question: "How can a datatype be declared to be a constant type?",
  answer: ["var", "let", "constant", "const"],
  correctAnswer: 4    
};

let questionFive ={
  question: "Which of the following methods is used to access HTML elements using Javascript?",
  answer: ["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the above"],
  correctAnswer: 3      
};
