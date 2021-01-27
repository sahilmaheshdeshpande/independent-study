(function() {


  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

var words = ["Hi,How are you? ", "Hello world","Hello from a function", "This is my first function exercise","I love Python", "Python is coolest programming language"];
var a = randomNumber(0, words.length);
var X = words[a];
if(a == words.length-1)
  var Y = words[a-1];
else
  var Y = words[a+1];

var state = ["Washigton","California","Arizona","Nevada", "Texas", "New Jersey","virginia","Maryland","Florida"];
var b = randomNumber(0, state.length);
var Z = state[b];
if(a == state.length-1)
  var Q = state[b-1];
else
  var Q = state[b+1];


var fruits = ['apple', 'banana', 'cherry','strawberry', 'orange', 'mango'];
var c = randomNumber(0,fruits.length);
var len = fruits.length

if(c > len-3)
  c = c-3;

var X1 = fruits[c];
var Y1 = fruits[c+1];
var Z1 = fruits[c+2];

var list = [X1,Y1,Z1];


var d = randomNumber(0,10);

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

var e = randomNumber(-5,10);

var ans = fibonacci(e);


  const myQuestions = [
    {

      question: ' def my_function(): <br> \b \b \b print(\" '+X+'\")',
      answers: {
        a: X,
        b: Y,
        c: "Syntax Error",
        d: "None of the Above"
      },
      correctAnswer: X
    },
    {

      question: ' def my_function(): <br> \b \b \b print(\" '+X+'\") <br> <br> <br> my_function()',
      answers: {
        a: X,
        b: Y,
        c: "Syntax Error",
        d: "None of the Above"
      },
      correctAnswer: X
    },

    {

      question: ' def my_function(state = "New York"): <br> \b \b \b print(\"I am from \" + state)<br> <br> <br> my_function()',
      answers: {
        a: 'I am from '+Z+'',
        b: 'I am from '+Q+'',
        c: "Syntax Error",
        d: "I am from New York"
      },
      correctAnswer: "I am from New York"
    },
    {

      question: ' def my_function(state = "New York"): <br> \b \b \b print(\"I am from \" + state)<br> <br> <br> my_function(\"'+Z+'\")',
      answers: {
        a: 'I am from '+Z+'',
        b: 'I am from '+Q+'',
        c: "Syntax Error",
        d: "I am from New York"
      },
      correctAnswer: 'I am from '+Z+''
    },
    {

      question: ' def my_function(state = "New York"): <br> \b \b \b print(\"I am from \" + state)<br> <br> <br> my_function(\"'+Q+'\")',
      answers: {
        a: 'I am from '+Z+'',
        b: 'I am from '+Q+'',
        c: "Syntax Error",
        d: "I am from New York"
      },
      correctAnswer: 'I am from '+Q+''
    },
    {

      question: ' def my_function(food): <br> \b \b \b for x in food: <br> \b \b \b \b print(x) <br> <br> fruits = [\"'+X1+'\",\"'+Y1+'\",\"'+Z1+'\"] <br> <br> my_function(fruits)',
      answers: {
        a: '[\''+X1+'\',\''+Y1+'\',\''+Z1+'\']',
        b: ''+X1+' '+Y1+' '+Z1+'',
        c: "orange banana mango",
        d: "['strawberry', 'banana', 'orange']"
      },
      correctAnswer: ''+X1+' '+Y1+' '+Z1+''
    },
    {

      question: ' def my_function(x): <br> \b \b \b return x * x  <br> <br> <br> print(my_function('+d+'))',
      answers: {
        a: d*d,
        b: d,
        c: "Error",
        d: d*2
      },
      correctAnswer: d*d
    },
    {

      question: ' def nthFibonacci(n): <br> \b \b \b if n<=1: <br> \b \b \b \b return 1   <br> <br> \b \b \b return nthFibonacci(n-1)+ nthFibonacci(n-2) <br> <br> print(nthFibonacci('+e+'))',
      answers: {
        a: ans,
        b: e,
        c: "Incorrect Input",
        d: ans+ans
      },
      correctAnswer: ans
    },




  ];

  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
  }

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
      console.log(typeof(currentQuestion.answers));
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${currentQuestion.answers[letter]}">

              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // var shuffledanswers = shuffle(currentQuestion.answers)
      // var options = [a, b, c, d]
      // // var ans = {}
      // // for (var i = 0; i < shuffledanswers.length; i++) {
      // //   shuffledanswers[i]
      // // }
      // for (var i = 0; i < shuffledanswers.length; i++) {
      //   answers.push(
      //     `<label>
      //         <input type="radio" name="question${questionNumber}" value="${options[i]}">
      //          ${options[i]} :
      //          ${shuffledanswers[i]}
      //      </label>`
      //   );
      // }

      // add this question and its answers to the output
      //shuffle(myQuestions);
      shuffle(answers);
      output.push(
        `<div class="slide w3-code notranslate">
           <div class="question w3-code notranslate"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      console.log(userAnswer);
      console.log("___________________");
      console.log(currentQuestion.correctAnswer);
      console.log(typeof(userAnswer));
      console.log("******");
      console.log(typeof(currentQuestion.correctAnswer));
      if (userAnswer === currentQuestion.correctAnswer.toString()) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
