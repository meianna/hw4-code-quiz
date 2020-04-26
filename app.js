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
    question: "To make a link open in a different tab what would you assign for target",
    choices: ["_newtab", "tab", "_newwindow", "_blank"],
    answer: "_blank"
  },
  {
    question: "2 To make a link open in a different tab what would you assign for target",
    choices: ["_newtab", "tab", "_newwindow", "_blank"],
    answer: "_blank"
  },
  {
    question: "3 To make a link open in a different tab what would you assign for target",
    choices: ["_3newtab", "tab", "_newwindow", "_blank"],
    answer: "_blank"
  },
  {
    question: "T4o make a link open in a different tab what would you assign for target",
    choices: ["_4newtab", "tab", "_newwindow", "_blank"],
    answer: "_blank"
  },
  {
    question: "To5 make a link open in a different tab what would you assign for target",
    choices: ["_n5ewtab", "tab", "_newwindow", "_blank"],
    answer: "_blank"
  }
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
  for (let i = 0; i < 4; i++) {
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


