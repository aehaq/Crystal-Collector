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
    initialize();

    //This single on-click function applies to all four crystal buttons and contains the rest of the game.
    $(".btn").on("click", function() {

        //Registers a number of points based off the buttons value as an interger
        points = parseInt(this.value);

        //Adds those points to the current score.
        scoreCount += points;

        //If the new score is less than the goal number, only the scorecount is updated.
        //alternatively, If the new score is greater than the goal number, a loss is tallied and the game resets.
        //if neither of those return true, it is because you matched the goal number. a win is tallied and the game resets.
        if (scoreCount < goalNumber) {
            $("#score").text(scoreCount);
        } else if (scoreCount > goalNumber) {
            lossCount += 1;
            initialize();
        } else {
            winCount += 1;
            initialize();
        }
    })
})