
let pScore = 0;
let cScore = 0;
const WINNING_SCORE=5;
let matchesWon=0;
let matchesLost=0;

let counter={
    win:0,
    lose:0,
    tie:0,
    displayScore :function() {

        return `No. of Matches Won:${counter.win},Lost:${counter.lose},tie:${counter.tie}`;
    }
};

function generateComputerChoice() {

    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getResult(userMove, computerMove) {

    if (userMove === computerMove) return `It's a Tie`;
    if ((userMove === 'ROCK' && computerMove === 'SCISSORS') ||
        (userMove === 'PAPER' && computerMove === 'ROCK') ||
        (userMove === 'SCISSORS' && computerMove === 'PAPER')) {
        return 'Player wins a point';
    }
    return 'Computer wins a point';
}

function showResult(userMove, computerMove, resultMsg) {

    localStorage.setItem('Score',JSON.stringify(counter));
    document.querySelector("#userMove").innerText=`You Have Chosen ${userMove}`;
    document.querySelector("#computerMove").innerText=`Opponent Have Chosen ${computerMove}`;
    // alert(`Your Choice : ${userMove} | ${computerMove} | ${resultMsg}`);
    updateScores(resultMsg);
}

function updateScores(resultMsg) {

    if (resultMsg === 'Player wins a point') {
        pScore += 1;
    } else if (resultMsg === 'Computer wins a point') {
        cScore += 1;
    }
    document.querySelector('#Player').innerText = `Player : ${pScore}`;
    document.querySelector('#Computer').innerText = `Computer : ${cScore}`;
    checkForWinner();
    matchCounter();
}

function play(userMove) {

    const computerChoice = generateComputerChoice();
    const computerChoiceMsg = `Computer's Choice : ${computerChoice}`;
    const resultMsg = getResult(userMove, computerChoice);
    showResult(userMove, computerChoiceMsg, resultMsg);   
}

function checkForWinner() {

    if (pScore === WINNING_SCORE) {
        alert('Congratulations! Player wins the match!');    
        resetScores()
        document.querySelector("#userMove").innerText=`YOU WIN`;
    } 
    else if (cScore === WINNING_SCORE) {
       resetScores()
       document.querySelector("#computerMove").innerText=`YOU LOSE!`;
       alert('Computer wins the match! Better luck next time.');
       
       
       
    }
}

function matchCounter(matchesWon,matchesLose) {

    document.querySelector('#mw').innerText = `Matches Won: ${matchesWon}`;
    document.querySelector('#ml').innerText = `Matches Lost: ${matchesLost}`;

}

function resetScores() {

    pScore = 0;
    cScore = 0;
    document.querySelector('#Player').innerText = `Player : ${pScore}`;
    document.querySelector('#Computer').innerText = `Computer : ${cScore}`;
    document.querySelector("#userMove").innerText=``;
    document.querySelector("#computerMove").innerText=``;
   
}
document.addEventListener('keydown', function(event) {
    switch (event.key.toUpperCase()) {
        case 'R':
            play('ROCK');
            break;
        case 'P':
            play('PAPER');
            break;
        case 'S':
            play('SCISSORS');
            break;
        case '1':
            play('ROCK');
            break;
        case '2':
            play('PAPER');
            break;
        case '3':
            play('SCISSORS');
            break;
    }
});


