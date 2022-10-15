const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore , activePlayer ,playing

// reset values 

let init = function(){

    scores = [0,0]
    currentScore = 0
    activePlayer = 0
    playing = true

    diceEl.style.display = "none"
    
    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0


}

init()




// Roll the dice functionality 

function switchPlayer(){

    document.getElementById(`current--${activePlayer}`).textContent   = 0
    currentScore = 0 
    activePlayer = activePlayer === 0 ?1:0


    //if(activePlayer == 0){
    //     activePlayer = 1
    // }
    // else {
    //     activePlayer = 0
    // }

}







btnRoll.addEventListener('click',function(){
    // generating the random number 
    let randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)
    diceEl.style.display = "block"
    diceEl.src= `dice-${randomNumber}.png`

    if(randomNumber != 1){
        currentScore = currentScore + randomNumber  // 5
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }
    else {
        switchPlayer()
    }
})
