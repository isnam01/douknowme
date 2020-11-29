var readLine=require('readline-sync');
const chalk = require('chalk');
var emoji = require('node-emoji');
var name=readLine.question("What is your name?\n")
console.log(chalk.bgCyan.white("Hello," +chalk.bold(name) + "! Welcome to DO YOU KNOW ME "+emoji.get('smile')+"\nLet's begin !\n"))
var score=0
function play(question,answer,hint)
{
  var userans=readLine.question(question+"\n")
  if(answer.toUpperCase()==userans.toUpperCase())
  {
    console.log("-----------------------------------------------------------");
    console.log(chalk.bgGreen.black.bold("Bravo ! You are right"))
    score=score+1;
  }
  else
  {
     console.log(chalk.bgRed.white.bold("Oops ! Try the next one"))
  }
 console.log(hint);
  console.log("Your score is ", score);
   console.log("------------------------------------------------------------");
}

var questions=[{
"question":"What is my name",
"answer":"Mansi",
"hint":"I am Mansi"
},
{
"question":"Where do I live?",
"answer":"Jaipur",
"hint":"I live in Jaipur"
},
{
"question":"What do I do?",
"answer":"Student",
"hint":"I am a Final year student "
},
{
"question":"What is my Favourite food",
"answer":"Momos",
"hint":"I love Momos"
},
{
"question":"What is your favourite color?",
"answer":"All",
"hint":"I love all colors !"
}
]

for(var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer,questions[i].hint)
}
console.log("Thanks for Playing "+chalk.bold(name)+emoji.get('heart'))