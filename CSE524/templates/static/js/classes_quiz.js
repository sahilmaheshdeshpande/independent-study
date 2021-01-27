(function() {


  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}


//For question 1
var index = randomNumber(0,9);

//for question 2
var names = ["Washigton","John","Alex","Smith", "Shaw", "Rohit","Tyrion","Rachel","Ross"];
var v1 = randomNumber(0, names.length);
var name = names[v1];
var age = randomNumber(20, 60);


var age1 = randomNumber(15, 90);


  const myQuestions = [
    {

      question: ' class MyClass: <br> \b \b \b x = '+index+' <br><br><br> p1 = MyClass() <br> print(p1.x)',
      answers: {
        a: index,
        b: index + 3,
        c: "Syntax Error",
        d: "None of the Above"
      },
      correctAnswer: index
    },
    {

      question: ' class Person: <br> \b \b def __init__(self, name, age):<br>\b \b \b \b self.name = name <br> \b \b \b \b self.age = age <br><br> p1 = Person(\"'+name+'\",'+age+') <br> print(p1.name)<br> print(p1.age)',
      answers: {
        a: name+' <br> ' + age,
        b: age+' <br> ' + name,
        c: "Syntax Error",
        d: 'Chase <br> ' + age
      },
      correctAnswer: name+' <br> ' + age
    },

    {

      question: '  class Person: <br> \b \b def __init__(self, name, age):<br>\b \b \b \b self.name = name <br> \b \b \b \b self.age = age <br><br> \b \b def myfunc(self):<br> \b \b \b \b print("Hello my name is " + self.name) <br><br><br> p1 = Person(\"'+name+'\",'+age+') <br> p1.myfunc()',
      answers: {
        a: 'Hello my name is '+name+'',
        b: 'Hello my name is '+age+'',
        c: "Syntax Error",
        d: "Hello my name is Clive"
      },
      correctAnswer: 'Hello my name is '+name+''
    },
    {

      question: '  class Person: <br> \b \b def __init__(mysillyobject, name, age):<br>\b \b \b \b mysillyobject.name = name <br> \b \b \b \b mysillyobject.age = age <br><br> \b \b def myfunc(abc):<br> \b \b \b \b print("Hello my name is " + abc.name) <br><br><br> p1 = Person(\"'+name+'\",'+age+') <br> p1.myfunc()',
      answers: {
        a: 'Hello my name is '+name+'',
        b: 'Hello my name is '+age+'',
        c: "Syntax Error",
        d: "Hello my name is Clive"
      },
      correctAnswer: 'Hello my name is '+name+''
    },
    {

      question: '  class Person: <br> \b \b def __init__(self, name, age):<br>\b \b \b \b self.name = name <br> \b \b \b \b self.age = age <br><br> \b \b def myfunc(self):<br> \b \b \b \b print("Hello my name is " + self.name) <br><br><br> p1 = Person(\"'+name+'\",'+age+') <br> p1.age = '+age1+' <br> print(p1.age)',
      answers: {
        a: age1,
        b: age,
        c: "Syntax Error",
        d: age + 7
      },
      correctAnswer: age1
    },
    {
      question: '  class Person: <br> \b \b def __init__(self, name, age):<br>\b \b \b \b self.name = name <br> \b \b \b \b self.age = age <br><br> \b \b def myfunc(self):<br> \b \b \b \b print("Hello my name is " + self.name) <br><br><br> p1 = Person(\"'+name+'\",'+age+') <br> del p1.age <br> print(p1.age)',
      answers: {
        a: age1,
        b: age,
        c: "Syntax Error",
        d: 'AttributeError: \'Person\' object has no attribute \'age\''
      },
      correctAnswer: 'AttributeError: \'Person\' object has no attribute \'age\''
    },
    {

      question: '  class Person: <br> \b \b def __init__(self, name, age):<br>\b \b \b \b self.name = name <br> \b \b \b \b self.age = age <br><br> \b \b def myfunc(self):<br> \b \b \b \b print("Hello my name is " + self.name) <br><br><br> p1 = Person(\"'+name+'\",'+age+') <br> del p1 <br> print(p1)',
      answers: {
        a: 'Hello my name is '+name+'',
        b: name+' <br> ' + age,
        c: 'NameError: \'p1\' is not defined',
        d: 'AttributeError: \'Person\' object has no attribute \'age\''
      },
      correctAnswer: 'NameError: \'p1\' is not defined'
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
