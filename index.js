var readlineSync = require("readline-sync");
var score =0;

var highScores = [
  {
    name: "Mridul",
    score: 5,
  }

]
var name =readlineSync.question("What's your name? \n")
console.log("HI "+name +"\nLet's play a game! Shall we!")
//To use uppercase take care of brackets as in userAnswer.toUpperCase()

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("Right!!")
    score++;
  
  }else{
    console.log("Wrong!!");
  }
  console.log("Current Score is: "+ score);
  console.log("question is: "+question + " Answer is: "+ answer)
  console.log("--------")
  
}
var myQuestions=[
  {
    question: "What is my native place?\n",
    answer: "Harpalpur"
  },
  {
    question: "Where I did my graduation?\n",
  answer:"sagar"},
  {question:"What is my age?\n",
  answer:"22"}
  ,{
    question: "Which is my favourite sport?\n"
   ,answer: "Cricket"
  },
  {
    question:"Can you name my favourite Web series?\n"
    ,answer: "Money Heist"
  },
  
  ]
for(var i=0; i<myQuestions.length;i++){
  var currentQuestion= myQuestions[i]
  play(currentQuestion.question , currentQuestion.answer);
}
// function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

for(var j=0; j<highScores.length; j++){
  var currentScore = highScores[j]
  console.log(currentScore.name+ ":  "+currentScore.score);

}