(function() {


  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}
//for question 1
  var i = randomNumber(2,10);

  var j = 1;
  var x = ""
  var k = 0;
  while(j < i)
  {
    x += j;
    k += j;
    j++;
  }

//for question 3
var X1 = randomNumber(5,10);
var w = randomNumber(2,4);
var s1 =0;
var a = 1;
while(a < X1)
{
  s1 +=a;
  if(a==w)
    break;
  a++;
}

//for question 4
var Y1 = randomNumber(5,10);
var v = randomNumber(2,4);
var s2 =0;
var b = 1;
while(b < Y1)
{
  b++;
  if(b==v)
    continue;
  s2 +=b;

}


//for question 5
var words = ['apple', 'banana', 'cherry','strawberry', 'orange', 'mango'];
var a = randomNumber(0,words.length);
var len = words.length
if(a > len-3)
  a = a-3;
var X = words[a];
var Y = words[a+1];
var Z = words[a+2];
var list = [X,Y,Z];

str1 = ""
var r;
for(r= 0; r<3; r++)
{
  str1+=list[r];
}

//for question 6
var len1 = X.length
var i1;
var str2 = ""
for(i1 = 0; i1<len1-2 ; i1++)
{
  str2 += X[i1];
}


//for question 8
var t;
str3 = ""
for(t = 0; t<3;t++)
{
  str3 += list[t];
  if(list[t] == Y)
    break;

}

//for question 9
var u;
str4 = ""
for(u = 0; u<3;u++)
{
  if(list[u] == Y)
    continue;
  str4 += list[u];
}

//for question 10
var o = randomNumber(0,10);
var i2;
var s3 = 0;
for(i2 = 0; i2 < o; i2++)
{
  s3 = s3+i2;
}


  const myQuestions = [
    {

      question: ' i = 1<br>sum = 0<br>while i < '+i+':<br> \b \b \b sum+=i<br> \b \b \b i +=1<br>print(sum)',
      answers: {
        a: 15,
        b: k,
        c: "Error",
        d: 7
      },
      correctAnswer: k
    },
    {

      question: ' i = 1<br>str = ""<br>while i < '+i+':<br> \b \b \b str+=i<br> \b \b \b i +=1<br>print(str)',
      answers: {
        a: x,
        b: k,
        c: "Error",
        d: 01234
      },
      correctAnswer: x
    },
    {

      question: ' i = 1<br>sum = 0<br>while i < '+X1+':<br> \b \b \b sum+=i<br> \b \b \b if i == '+w+':<br> \b \b \b \b \bbreak<br> \b \b \b i +=1<br>print(sum)',
      answers: {
        a: s1+2,
        b: s1,
        c: k,
        d: 7
      },
      correctAnswer: s1
    },
    {

      question: ' i = 1<br>sum = 0<br>while i < '+Y1+':<br> \b \b \b i +=1<br> \b \b \b if i == '+v+':<br> \b \b \b \b \bcontinue<br> \b \b \b sum+=i<br>print(sum)',
      answers: {
        a: s2+2,
        b: s2,
        c: s1,
        d: 7
      },
      correctAnswer: s2
    },
    {

      question: 'list = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> str = "" <br> for x in list: <br> \b \b \b str += x <br> print(str)',
      answers: {
        a: '[\''+X+'\',\''+Y+'\',\''+Z+'\']',
        b: "['mangobananacherry']",
        c: str1,
        d: "strawberrybananaorange"
      },
      correctAnswer: str1

    },
    {

      question: 'str = "" <br> for x in \"'+X+'\": <br> \b \b \b str += x <br> print(str)',
      answers: {
        a: X,
        b: "bana",
        c: str2,
        d: "Error"
      },
      correctAnswer: X

    },
    {

      question: 'list = [\''+X+'\',\''+Y+'\',\''+Z+'\']<br> for x in list: <br> \b \b \b if x == "pears": <br> \b \b \b \b \b print(x) <br> \b \b \b \b \b break',
      answers: {
        a: "NULL output",
        b: "mango",
        c: "pears",
        d: "banana"
      },
      correctAnswer: "NULL output"

    },
    {

      question: 'list = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> str = "" <br> for x in list: <br> \b \b \b str += x<br> \b \b \b if x == \"'+Y+'\": <br> \b \b \b \b \b break  <br> print(str)',
      answers: {
        a: '[\''+X+'\',\''+Y+'\',\''+Z+'\']',
        b: str2,
        c: str3,
        d: "strawberrybananaorange"
      },
      correctAnswer: str3

    },
    {

      question: 'list = [\''+X+'\',\''+Y+'\',\''+Z+'\'] <br> str = "" <br> for x in list: <br> \b \b \b if x == \"'+Y+'\": <br> \b \b \b \b \b continue <br> \b \b \b str += x <br> print(str)',
      answers: {
        a: '[\''+X+'\',\''+Y+'\',\''+Z+'\']',
        b: str1,
        c: str3,
        d: str4
      },
      correctAnswer: str4

    },
    {

      question: 'sum = 0 <br> for x in range('+o+'): <br> \b \b \b sum = sum + x <br> print(sum)',
      answers: {
        a: "None of the Above",
        b: s3*2,
        c: s3,
        d: s3+3
      },
      correctAnswer: s3

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
