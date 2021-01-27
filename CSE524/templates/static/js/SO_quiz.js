(function() {


  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

  var words = ['rock', 'paper', 'scissors'];
  var X = words[Math.floor(Math.random() * words.length)];
  var Y = words[Math.floor(Math.random() * words.length)];
  var a = randomNumber(0,X.length);
  var b = randomNumber(0,X.length);
  var c = randomNumber(0,X.length);
  var num = randomNumber(0,3);
  if(a==b)b=a+1;
  if(a>b){
    a=a+b;
    b=a-b;
    a=a-b;
  }
  if(a%2){
    b=X.length-b;
    if(b==0)b=-1;
    else b=-b;
  }

  console.log(X);
  const myQuestions = [
    {

      question: 'x = \"'+X+'\" <br> print(x['+a+':'+b+'])',
      answers: {
        a: X.slice(a,b),
        b: "roc",
        c: "paper",
        d: "None of the above"
      },
      correctAnswer: X.slice(a,b)
    },
    {

      question: 'x = \"'+X+'\" <br> print(x['+a+'])',
      answers: {
        a: X[a],
        b: "roc",
        c: "paper",
        d: "None of the above"
      },
      correctAnswer: X[a]
    },
    {

      question: 'x = \"'+X+'\" <br> y = \"'+Y+'\" <br> print(x+y)',
      answers: {
        a: X+Y,
        b: "roc",
        c: "paper",
        d: "None of the above"
      },
      correctAnswer: X+Y
    },
    {

      question: 'x = \"'+X+'\" <br> print(x['+a+':'+b+'] + \"'+Y+'\")',
      answers: {
        a: X.slice(a,b)+Y,
        b: "roc",
        c: "paper",
        d: "None of the above"
      },
      correctAnswer: X.slice(a,b)+Y
    },
    {

      question: 'x = \"'+X+'\" <br> print(x*'+num+')' ,
      answers: {
        a: X.repeat(num),
        b: "roc",
        c: "paper",
        d: "None of the above"
      },
      correctAnswer: X.repeat(num)
    },
    {

      question: 'print(len(\''+X+'\'))',
      answers: {
        a: X.length,
        b: 2,
        c: 5,
        d: 1
      },
      correctAnswer: X.length
    },
    {

      question: 'print(lower(\''+X+'\'))',
      answers: {
        a: X.toLocaleLowerCase(),
        b: "roc",
        c: "paper",
        d: "None of the above"
      },
      correctAnswer: X.toLocaleLowerCase()
    },
    {

      question: 'print(upper(\''+X+'\'))',
      answers: {
        a: X.toLocaleUpperCase(),
        b: "roc",
        c: "paper",
        d: "None of the above"
      },
      correctAnswer: X.toLocaleUpperCase()
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
