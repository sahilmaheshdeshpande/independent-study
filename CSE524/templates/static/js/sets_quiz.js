(function() {


  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

  var words = ['apple', 'banana', 'cherry','strawberry', 'orange', 'mango'];
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
var v1 = false;
var v2 = false;
if(X == "banana" || Y == "banana" || Z == "banana") {
  v1 = true;
}
if(v1 == false){
  v2 = true;
}

//For question 4
var ans = "";
if(v1 == true) {
  ans = '{\''+X+'\',\''+Y+'\',\''+Z+'\'}';
} else {
  ans = '{\''+X+'\',\''+Y+'\',\''+Z+'\',\'banana\'}';
}

  const myQuestions = [
    {

      question: 'thisset = {\''+X+'\',\''+Y+'\',\''+Z+'\'} <br> print(thisset)',
      answers: {
        a: '{\''+X+'\',\''+Y+'\',\''+Z+'\'}',
        b: '{\"mango\", \"banana\", \"cherry\"}',
        c: "{\'orange\', \'"+Z+"\', \'mango\'}",
        d: "{\'strawberry\', \'banana\', \'orange\'}"
      },
      correctAnswer: '{\''+X+'\',\''+Y+'\',\''+Z+'\'}'
    },
    {

      question: 'thisset = {\"'+X+'\",\"'+Y+'\",\"'+Z+'\"} <br> for x in thisset: <br> \b \b \b print(x)',
      answers: {
        a: X+'<br>'+Y+'<br>'+Z ,
        b: Z+'<br>'+Y+'<br>'+X ,
        c: Z+'<br>'+X+'<br>'+Y ,
        d: "All of the Above"
      },
      correctAnswer: X+'<br>'+Y+'<br>'+Z
    },
    {

      question: 'thisset = {\"'+X+'\",\"'+Y+'\",\"'+Z+'\"} <br> print("banana" in thisset)',
      answers: {
        a: v1,
        b: v2,
        c: "None of the above",
        d: "0"
      },
      correctAnswer: v1
    },
    {

      question: 'thisset = {\''+X+'\',\''+Y+'\',\''+Z+'\'} <br> thisset.add("banana") <br> print(thisset)',
      answers: {
        a: ans,
        b: '{\"mango\", \"banana\", \"cherry\"}',
        c: "{\"orange\", \""+Z+"\", \"mango\","+Y+"}",
        d: "{\"strawberry\", \"banana\", \"orange\","+X+"}"
      },
      correctAnswer: ans
    },
    {

      question: 'thisset = {\"'+X+'\",\"'+Y+'\",\"'+Z+'\"} <br> print(len(thisset))',
      answers: {
        a: 3,
        b: 6,
        c: 2,
        d: 4
      },
      correctAnswer: 3
    },

    {

      question: 'thisset = {\''+X+'\',\''+Y+'\',\''+Z+'\'} <br>thisset.remove(\''+Y+'\')<br> print(thisset)',
      answers: {
        a: '{\''+X+'\',\''+Z+'\'}',
        b: '{\'mango\',\'cherry\'}',
        c: '{\''+X+'\',\''+Y+'\',\''+Z+'\'}',
        d: "{\'strawberry\', \'banana\', \'orange\',"+Y+"}"
      },
      correctAnswer: '{\''+X+'\',\''+Z+'\'}'
    },
    {

      question: 'thisset = {\"'+X+'\",\"'+Y+'\",\"'+Z+'\"} <br>x = thisset.pop()<br> print(x)',
      answers: {
        a: X,
        b: "None",
        c: Z,
        d: Y
      },
      correctAnswer: X
    },
    {

      question: 'thisset = {\"'+X+'\",\"'+Y+'\",\"'+Z+'\"} <br>thisset.clear()<br> print(thisset)',
      answers: {
        a: 'set()',
        b: X,
        c: '{\"'+X+'\",\"'+Y+'\"}',
        d: '{\'strawberry\',\''+Z+'\'}'
      },
      correctAnswer: 'set()'
    },
    {

      question: 'thisset = {\"'+X+'\",\"'+Y+'\",\"'+Z+'\"} <br>del thisset<br> print(thisset)',
      answers: {
        a: "NameError: name 'thisset' is not defined",
        b: '{\"'+X+'\",\"'+Y+'\",\"'+Z+'\"}',
        c: "{'orange', 'banana', 'mango'}",
        d: "None"
      },
      correctAnswer: "NameError: name 'thisset' is not defined"
    },
    {

      question: 'thisset = set((\''+X+'\',\''+Y+'\',\''+Z+'\')) <br> print(thisset)',
      answers: {
        a: '{\''+X+'\',\''+Y+'\',\''+Z+'\'}',
        b: '{\"mango\", \"banana\", \"cherry\"}',
        c: "{\"orange\", \""+Z+"\", \"mango\"}",
        d: "{\"strawberry\", \"banana\", \"orange\"}"
      },
      correctAnswer: '{\''+X+'\',\''+Y+'\',\''+Z+'\'}'
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
