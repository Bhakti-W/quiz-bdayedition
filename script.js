//DOM Elements
const startScreen = document.getElementById("start_screen");
const quizScreen = document.getElementById("quiz_screen");
const resultscreen = document.getElementById("result-scrn");
const startButton = document.getElementById("start_btn");
const questiontext = document.getElementById("ques_text");
const anscontainer = document.getElementById("ans-container");
const currentques = document.getElementById("current-ques");
const totalques = document.getElementById("total-ques");
const scoree = document.getElementById("score");
const finalscore = document.getElementById("final-score");
const maxscore = document.getElementById("max-score");
const resultmessage = document.getElementById("result-message");
const restartbtn = document.getElementById("restart-btn");
const progress = document.getElementById("progress");

// Quiz questions
const quizQuestions = [
  {
    question: "When is Tanya's Birthday",
    answers: [
      { text: "30th July", correct: false },
      { text: "30th August", correct: false },
      { text: "31st August", correct: true },
      { text: "29th August", correct: false },
    ],
  },
  {
    question: "When is parthvi's birthday?",
    answers: [
      { text: "30th May", correct: false },
      { text: "30th April", correct: true },
      { text: "29th April", correct: false },
      { text: "1st May", correct: false },
    ],
  },
  {
    question: "When is prisha's birthday?",
    answers: [
      { text: "11th Jan", correct: false },
      { text: "7th Jan", correct: false },
      { text: "12th Jan", correct: false },
      { text: "9th Jan", correct: true },
    ],
  },
  {
    question: "When is Dps birthday?",
    answers: [
      { text: "24th May", correct: false },
      { text: "26th April", correct: false },
      { text: "24th April", correct: true },
      { text: "28th April", correct: false },
    ],
  },
  {
    question: "When is disha's birthday?",
    answers: [
      { text: "28th June", correct: false },
      { text: "11th June", correct: false },
      { text: "19th June", correct: true },
      { text: "12th June", correct: false },
    ],
  },
   {
    question: "When is sneha's birthday?",
    answers: [
      { text: "10th May", correct: true },
      { text: "10th April", correct: false },
      { text: "11th May", correct: false },
      { text: "12th May", correct: false },
    ],
  },

 {
    question: "When is shreenidhi's birthday?",
    answers: [
      { text: "23rd March", correct: false },
      { text: "19th March", correct: true },
      { text: "20th March", correct: false },
      { text: "18th Feb", correct: false },
    ],
  },
 {
    question: "When is rahini's birthday?",
    answers: [
      { text: "24th october", correct: false },
      { text: "2nd August", correct: false },
      { text: "21st November", correct: false },
      { text: "23rd October", correct: true },
    ],
  },
 {
    question: "When is Aanya's birthday?",
    answers: [
      { text: "8th Jan", correct: false },
      { text: "11th Jan", correct: false },
      { text: "6th Jan", correct: true },
      { text: "7th Jan", correct: false },
    ],
  },

 {
    question: "When is arya's birthday?",
    answers: [
      { text: "id remember myself T_T", correct: false },
      { text: "id remember myself T_T", correct: false },
      { text: "id remember myself T_T", correct: true },
      { text: "id remember myself T_T", correct: false },
    ],
  },
];

//Quiz state vars
let currentQuesindex=0;
let score = 0
let answerDisabled= false;
totalques.textContent= quizQuestions.length;
maxscore.textContent=quizQuestions.length
// event listeners
startButton.addEventListener("click", startQuiz)
restartbtn.addEventListener("click", restartQuiz)

function startQuiz(){
    currentQuesindex=0;
    score=0;
    scoree.textContent=score
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}
function showQuestion(){
    answerDisabled=false
    const currentques=quizQuestions[currentQuesindex]
    currentques.textContent=currentQuesindex+1
    const progressPercent=(currentQuesindex/quizQuestions.length)*100
    progress.style.width=progressPercent+"%"

    questiontext.textContent=currentques.question;
    anscontainer.innerHTML="";

    currentques.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.textContent=answer.text
        button.classList.add("answer-btn"); 
        //what is dataset? property of the button element that allows you to store custom data
        button.dataset.correct= answer.correct
        button.addEventListener("click",selectAnswer)
        anscontainer.appendChild(button);
    }
    );
}
    function selectAnswer(event){
          if(answerDisabled) return
        answerDisabled= true
        const selectedbutton = event.target;
        const isCorrect= selectedbutton.dataset.correct==="true";

        Array.from(anscontainer.children).forEach((button)=> {
            if (button.dataset.correct==="true") {
                button.classList.add("correct");
            }
            else if(button===selectedbutton){
                button.classList.add("incorrect");
            }
        });
        if(isCorrect){
            score++;
            scoree.textContent=score
        }
        setTimeout(()=>{
        currentQuesindex++;
        if(currentQuesindex<quizQuestions.length){
         showQuestion()
        } else{
            showResults()
        }   
        },1000)
    }
    function showResults(){
        quizScreen.classList.remove("active")
        resultscreen.classList.add("active")
        finalscore.textContent=score;
        const percentage =(score/quizQuestions.length)*100
        if (percentage==100)
        {
            resultmessage.textContent ="Letsgoo you remember everything"
        }
        else {
            resultmessage.textContent="lalat hai tujhpr how could u not remember???"
        }
    }

function restartQuiz(){
    resultscreen.classList.remove("active");
    startQuiz();
}


