        // reload page
    // if we are not playing
        // reduce time by 1 sec in loop
            // timeleft?
                // yes -> continue
                // no -> game over
        // generate new Q&A

var playing = false;
var score;
var timeRemaining;
// if we click on the start/reset
document.getElementById("startreset").onclick = function() {
    // if we are playing
    if (playing) {
        location.reload(); //reload page
    } else {
        playing = true;
        hide("gameover");
        // set score to 0
        score = 0;
        
        // show countdown box
        timeRemaining = 60;
        show("timeremaining");
        
        // change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        // show countdown box
        startCountdown();
    }
}

function startCountdown() {
    action = setInterval(function() {
        timeRemaining--;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        if (timeRemaining == 0) {
            // Game Over!
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";
            document.getElementById("startreset").innerHTML = "Start Game";
            playing = false;
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(action);
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}
/*
/////////////////////////////////////////////////////
var score = 0;
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
                document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + "</p>";
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
    var correctBox = Math.floor(Math.random() * 4) + 1;
    window.console.log("Correct box: " + correctBox);
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

function checkAnswer(boxId) {
    if (isPlaying()) {
        if (isCorrectAnswer(boxId)) {
//            var scoreValue = document.getElementById("scorevalue").innerHTML + 1;
//            scoreValue += 1;
            score++;
            window.console.log("Score: " + score);
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("correct").style.display = "initial";
            setTimeout(function() {document.getElementById("correct").style.display = "none";}, 1000)
            generateNewQA();
        } else {
            document.getElementById("wrong").style.display = "initial";
            setTimeout(function() {document.getElementById("wrong").style.display = "none";}, 1000)
        }
    }
}

function isCorrectAnswer(boxId) {
    var chosenAnswer = document.getElementById(boxId).innerHTML;
    var question = document.getElementById("question").innerHTML;
    var numbers = question.split(" x ");
    var correctAnswer = numbers[0] * numbers[1];
    return (chosenAnswer == correctAnswer);
}
*/