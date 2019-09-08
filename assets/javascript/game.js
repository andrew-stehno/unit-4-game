// .ready function should not be required as my script is at the bottom of the body.
// ==============================================================
$(document).ready(function() {

// Game Data goes here:
// ==============================================================

let gameData = {
    gems: ['emerald', 'jewel', 'ruby', 'topaz'],   
    emeraldValue: gemValue(),
    jewelValue: gemValue(),
    rubyValue: gemValue(),
    topazValue: gemValue(),
    randomTarget: targetScore(),
    scoreCounter: 0,
    wins: 0,
    losses: 0,
}
    console.log(gameData.emeraldValue);
    console.log(gameData. jewelValue);
    console.log(gameData.rubyValue);
    console.log(gameData.topazValue);

// Core function invocation occurs here:
// ==============================================================

function init() {
    keyPress();
    targetScore();
    gemValue();
    displayAll();
}

// Game functions are listed below:
// ==============================================================

function keyPress() {

}

function targetScore(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
}       

function gemValue(min, max) {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}   

function displayAll() {

}

function resetGame() {

}



});