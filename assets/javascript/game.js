$(document).ready(function () {

    //Declaration of global variables as necessary.
    var goalNumber;
    var winCount=0;
    var lossCount=0;
    var scoreCount;

    //Function used to assign hidden values to buttons.
    function randomizeButton(buttonid) {
        var randomVal = Math.floor(Math.random()*12) + 1;
        buttonid.attr("value", randomVal);
    }

    //Function used to generate and print goal for current round.
    function setGoal() {
        goalNumber = Math.floor(Math.random()*102) + 19;
        $("#goal").text(goalNumber);
    }

    //Function used to initialize game. 
    //Resets goal and randomize button using above function, and prints all necessary current values. 
    function initialize() {
        for (var i = 1; i < 5; i++) {
            randomizeButton($("#button-"+i));
        }
        setGoal();
        scoreCount = 0;
        $("#wins").text(winCount);
        $("#losses").text(lossCount);
        $("#score").text(scoreCount);
    }

    //Initializes the game for first round
    initialize()


})