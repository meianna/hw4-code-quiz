$("#quizContainer").hide();
$("#resultsContainer").hide();
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
  $("#quizContainer").hide();
  $("#resultsContainer").show();
  $("#score").text("Wins: " + rightAnswer + "Losses: " + wrongAnswer);
}

$("#saveUser").on("click", function () {
  var userInitials = $("#userInitials").val();
  localStorage.setItem("userInitials", username);
  localStorage.setItem("score", rightAnswer);
})

var uin = localStorage.getItem("userInitials");
var highscore = localStorage.getItem("score");
