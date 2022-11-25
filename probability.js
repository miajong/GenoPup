function earFunction() {
    var ear = document.getElementById("earTable");
    if (window.getComputedStyle(ear).visibility === "hidden") {
      ear.style.visibility = "visible";
      ear.classList.add("animate"); 
    };

};

function furFunction() {
    var fur = document.getElementById("furTable");
    if (window.getComputedStyle(fur).visibility === "hidden") {
        fur.style.visibility = "visible";
        fur.classList.add("animate"); 
    };
};

function legFunction() {
    var leg = document.getElementById("legTable");
    if (window.getComputedStyle(leg).visibility === 'hidden') {
        leg.style.visibility = 'visible';
        leg.classList.add("animate"); 
    };
};

function eyeFunction() {
    var eye = document.getElementById("eyeTable");
    if (window.getComputedStyle(eye).visibility === 'hidden') {
        eye.style.visibility = 'visible';
        eye.classList.add("animate"); 
    };
};


function hairFunction() {
    var hair = document.getElementById("hairTable");
    if (window.getComputedStyle(hair).visibility === 'hidden') {
        hair.style.visibility = 'visible';
        hair.classList.add("animate"); 
    };
}








//Quiz feature w/ immediate grading system

var score = 0;

//ears
function prickledQuizFunction(e) {
    var earCorrect = document.getElementById('earPrickled50%').selected;
  
    if(earCorrect == true) {
        score += 1;
        document.getElementById("prickledQuizScore").innerHTML = 'Correct!';

        //activates create pup button
        CreatePupButton()
      
    } else {
        var str = new String ('Incorrect')
        document.getElementById("prickledQuizScore").innerHTML = (str.fontcolor("red"));


    }
}

function floppyQuizFunction(e) {
    var earCorrect = document.getElementById('earFloppy50%').selected;
  
    if(earCorrect == true) {
        score += 1;
        document.getElementById("floppyQuizScore").innerHTML = 'Correct!';

        //activates create pup button
        CreatePupButton()

      
    } else {
        document.getElementById("floppyQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("floppyQuizScore").innerHTML = (str.fontcolor("red"));

    }
}

//fur color
function brownFurQuizFunction(e) {
    var brownFurCorrect = document.getElementById('brownFur50%').selected;
  
    if(brownFurCorrect == true) {
        score += 1;
        document.getElementById("brownFurQuizScore").innerHTML = 'Correct!';

        //activates create pup button
        CreatePupButton()

      
    } else {
        document.getElementById("brownFurQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("brownFurQuizScore").innerHTML = (str.fontcolor("red"));
    }
}

function yellowFurQuizFunction(e) {
    var yellowFurCorrect = document.getElementById('yellowFur50%').selected;
  
    if(yellowFurCorrect == true) {
        score += 1;
        document.getElementById("yellowFurQuizScore").innerHTML = 'Correct!';

        //activates create pup button
        CreatePupButton()

      
    } else {
        document.getElementById("yellowFurQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("yellowFurQuizScore").innerHTML = (str.fontcolor("red"));

    }
}

//leg length
function shortQuizFunction(e) {
    var shortCorrect = document.getElementById('short100%').selected;
  
    if(shortCorrect == true) {
        score += 1;
        document.getElementById("shortQuizScore").innerHTML = 'Correct!';

        //activates create pup button
        CreatePupButton()

      
    } else {
        document.getElementById("shortQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("shortQuizScore").innerHTML = (str.fontcolor("red"));

    }
}

function tallQuizFunction(e) {
    var tallCorrect = document.getElementById('tall0%').selected;
  
    if(tallCorrect == true) {
        score += 1;
        document.getElementById("tallQuizScore").innerHTML = 'Correct!';

        //activates create pup button
        CreatePupButton()

      
    } else {
        document.getElementById("tallQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("tallQuizScore").innerHTML = (str.fontcolor("red"));

    }
}

//eye color
function brownEyeQuizFunction(e) {
    var brownEyeCorrect = document.getElementById('brownEye75%').selected;
  
    if(brownEyeCorrect == true) {
        score += 1;
        document.getElementById("brownEyeQuizScore").innerHTML = 'Correct!';

        CreatePupButton()

      
    } else {
        document.getElementById("brownEyeQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("brownEyeQuizScore").innerHTML = (str.fontcolor("red"));

    }
}

function blueEyeQuizFunction(e) {
    var blueEyeCorrect = document.getElementById('blueEye25%').selected;
  
    if(blueEyeCorrect == true) {
        score += 1;
        document.getElementById("blueEyeQuizScore").innerHTML = 'Correct!';

        CreatePupButton()

      
    } else {
        document.getElementById("blueEyeQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("blueEyeQuizScore").innerHTML = (str.fontcolor("red"));

    }
}

//hair length
function longHairQuizFunction(e) {
    var longHairCorrect = document.getElementById('longHair50%').selected;
  
    if(longHairCorrect == true) {
        score += 1;
        document.getElementById("longHairQuizScore").innerHTML = 'Correct!';
        
        //activates create pup button
        CreatePupButton()

        

      
    } else {
        document.getElementById("longHairQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("longHairQuizScore").innerHTML = (str.fontcolor("red"));

    }
}

function shortHairQuizFunction(e) {
    var shortHairCorrect = document.getElementById('shortHair50%').selected;
  
    if(shortHairCorrect == true) {
        score += 1;
        document.getElementById("shortHairQuizScore").innerHTML = 'Correct!';

        //activates create pup button
        CreatePupButton()

      
    } else {
        document.getElementById("shortHairQuizScore").innerHTML = 'Incorrect';

        var str = new String ('Incorrect')
        document.getElementById("shortHairQuizScore").innerHTML = (str.fontcolor("red"));

    }
}

//if hint button is pressed
function hintFunction() {
    if(confirm('Moving away from this page will reset your progress.')) {
        window.location.href = "hint.html";
    } else {
        console.log('nothing happened')
    }
}

//activates create pup button
function CreatePupButton() {
    if (score >= 9) {
        var next = document.getElementById("createPupButton");
        if (window.getComputedStyle(next).visibility === 'hidden') {
            next.style.visibility = 'visible';
        }; 
    }
}