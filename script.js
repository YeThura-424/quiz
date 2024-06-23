var questions = [
  {
    question: "What is the baby of a Month know as ?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3,
  },
  {
    question: "What is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2,
  },
];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function () {
  displayCurrentQuestion();
  $(this).find(".quizMassage").hide();
  $(this)
    .find(".nextButton")
    .on("click", function () {
      if (!quizOver) {
        value = $("input[type='radio']:checked").val();
        console.log("value", value);
        if (value == undefined) {
          $(document).find(".quizMessage").text("Please select an answer");
          $(document).find(".quizMessage").show();
        } else {
          $(document).find(".quizMessage").hide();
          if (value == questions[currentQuestion].correctAnswer) {
            correctAnswer++;
          }
          currentQuestion++;
          if (currentQuestion < questions.length) {
            displayCurrentQuestion();
          } else {
            displayScroe();
            $(document).find(".nextButton").text("Play Again ?");
            quizOver = true;
          }
        }
      } else {
        quizOver = false;
        $(document).find(".nextButton").text("Next Question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
      }
    });
});

function displayCurrentQuestion() {
  console.log("Current Question");

  var question = questions[currentQuestion].question;
  var questionClass = $(document).find(".quiz-container > .question");
  var choiceList = $(document).find(".quiz-container > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;

  $(questionClass).text(question);

  $(choiceList).find("li").remove();

  var choice;
  for (i = 0; i < numChoices; i++) {
    choice = questions[currentQuestion].choices[i];
    $(
      '<li class="bg-white my-2 capitalize"><input class="hidden" type="radio" value=' +
        i +
        ' name="dynradio" id="radio_' +
        i +
        '" /><label class="p-2 flex rounded w-full border border-gray-400 cursor-pointer" for="radio_' +
        i +
        '">' +
        choice +
        "</label></li>"
    ).appendTo(choiceList);
  }
}

function resetQuiz() {
  currentQuestion = 0;
  correctAnswer = 0;
  hideScore();
}

function displayScroe() {
  $(document)
    .find(".quiz-container > .result")
    .text("You scored:" + correctAnswer + " out of: " + questions.length);
  $(document).find(".quiz-container > .result").show();
}

function hideScore() {
  $(document).find(".result").hide();
}
