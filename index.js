const simple = [
    {
        quation: "What does HTML stand for?",
        option: [
            { text: "HyperText Markup Language", correct:"true" },
            { text: "HighText Machine Language", correct:"false"},
            { text: "Hyperlink and Text Markup Language", correct:"false"},
            { text: "Home Tool Markup Language", correct:"false"},
        ]
    },
    {
        quation: "What does CSS stand for?",
        option: [
            { text: "Creative Style Sheets", correct:"false"},
            { text: "Cascading Style Sheets", correct: "true" },
            { text: "Computer Style Sheets", correct:"false"},
            { text: "Colorful Style Sheets", correct:"false"},
        ]
    },
    {
        quation: "Which programming language is used to create web pages dynamically?",
        option: [
            { text: "Java", correct:"false"},
            { text: "Python", correct:"false"},
            { text: "JavaScript", correct: "true" },
            { text: "C++", correct:"false"},
        ]
    },
    {
        quation: "Which company developed the React library?",
        option: [
            { text: "Microsoft", correct:"false"},
            { text: "Google", correct:"false"},
            { text: "Facebook", correct: "true" },
            { text: "Apple", correct:"false"},
        ]
    },
    {
        quation: "What does SQL stand for?",
        option: [
            { text: "Simple Query Language", correct:"false"},
            { text: "Structured Query Language", correct: "true" },
            { text: "Standard Query Language", correct:"false"},
            { text: "Sequential Query Language", correct:"false"},
        ]
    },
]

const quation = document.querySelector(".quation");
const answer = document.querySelector(".answer-button");
const next = document.querySelector(".next button");

let currentIndex = 0 ;
let currentScore = 0 ;

function startQuiz(){
    currentIndex = 0;
    score = 0 ;

    showQuiz();
}

function showQuiz(){
    resetState();
    const content = simple[currentIndex];
    const indexNumber = currentIndex + 1 ;
    quation.innerHTML = indexNumber + "." + content.quation;

    content.option.forEach(data => {
        const button = document.createElement("button");
        button.innerHTML = data.text;
        button.classList.add("btn");
        answer.appendChild(button);
        if(data.correct){
            button.dataset.correct = data.correct ;
        }
        button.addEventListener("click" , selectAnswer)
    });
}

function resetState(){
    next.style.display = "none";
    while(answer.firstChild){
        answer.removeChild(answer.firstChild);
    }
}

function selectAnswer(e){
   const selectBtn = e.target;
   const correct = selectBtn.dataset.correct === "true";
   console.log(correct);
   if(correct){
      selectBtn.classList.add("correct");
      score++ ;
    }else{
        selectBtn.classList.add("inCorrect");
   }
   Array.from(answer.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
   });
   next.style.display = "block";
}

function showScore(){
    resetState();
    quation.innerHTML = `You Scored ${score} out of ${simple.length}!`
    next.innerHTML = "Play Again"
    next.style.display = "block";
}

function nextHandle(){
    currentIndex ++ ;
    if(currentIndex < simple.length){
        showQuiz();
    }else{
        showScore();
        currentIndex = -1;
        score = 0;
    }
}

next.addEventListener("click" , nextHandle)

startQuiz();