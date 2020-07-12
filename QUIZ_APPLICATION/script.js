const quiz = document.getElementById('quiz');
const results = document.getElementById('results');


const questions = [
    {
        id:1,
        question: " Which of the following is correct about Services?",
        answers: {
        1: "Angular 2 Services are a set of code that can be shared by different components of an application.",
        2: " Angular 2 Services cannot be used across multiple applications.",
        3: "Angular 2 Services help to build the applications into many modules.",
        4:"All of the above."
        },
        correctAnswer: "1"
    },
    {   
        id:2,
        question: "Which of the following is true?",
        answers: {
        1: "Angular 2 Service can be used to bring the modules together.",
        2: "Angular 2 Template can be used to bring the modules together.",
        3: "Angular 2 Component can be used to bring the modules together.",
        4: " None of the above."
        },
        correctAnswer: "3"
    },
    {   id:3,
        question: "Which of the following is correct about Import Array in Angular 2 Modules?",
        answers: {
        1: "Import array can be used to import the functionality from other Angular JS modules.",
        2: "Import array can be used to import the templates.",
        3: " Both of the above.",
        4: " None of the above."
      },
      correctAnswer: "1"
    },
    {   id:4,
        question: "Which of the following is correct about CLI?",
        answers: {
        1: "CLI stands for Command Line Interface.",
        2: "CLI can be used to create Angular JS application.",
        3: "It also helps in creating a unit and end-to-end tests for the application.",
        4: "All of the above."
      },
      correctAnswer: "4"
    },
    {   id:5,
        question: "Which of the following is the correct way to apply a filter?",
        answers: {
        1: "Property-value || filter.",
        2: "Property-value && filter.",
        3: "Property-value | filter. ",
        4: " None of the above."
      },
      correctAnswer: "3"
    }

  ];
  

  function buildQuiz(){
    const output = [];
  
    questions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
  
        for(number in currentQuestion.answers){
  
          answers.push(
            `
                <label>
              <input type="radio" name="question${questionNumber}" value="${number}">
              ${currentQuestion.answers[number]}
            </label>
            `
          );
        }
        output.push(
          `
          <div class="question"> ${currentQuestion.id}. ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>
          
          `
        );
      }
    
    );
    quiz.innerHTML = output.join('');
  }
  

function showResults(){

  

  const answers = quiz.querySelectorAll('.answers');


  var outting, out=[]

  
  questions.forEach( (currentQuestion, questionNumber) => {

    
    const answer = answers[questionNumber];
    const select = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answer.querySelector(select) || {}).value;

    outting={
      number : questionNumber,
      value : userAnswer
    };
    
    out.push(outting);
  
  }
  
  );


  localStorage.setItem("Output",JSON.stringify(out));
  calculateScore();
}

 
function calculateScore(){



  var outputt = JSON.parse(localStorage.getItem('Output'));

  let num= 0;

  var success = "passed";

  const answers = quiz.querySelectorAll('.answers');

  questions.forEach( (currentQuestion,questionNumber) =>{

  

  if(outputt[questionNumber].value == currentQuestion.correctAnswer){

    num++;
    answers[questionNumber].style.color = 'darkgreen';
    
  }
  else{
    answers[questionNumber].style.color = 'red';
  }
 }
  );
  if(num<3){
    success="failed";
  }
  results.innerHTML = "Results: " + `${num} out of 5.` + "Hence you have " + `${success}`+" the following quiz.";

}

buildQuiz();



