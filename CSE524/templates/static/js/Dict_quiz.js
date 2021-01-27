(function() {


  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

var dict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
};


  const myQuestions = [
    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> }; <br> print(dict)",
      answers:{
        a: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964}",
        b: "{\"Ford\", \"Mustang\", \"1964\"}",
        c: "{\"brand\", \" model\", \"year\"}",
        d: "{'brand', 'Ford', 'model', 'Mustang', 'year', 1964}"
      },
      correctAnswer: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964}"
    },
    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> }; <br> x = dict[\"model\"] <br>  print(x)",
      answers:{
        a: "Mustang",
        b: "Fiesta",
        c: "Ford",
        d: "Sonata"
      },
      correctAnswer: "Mustang"
    },
    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> };<br>  dict[\"year\"] = 2018 <br> print(dict)",
      answers:{
        a: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':2018}",
        b: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964}",
        c: "{\"brand\", \" model\", \"year\"}",
        d: "{'brand', 'Ford', 'model', 'Mustang', 'year', 2018}"
      },
      correctAnswer: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':2018}"
    },

    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> }; <br> print(len(dict))",
      answers:{
        a: 3,
        b: 6,
        c: 2,
        d: 4
      },
      correctAnswer: 3
    },
    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> };<br>  dict[\"color\"] = \"red\" <br> print(dict)",
      answers:{
        a: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':2018 , \'color\':\'red\'}",
        b: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964, \'color\':\'red\'}",
        c: "{\"brand\", \" model\", \"year\",\"color\"}",
        d: "{'brand', 'Ford', 'model', 'Mustang', 'year', 2018, 'color','red'}"
      },
      correctAnswer: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964 , \'color\':\'red\'}"
    },
    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> }; <br>  dict.pop(\"model\") <br>  print(dict)",
      answers:{
        a: "{\'brand\': \'Ford \', \'year\':1964}",
        b: "{\"Ford\", \"1964\"}",
        c: "{\"brand\", \"year\"}",
        d: "{'brand', 'Ford','year', 1964}"
      },
      correctAnswer: "{\'brand\': \'Ford \', \'year\':1964}"
    },
    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> };<br>  del dict[\"model\"] <br>  print(dict)",
      answers:{
        a: "{\'brand\': \'Ford \', \'year\':1964}",
        b: "{\"Ford\", \"1964\"}",
        c: "{\"brand\", \"year\"}",
        d: "{'brand', 'Ford','year', 1964}"
      },
      correctAnswer: "{\'brand\': \'Ford \', \'year\':1964}"
    },

    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> };<br>  del dict <br>  print(dict)",
      answers:{
        a: "{}",
        b: "Error,\"dict\" no longer exists.",
        c: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964}",
        d: "{'brand', 'Ford','year', 1964}"
      },
      correctAnswer: "Error,\"dict\" no longer exists."
    },
    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> };<br>  dict.clear() <br>  print(dict)",
      answers:{
        a: "{}",
        b: "Error,\"dict\" no longer exists.",
        c: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964}",
        d: "{'brand', 'Ford','year', 1964}"
      },
      correctAnswer: "{}"
    },
    {

      question: "dict = { <br> \b \b \"brand\": \"Ford\", <br> \b \b \"model\": \"Mustang\", <br> \b \b\"year\": 1964 <br> }; <br> mydict = dict.copy() <br> print(mydict)",
      answers:{
        a: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964}",
        b: "{\"Ford\", \"Mustang\", \"1964\"}",
        c: "{\"brand\", \" model\", \"year\"}",
        d: "{'brand', 'Ford', 'model', 'Mustang', 'year', 1964}"
      },
      correctAnswer: "{\'brand\': \'Ford \', \'model\': \'Mustang\', \'year\':1964}"
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
