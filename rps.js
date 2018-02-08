//DOM cache
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_btn = document.getElementById('r');
const paper_btn = document.getElementById('p');
const scissors_btn = document.getElementById('s');


//Computer chooses r,p or s
function computerPlay () {
  let compPlay = Math.floor(Math.random() * 3);
    if (compPlay === 0) {
        return 'r';
  } else if ( compPlay === 1) {
        return 'p';
  } else {
        return 's';
  }
  }

//Converts r,p,s to rock,paper,scissors to be presented on the DOM
function wordConvert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

//Presents a win on the DOM
function win (user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = wordConvert(user) + " beats " + wordConvert(computer) + ". You Win!"
}

//Presents a loss on the DOM
function lose (user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = wordConvert(user) + " loses to " + wordConvert(computer) + ". You Lose!"
}

//Presents a draw on the DOM
function draw (user, computer) {
result_p.innerHTML = wordConvert(user) + " equals " + wordConvert(computer) + ". It's A Draw!"
}

//Takes computer choice and inserts into game and provides the rules
function game (userChoice){
  const computerChoice = computerPlay();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    }
}

// Takes user button click and inserts it into the game to play the game
function main () {
  rock_btn.addEventListener('click', function(){
    game ("r");
  })

  paper_btn.addEventListener('click', function(){
    game("p");
  })

  scissors_btn.addEventListener('click', function(){
    game("s");
  })
}

//Executes game
main ();
