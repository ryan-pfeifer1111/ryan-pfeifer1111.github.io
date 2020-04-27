//keeps track of which animations have played - used so each animation only plays the first time it appears on screen
var animated = [];
for (var i = 0; i < animatedDivs.length; i++) {
    animated[i] = false;
}

var iterator;

window.addEventListener("scroll", handleScrolling, false);
handleScrolling(); //call for the initial animation the first time the webpage is loaded/refreshed

function handleScrolling() {
    for (iterator = 0; iterator < animatedDivs.length; iterator++) {
        if (animated[iterator] == false) {
            animate(document.getElementById(animatedDivs[iterator]), animations[iterator]);
        }
    }
}

//animates a particular div using a given animation
function animate(element, anim) {
    var bounds = element.getBoundingClientRect();
    var top = bounds.top;
    var bottom = bounds.bottom;
    var height = bounds.height;

    if ((top + height >= 0) && (height + window.innerHeight >= bottom)) { //partially visible
        enableAnimation(element, anim); //animates div if it is partially visible on the screen
    }
    else if ((iterator <= 2) && (bottom > window.innerHeight && top > window.innerHeight) || (bottom < 0 && top < 0)) {//name is not visible
        disableAnimation(element); //resets the name animation every time it goes off screen, used for the title of the webpage
    }
}

function enableAnimation(element, anim) { //sets the animation of the current div to a given animation
    element.style = "opacity: 1;";
    element.style.animation = anim;
    if (element.id != "myName") {
        animated[iterator] = true;
    }
}

function disableAnimation(element) { //sets the animation of the current div to nothing and sets the opacity to 0
    element.style.animation = "";
    element.style = "opacity: 0;";
}

function change_src(elem, filename){
    elem.src = filename;
}

console.log("WE BACK BABAY");