// if we click on the start/reset
    // if we are playing
        // reload page
    // if we are not playing
        // set score to 0
        // show countdown box
        // reduce time by 1 sec in loop
            // timeleft?
                // yes -> continue
                // no -> game over
        // change button to reset
        // generate new Q&A

function startReset() {
    window.console.log("User click startreset");
    if (isPlaying()) {
        // How to reload page?
    } else {
        // set score to 0
        document.getElementById("scorevalue").innerHTML = 0;
        // show countdown box
        document.getElementById("timeremaining").style.display = "initial";
        // reduce time by 1 sec in loop
        var timeremaining = document.getElementById("timeremainingvalue").innerHTML;
        var interval = setInterval(function() {
            if (timeremaining > 0) {
                window.console.log("Time is remaining");
                timeremaining--; document.getElementById("timeremainingvalue").innerHTML = timeremaining;
            } else {
                document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + document.getElementById("scorevalue").innerHTML + "</p>";
                document.getElementById("gameover").style.display = "initial";
            }
        }, 1000);
        //clearInterval(interval); WHEN???
        // change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        // generate new Q&A
        generateNewQA();
    }
}

function isPlaying() {
    var startreset = document.getElementById("startreset").innerHTML.trim();
    //window.console.log(startreset);
    return (startreset == "Reset Game");
}

function generateNewQA() {
    var x = Math.round(Math.random() * 10);
    var y = Math.round(Math.random() * 10);
    var question = x + " x " + y;
    document.getElementById("question").innerHTML = question;
    var correctBox = Math.round(Math.random() * 4);
    var correctAnswer = x * y;
    for (i = 1; i < 5; i++) {
        if (i == correctBox) {
            // Show correct answer on correct box
            document.getElementById("box"+i).innerHTML = correctAnswer;
        } else {
            // Generate wrong answer
            var wrongAnswer = Math.round(Math.random() * 100);
            while (wrongAnswer == correctAnswer) {
                wrongAnswer = Math.round(Math.random() * 100);
            }
            document.getElementById("box"+i).innerHTML = wrongAnswer;
        }
    }
}
// if we click on answer box
    // if we are playing
        // correct?
            // yes
                // increase score
                // show correct box for 1 sec
                // generate new Q&A
            // no
                // show try again box for 1 sec