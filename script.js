var questions = [
  {
    question: "What is the baby of a Month know as ?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3,
  },
  {
    question: "What is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"],
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
      }
    });
});
