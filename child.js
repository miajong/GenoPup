
function rollFunction() {
    earNumber = Math.floor(Math.random() * 4) + 1;
    console.log(earNumber); //dev notes

    furNumber = Math.floor(Math.random() * 4) + 1;
    console.log(furNumber); //dev notes

    //don't need leg function since it's 100% short

    eyeNumber = Math.floor(Math.random() * 4) + 1;
    console.log(eyeNumber); //dev notes

    hairNumber = Math.floor(Math.random() * 4) + 1;
    console.log(hairNumber); //dev notes

    earProbFunction();
    furProbFunction();
    eyeProbFunction();
    hairProbFunction();
}

function earProbFunction() {
    if (earNumber <= 2) {
        document.getElementById("earType").innerHTML = 'Floppy Ears';
        console.log('Floppy');

    } else if (earNumber >= 3) {
        document.getElementById("earType").innerHTML = 'Prickled Ears';
        console.log('Prickled');
    }
}


function furProbFunction() {
    var hairLength = hairProbFunction();

    if (furNumber <= 2) {
        document.getElementById("furType").innerHTML = 'Brown Fur';
        console.log('Brown Fur');
        document.getElementById("furColorImg").src="furBrown.png";

        // brown hair length and corresponding color
        if (hairNumber <= 2) {
            document.getElementById("hairImg").src="hairBrown.png";
        } else if (hairNumber >= 3) {
            document.getElementById("hairImg").src="hairShort.png";
        }

        //brown ear type and corresponding color
        if (earNumber <= 2) {
            document.getElementById("earTypeImg").src="floppyBrown.png";
        } else if (earNumber >= 3) {
            document.getElementById("earTypeImg").src="pointedBrown.png";
        }


    } else if (furNumber >= 3) {
        document.getElementById("furType").innerHTML = 'Yellow Fur';
        console.log('Yellow Fur');
        document.getElementById("furColorImg").src="furYellow.png";

        // yellow hair length and corresponding color
        if (hairNumber <= 2) {
            document.getElementById("hairImg").src="hairYellow.png";
        } else if (hairNumber >= 3) {
            document.getElementById("hairImg").src="hairShort.png";
        }

        //yellow ear type and corresponding color
        if (earNumber <= 2) {
            document.getElementById("earTypeImg").src="floppyYellow.png";
        } else if (earNumber >= 3) {
            document.getElementById("earTypeImg").src="pointedYellow.png";
        }
    }
}


function eyeProbFunction() {
    if (eyeNumber <= 3) {
        document.getElementById("eyeType").innerHTML = 'Brown Eyes';
        console.log('Brown Eyes');
        document.getElementById("eyeColorImg").src = "eyeBrown.png";

    } else if (eyeNumber >= 4) {
        document.getElementById("eyeType").innerHTML = 'Blue Eyes';
        console.log('Blue Eyes');
        document.getElementById("eyeColorImg").src = "eyeBlue.png";

    }
}


function hairProbFunction() {
    if (hairNumber <= 2) {
        document.getElementById("hairType").innerHTML = 'Long Hair';
        console.log('Long Hair');

    } else if (hairNumber >= 3) {
        document.getElementById("hairType").innerHTML = 'Short Hair';
        console.log('Short Hair');
    }
}



