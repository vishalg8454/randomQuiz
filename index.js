var readlineSync = require('readline-sync');
const chalk = require('chalk');
// var name = readlineSync.question('What is your name?');
// console.log(name);
// console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
const db = [{
  question:"1/8. What is the look-alike of a person called?",
  options:["doppelganger","eavesdropper","body double",""],
  answer:"doppelganger"
},{
  question:"2/8. Apple's first logo was inspired by?",
  options:["microprocessor","Newton","a food item"],
  answer:"Newton"
},{
  question:"3/8. Is spark plug used in diesel engines?",
  options:["yes","no","sometimes"],
  answer:"no"
},{
  question:"4/8. Total number of people died in 9/11?",
  options:["around 1000","around 2000","around 3000"],
  answer:"around 3000"
},{
  question:"5/8. Jaguar Land Rover is owned by?",
  options:["Volkswagen","Ford motors","Tata motors"],
  answer:"Tata motors"
},{
  question:"6/8. The instruction set used by intel processors is called?",
  options:["x86","arm","risc"],
  answer:"x86"
},{
  question:"7/8. Indian clock follows?",
  options:["GMT+04:30","GMT+05:00","GMT+05:30"],
  answer:"GMT+05:30"
},{
  question:"8/8. The lastest design system introduced by Google is?",
  options:["Material UI","Material You","Jetpack compose"],
  answer:"Material You"
}];
var score = 0;
function rightAnswer(){
  score = score + 1;
  console.log(chalk.green("right answer!"));
}
function wrongAnswer(){
  console.log(chalk.red("wrong answer!"));
}
function showScore(){
  console.log("Your score is " + score);
}
function play(){
  console.log("Welcome to the random quiz:")
  console.log("(type the correct option and then press enter)")
  console.log("");
  for(var i = 0; i<db.length; i++){
    console.log(chalk.blue(db[i].question));
    for(var j=0; j<3; j++){
      console.log(j, db[i].options[j]);
    }
    var temp = readlineSync.question("");
    if(db[i].answer === db[i].options[temp]){
      rightAnswer();
    }else{
      wrongAnswer();
    }
    showScore();
    console.log("");
  }
  console.log(chalk.blue("---Game ended---"));
  showScore();
}
play();