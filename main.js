/*
[1] Monopoly
[2] Memory game
[3] Hangman game
[4] X-O 
[5] Connect 4
[6] Chess 
[7] Domino 
[8] Card Games
    * Tarneeb 
    * Kent
    * El Shayeb
    * Dobut 
[9] Ludo 
*/ 

/* 
[0] when click on  [ done ]
[1] How to determine paper Turn (make counter if the counter got odd number it's X player turn) [ done ]
[2] if the counter value got odd number (add text to the div "X", if even add "O") and add class "Taken" to the div [ done ]
[3] ".Taken" can't add events to it [ done ]
[4] Check if the game ended 
[5] if the div.inner text = 
    #1 = #2 = #3
    #1 = #5 = #9
    #1 = #4 = #7

    #2 = #5 = #8 

    #3 = #5 = #7
    #3 = #6 = #9

    #7 = #8 = #9

    box[i].innerHTML = box[i + 2].innerHTML = box[i + 4].innerHTML 

[6] if the game draw check if all #0 not empty .. "Game Draw" [ done in another way]

*/

// Declaring The game Boxes
let box = [...document.querySelectorAll(".game .boxes div")];
let playerName = '';
let guestChoice = '';
let playerName2 = '';
let playerChoice = '';

// Determing which player turn
let counter = 0;
// Adding text to the Box when clicked
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function() {
        // Preventing the user from pressing the box again.
        box[i].classList.add("taken");
        // Determing which player turn and then put his letter
        counter %2 == 0 ? box[i].innerHTML= "X" : box[i].innerHTML= "O";
        let choice = box[i].innerHTML;
        // Switching to the other player turn
        box[i].innerHTML = playerChoice;
        counter= counter +1;
        
        // Calling the end game checker 
        sendAction(i, playerName, playerChoice);
        // setTimeout(gameEnds(i, playerName, playerChoice), 21000);
        // gameEnds(i, playerName, playerChoice);
        
    });
}
let winner = 0;
// Put the boxes in array 
function gameEnds(i, playerName, playerChoice) {
    if ((box[0].innerHTML == box[1].innerHTML && box[1].innerHTML == box[2].innerHTML && box[2].innerHTML != "") || 
        (box[0].innerHTML == box[4].innerHTML && box[4].innerHTML == box[8].innerHTML && box[8].innerHTML != "") ||
        (box[0].innerHTML == box[3].innerHTML && box[3].innerHTML == box[6].innerHTML && box[6].innerHTML != "") ||
        (box[1].innerHTML == box[4].innerHTML && box[4].innerHTML == box[7].innerHTML && box[7].innerHTML != "") ||
        (box[2].innerHTML == box[4].innerHTML && box[4].innerHTML == box[6].innerHTML && box[6].innerHTML != "") ||
        (box[2].innerHTML == box[5].innerHTML && box[5].innerHTML == box[8].innerHTML && box[8].innerHTML != "") ||
        (box[3].innerHTML == box[4].innerHTML && box[4].innerHTML == box[5].innerHTML && box[5].innerHTML != "") ||
        (box[6].innerHTML == box[7].innerHTML && box[7].innerHTML == box[8].innerHTML && box[8].innerHTML != "") ) {
        console.log("WINNER MADAFKAR");
        document.body.classList.add("taken");
        publishWin(i, playerName, playerChoice);
        
    }
    // Check if the game draw
    if (counter==9) console.log("Game Ended");
}

let button = document.querySelector(".start-game button");

button.addEventListener("click", function() {
    // if(!document.querySelector(".start-game input").value || document.querySelector(".start-game input").value == '') 
    //     return;
    playerName = document.querySelector(".start-game input").value;
    playerChoice = document.querySelector('input[name="choice"]:checked').value;
    if (playerName == "") {
        playerName = "unknown";
    }

    if(guestChoice == document.querySelector('input[name="choice"]:checked').value) {
        console.log('choose another sign');
        return;
    }
    publishInfo(playerName, playerChoice);
    document.querySelector(".game .score-board .name span").innerHTML = playerName;

    document.querySelector(".start-game").style.display="none";
    document.querySelector(".game .blur").style.display="none";

});


/* 
Improvement options: 
[1] Let the user decide which letter he plays and enters his name. 
[2] Show the score result. 
[3] Play again button.
[4] 
*/ 