$("#quizContainer").hide();
$("#resultsContainer").hide();
var uIn
var highscore

function displayLocalStorage() {
  uIn = localStorage.getItem("userInitials") || "Thank you for taking my quiz!";
  highscore = localStorage.getItem("score") || "Good luck!";
  $("#userId").text(uIn);
  $("#highscore").text(highscore);
}
displayLocalStorage()

var counter = 30;
var timerId = "";

var quizQuestions = [
  {
    question: "How many grapes does it take to make one bottle of wine?",
    choices: ["100", "700", "1,000", "10,000"],
    answer: "700"
  },
  {
    question: "What is pteronophobia?",
    choices: ["Fear of feathers", "Fear of rain", "Fear of stairs", "Fear of needles"],
    answer: "Fear of feathers"
  },
  {
    question: "What is the most widely printed book in history?",
    choices: ["Bible", "Harry Potter", "The Catcher in the Rye", "IKEA catalog"],
    answer: "IKEA catalog"
  },
  {
    question: "What is the Twitter bird's name?",
    choices: ["Tweety", "Frank", "Larry", "Walter"],
    answer: "Larry"
  },
  {
    question: "On average, how much of your life do you spend waiting at red lights?",
    choices: ["2 weeks", "3 months", "6 months", "2 years"],
    answer: "6 months"
  },
]

var currentQuestion = 0;
var rightAnswer = 0;
var wrongAnswer = 0;

$("#startBtn").on("click", function () {
  $("#quizContainer").show();
  $("#startQuiz").hide();
  currentQuestion = 0
  rightAnswer = 0
  wrongAnswer = 0
  counter = 30
  timerId = setInterval(displayTime, 1000)
  displayQuestion()
})

function displayQuestion() {
  $("#question").text(quizQuestions[currentQuestion].question)
  for (let i = 0; i < 5; i++) {
    $("#option" + i).html(quizQuestions[currentQuestion].choices[i])
    $("#option" + i).attr("data-value", quizQuestions[currentQuestion].choices[i])
    $("#option" + i).attr("data-right", quizQuestions[currentQuestion].answer)
  }
}

$(".options").on("click", function () {
  var userChoice = $(this).attr("data-value")
  var rightChoice = $(this).attr("data-right")
  if (userChoice === rightChoice) {
    rightAnswer++
  } else {
    wrongAnswer++
    counter = counter - 5
  }
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++
    displayQuestion()
  } else {
    displayResults()
  }
})

function displayResults() {
  console.log(rightAnswer, wrongAnswer)
  clearInterval(timerId);
  $("#quizContainer").hide();
  $("#resultsContainer").show();
  $("#score").text("Wins: " + rightAnswer + " " + "Losses: " + wrongAnswer);
}

$("#saveUser").on("click", function () {
  var userInitials = $("#userInitials").val();
  if (rightAnswer < highscore) {
    alert("You did not get the high score!")
  } else {
    alert("Nice! You got the high score!")
    localStorage.setItem("userInitials", userInitials);
    localStorage.setItem("score", rightAnswer);
    displayLocalStorage();
  }
  $("#resultsContainer").hide()
  $("#startQuiz").show()
})

function displayTime() {
  $("#timeId").text(counter)
  if (counter <= 0) {
    displayResults()
  } else {
    counter--
  }
}


