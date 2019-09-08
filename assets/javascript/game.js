// .ready function should not be required as my script is at the bottom of the body.
// ==============================================================
$(document).ready(function() {

// Game Data goes here:
// ==============================================================

let gameData = {
    gems: ['emerald', 'jewel', 'ruby', 'topaz'],   
    emeraldValue: gemValue(1, 12),
    jewelValue: gemValue(1, 12),
    rubyValue: gemValue(1, 12),
    topazValue: gemValue(1, 12),
    randomTarget: targetScore(19, 120),
    scoreCounter: 0,
    wins: 0,
    losses: 0,
}
    console.log("emerald value: " + gameData.emeraldValue);
    console.log("jewel value: " + gameData.jewelValue);
    console.log("ruby value: " + gameData.rubyValue);
    console.log("topaz value: " + gameData.topazValue);
    console.log("target value: " + gameData.randomTarget);

// Core function invocation occurs here:
// ==============================================================

function init() {
    whenClicked();
    targetScore();
    gemValue();
    displayAll();
}

// Game functions are listed below:
// ==============================================================

function whenClicked() {
$("#image-1").on("click", function() {
        $("#score-is").text(gameData.scoreCounter + gameData.emeraldValue);
    });

    $("#image-2").on("click", function() {
        let jewel = gameData.scoreCounter + gameData.jewelValue;
    });


}

function targetScore(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}       

function gemValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}   

function displayAll() {
    $("#random-number").html(gameData.randomTarget);
    $("#wins").html(gameData.wins);
    $("#losses").html(gameData.losses);
    $("#score-is").html(gameData.scoreCounter);
}

function resetGame() {
    targetScore();
    gemValue();
}

init();

// Main processes are listed below
// ==============================================================



});