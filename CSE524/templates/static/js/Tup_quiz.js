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
  temp[index] = "blackcurrant"



  const myQuestions = [
    {

      question: "tuple = (\"" +X+ "\", \""+Y+ "\", \""+Z+"\") <br> print(tuple)",
      answers: {
        a: "(\"" +X+ "\", \""+Y+ "\", \""+Z+"\")",
        b: "(\"mango\", \"banana\", \"cherry\")",
        c: "(\"orange\", \" banana\", \"mango\")",
        d: "(\"strawberry\", \"banana\", \"orange\")"
      },
      correctAnswer: "(\"" +X+ "\", \""+Y+ "\", \""+Z+"\")"
    },
    {

      question: "tuple = (\"" +X+ "\", \""+Y+ "\", \""+Z+"\") <br>  print(tuple["+index+"])",
      answers: {
        a: list[index],
        b: list[indx1],
        c: list[indx2],
        d: "cherries"
      },
      correctAnswer: list[index]
    },
    {

      question: "tuple = (\"" +X+ "\", \""+Y+ "\", \""+Z+"\") <br> tuple["+index+"] = \"blackcurrant\" <br>  print(tuple)",
      answers: {
        a: "(\"" +X+ "\",\""+Y+ "\",\""+Z+"\")",
        b: "(\"" +temp[0]+ "\",\""+temp[1]+ "\",\""+temp[2]+"\")",
        c: "Error, Tuples are unchangeable.",
        d: "(\"strawberry\", \"blackcurrant\", \"orange\")"
      },
      correctAnswer: "Error, Tuples are unchangeable."
    },
    {

      question: "tuple = (\"" +X+ "\", \""+Y+ "\", \""+Z+"\") <br> print(len(tuple))",
      answers: {
        a: 3,
        b: 2,
        c: 1,
        d: 0
      },
      correctAnswer: 3
    },
    {

      question: "tuple = (\"" +X+ "\", \""+Y+ "\", \""+Z+"\") <br> tuple.append(\"grapes\") <br> print(tuple)",
      answers: {
        a: "(\"" +X+ "\",\""+Y+ "\",\""+Z+"\",\"grapes\")",
        b: "(\"" +temp[0]+ "\",\""+temp[1]+ "\",\""+temp[2]+"\",\"grapes\")",
        c: "Error, Tuples are unchangeable.",
        d: "(\"strawberry\", \"blackcurrant\", \"orange\",\"grapes\")"
      },
      correctAnswer: "Error, Tuples are unchangeable."
    },


    {

      question: "tuple = (\"" +X+ "\", \""+Y+ "\", \""+Z+"\") <br> del tuple[0] <br>  print(tuple)",
      answers: {
        a: "(\""+Y+ "\",\""+Z+"\")",
        b: "(\"mango\", \"banana\")",
        c: "(\"" +temp[0]+ "\",\""+temp[1]+ "\")",
        d: "Error, Tuples are unchangeable."
      },
      correctAnswer: "Error, Tuples are unchangeable."
    },
    {

      question: "tuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5) <br> x = tuple.count(5)<br>  print(x)",
      answers: {
        a: '2',
        b: '1',
        c: '3',
        d: '5'
      },
      correctAnswer: '2'
    },
    {

      question: "tuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5) <br> x = tuple.index(8) <br> print(x)",
      answers: {
        a: '2',
        b: '1',
        c: '3',
        d: '5'
      },
      correctAnswer: '3'
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
