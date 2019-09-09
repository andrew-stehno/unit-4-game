// .ready function should not be required as my script is at the bottom of the body.
// ==============================================================
$(document).ready(function () {

    // Game Data goes here:
    // ==============================================================

    let gameData = {
        emeraldValue: gemValue(1, 12),
        jewelValue: gemValue(1, 12),
        rubyValue: gemValue(1, 12),
        topazValue: gemValue(1, 12),
        randomTarget: targetScore(19, 120),
        scoreCounter: null,
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
        $("#image-1").on("click", function () {
            gameData.scoreCounter = gameData.scoreCounter + gameData.emeraldValue;
            $("#score-is").text(gameData.scoreCounter);
            endResult();
        });

        $("#image-2").on("click", function () {
            gameData.scoreCounter = gameData.scoreCounter + gameData.jewelValue;
            $("#score-is").text(gameData.scoreCounter);
            endResult();
        });

        $("#image-3").on("click", function () {
            gameData.scoreCounter = gameData.scoreCounter + gameData.rubyValue;
            $("#score-is").text(gameData.scoreCounter);
            endResult();
        });

        $("#image-4").on("click", function () {
            gameData.scoreCounter = gameData.scoreCounter + gameData.topazValue;
            $("#score-is").text(gameData.scoreCounter);
            endResult();
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
        $("#random-number").text(gameData.randomTarget);
        $("#wins").html(gameData.wins);
        $("#losses").html(gameData.losses);
        $("#score-is").html(gameData.scoreCounter);
    }
    
    function resetGame() {
        targetScore();
        gemValue();
        gameData.scoreCounter = null;
    }

    function endResult() {
        if (gameData.scoreCounter === gameData.randomTarget) {
            gameData.win++;
            resetGame();
        }
        else if (gameData.scoreCounter > gameData.randomTarget) {
            gameData.losses--;
            resetGame();
        }
    }

    init()

});