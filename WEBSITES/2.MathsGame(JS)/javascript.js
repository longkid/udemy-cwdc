var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;

// if we click on the start/reset
document.getElementById("startreset").onclick = function() {
    // if we are playing
    if (playing) {
        location.reload(); //reload page
    } else {
        // change mode to playing
        playing = true;
        hide("gameover");
        // reset score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
        // show countdown box
        timeRemaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        show("timeremaining");
        
        // change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        // show countdown box
        startCountdown();
        
        generateNewQA();
    }
}

// reduce time by 1 sec in loop
function startCountdown() {
    action = setInterval(function() {
        timeRemaining--;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        if (timeRemaining == 0) { // Game Over!
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
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

// generate a new question and multiple answers
function generateNewQA() {
    var x = Math.round(Math.random() * 9) + 1;
    var y = Math.round(Math.random() * 9) + 1;
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + " x " + y;
    var correctBox = Math.round(Math.random() * 3) + 1;
    // Show correctAnswer on correctBox
    document.getElementById("box"+correctBox).innerHTML = correctAnswer;
    // Fill other boxes with wrong answers
    var answers = [correctAnswer];
    for (i = 1; i < 5; i++) {
        if (i != correctBox) {
            // Generate wrong answer
            var wrongAnswer;
            do {
                wrongAnswer = Math.round(Math.random() * 99) + 1;   
            } while (answers.indexOf(wrongAnswer) > -1);// while wrongAnswer existed in the answers already
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

// Clicking on an answer box
for (i = 1; i < 5; i++) {
    // Add event handler for each box
    document.getElementById("box" + i).onclick = function() {
        // if we are playing
        if (playing) {
            if (this.innerHTML == correctAnswer) { // correct answer
                // increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                // show correct box for 1 sec
                show("correct");
                hide("wrong");
                setTimeout(function() {
                    hide("correct");
                }, 1000);
                
                // generate new Q&A
                generateNewQA();
            } else { // wrong answer
                // show wrong box for 1 sec
                show("wrong");
                hide("correct");
                setTimeout(function() {
                    hide("wrong");
                }, 1000);
            }  
        }
    }
}
/*
///////////////////////// Below is my own code ////////////////////////////
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