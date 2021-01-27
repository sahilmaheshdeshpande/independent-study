(function() {
  var x = Math.floor(Math.random() * 10)
  var y = Math.floor(Math.random() * 10)

  const myQuestions = [
    {
      //question: "Evaluate the following Expression:  "+Math.floor(Math.random() * 10)" + "Math.floor(Math.random() * 10) ,

      question: "x = "+x+ " <br>  y = "+y+" <br> print(x+y)",
      answers: {
        a: x+y,
        b: Math.floor(Math.random() * 10),
        c: Math.floor(Math.random() * 10),
        d: Math.floor(Math.random() * 10)
      },
      correctAnswer: x+y
    },
    {
      question: "x = "+x+ "<br>  y = "+y+" <br> print(x-y)",
      answers: {
        a: x-y,
        b: Math.floor(Math.random() * 10),
        c: Math.floor(Math.random() * 10),
        d: Math.floor(Math.random() * 10)
      },
      correctAnswer: x-y
    },
    {
      question: "x = "+x+ "<br>  y = "+y+" <br> print(x*y)",
      answers: {
        a: x*y,
        b: Math.floor(Math.random() * 10),
        c: Math.floor(Math.random() * 10),
        d: Math.floor(Math.random() * 10)
      },
      correctAnswer: x*y
    },
    {

      question: "x = "+x+ "<br>  y = "+y+" <br> print(x/y)",
      answers: {
        a: x/y,
        b: Math.floor(Math.random() * 10),
        c: Math.floor(Math.random() * 10),
        d: Math.floor(Math.random() * 10)
      },
      correctAnswer: x/y
    },
    {

      question: "x = "+x+ "<br>  y = "+y+"<br>  print(x%y)",
      answers: {
        a: x%y,
        b: Math.floor(Math.random() * 10),
        c: Math.floor(Math.random() * 10),
        d: Math.floor(Math.random() * 10)
      },
      correctAnswer: x%y
    },
    {
      //question: "Evaluate the following Expression:  "+Math.floor(Math.random() * 10)" + "Math.floor(Math.random() * 10) ,

      question: "x = "+x+ "<br>  y = "+y+" <br> print(x**y)",
      answers: {
        a: x**y,
        b: Math.floor(Math.random() * 10),
        c: Math.floor(Math.random() * 10),
        d: Math.floor(Math.random() * 10)
      },
      correctAnswer: x**y
    },
    {

      question: "How do you insert COMMENTS in Python code?",
      answers: {
        a: '/*This is a comment*/',
        b: '#This is a comment',
        c: '//This is a comment',
        d: 'None'
      },
      correctAnswer: '#This is a comment'
    }

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
        `<div class="slide w3-code notranslate" >
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
