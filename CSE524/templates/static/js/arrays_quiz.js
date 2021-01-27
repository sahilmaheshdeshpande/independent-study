(function() {


  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

  var words = ['Ford', 'Volvo', 'BMW','Audi', 'Toyota', 'Tesla'];
  var a = randomNumber(0,words.length);
  var len = words.length

//For question 2
  var index = randomNumber(0,2);
  var indx1,indx2;
  if(index = 2)
  {
    indx1 = 1;
    indx2 = 0;
  }
  if(index = 0)
  {
    indx1 = 1;
    indx2 = 2;
  }
  if(index = 1)
  {
    indx1 = 0;
    indx1 = 2;
  }
//For question 1
  if(a > len-3)
    a = a-3;

  var X = words[a];
  var Y = words[a+1];
  var Z = words[a+2];


  var list = [X,Y,Z];
  var temp = [X,Y,Z];
  console.log(list);

//For question 3
  temp[index] = "Toyota"

//For question 13
var temp1 = [X,Y,Z];
temp1.sort();
var X1 = temp1[0];
var Y1 = temp1[1];
var Z1 = temp1[2];


  const myQuestions = [
    {

      question: 'cars = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> print(cars)',
      answers: {
        a: '[\''+X+'\',\''+Y+'\',\''+Z+'\']',
        b: "['Ferrari', 'Hyundai', 'Volvo']",
        c: '['+X+', \'banana\', '+Z+']',
        d: "None"
      },
      correctAnswer: '[\''+X+'\',\''+Y+'\',\''+Z+'\']'
    },
    {

      question: 'cars = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> print(cars['+index+'])',
      answers: {
        a: list[index],
        b: list[indx1],
        c: list[indx2],
        d: "Ferrari"
      },
      correctAnswer: list[index]
    },
    {

      question: 'cars = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> cars['+index+'] = "Toyota" <br> print(list)',
      answers: {
        a: '[\''+X+'\',\''+Y+'\',\''+Z+'\']',
        b: '[\''+temp[0]+'\',\''+temp[1]+'\',\''+temp[2]+'\']',
        c: "['Ferrari', 'Hyundai', 'Volvo']",
        d: "Toyota"
      },
      correctAnswer: '[\''+temp[0]+'\',\''+temp[1]+'\',\''+temp[2]+'\']'
    },
    {

      question: 'cars = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> print(len(cars))',
      answers: {
        a: 3,
        b: 2,
        c: 1,
        d: 0
      },
      correctAnswer: 3
    },
    {
      question: 'cars = [\"'+X+'\",\"'+Y+'\",\"'+Z+'\"] <br> for x in cars: <br> \b \b \b print(x)',
      answers: {
        a: X+'<br>'+Y+'<br>'+Z ,
        b: Z+'<br>'+Y+'<br>'+X ,
        c: Z+'<br>'+X+'<br>'+Y ,
        d: "All of the Above"
      },
      correctAnswer: X+'<br>'+Y+'<br>'+Z
    },
    {

      question: 'cars = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> cars.append("Honda") <br> print(cars)',
      answers: {
        a: '[\''+X+'\',\''+Y+'\',\''+Z+'\',\'Honda\']',
        b: '[\''+temp[0]+'\',\''+temp[1]+'\',\''+temp[2]+'\',\'Honda\']',
        c: "Error",
        d: "['Ferrari', 'Hyundai', 'Volvo', 'BMW']"
      },
      correctAnswer: '[\''+X+'\',\''+Y+'\',\''+Z+'\',\'Honda\']'
    },
    {

      question: 'cars = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> cars.pop(1) <br> print(cars)',
      answers: {
        a: '[\''+X+'\',\''+Z+'\']',
        b: '[\''+Y+'\', \'Ferrari\']',
        c: "None",
        d: "[]"
      },
      correctAnswer: '[\''+X+'\',\''+Z+'\']'
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
