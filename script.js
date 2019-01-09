/*
console.log("script linked");

document.getElementById("nameContainerAnimator").style.animation =  "mymove 2s 1";

console.log("changed animation");
*/

//to add a div to the set of animated divs, put the id of the div in this array
var animatedDivs = [
    "nameAnimator",
    "aboutAnimator",
    "resumeAnimator",
    "schoolworkAnimator",
    "summaryAnimator",
    "comporgAnimator",
    "comsysAnimator",
    "progstudioAnimator",
    "personalprojectsAnimator",
    "chillenniumAnimator",
    "chillennium2016Animator",
    "chillennium2017Animator",
    "chillennium2018Animator",
    "codinglessonsAnimator",
    "hackathonsAnimator",
    "accAnimator",
    "randomchoiceAnimator",
    "soundvisAnimator",
    "greenfootAnimator"
];

//to set the animation of the div, write the CSS code for the corresponding animation and put it in the corresponding spot in this array
var animations = [
    "nameAnimation 2s 1",
    "aboutAnimation 1s 1",
];
for(var i = 2; i < animatedDivs.length; i++){
    animations[i] = "sectionsAnimation 1s 1";
}

var animated = [];
for(var i = 0; i < animatedDivs.length; i++){
    animated[i] = false;
}
var iterator;

//var scrolling = false;

window.addEventListener("scroll", handleScrolling, false);
handleScrolling();

function handleScrolling(){
    console.log(animated);
    /*
    if(scrolling == false){
        window.requestAnimationFrame(function() {
            scrolling = false;});
    }
    scrolling = true;
    */
    
    for(iterator = 0; iterator < animatedDivs.length; iterator++){
        //if(animated[iterator] == false){
            animate(document.getElementById(animatedDivs[iterator]), animations[iterator]);
        //}
        
    }
}

function animate(element, anim){ //use getBoundingClientRect() to check top and bottom and compare it to the window.innerHeight
    console.log("animate called on " + element);
    /*
    look at: https://www.kirupa.com/animations/creating_scroll_activated_animations.htm


    I'll need to manually make an array of div's to loop through and check if any part of them are visible
    If they are visible on screen, use the above code to add an animation


    I could make this function recursive with the base cases being to enable or disable animations
    depending on if the div is visible or not
    */
    var elementBoundary = element.getBoundingClientRect();
 
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    console.log("element top: " + top);
    console.log("element bottom: " + bottom);
    console.log("element height: " + height);

    console.log("window height: " + window.innerHeight);

    /*
    if(bottom <= window.innerHeight && top >= 0){ //fully visible
        enableAnimation(element, anim);
    }
    else if(height > window.innerHeight && ((top + height >= 0) && (height + window.innerHeight >= bottom))){ //partially visibly and height is larger than the screen
        enableAnimation(element, anim);
    }
    */
    if((top + height >= 0) && (height + window.innerHeight >= bottom)){ //partially visible
        enableAnimation(element, anim);
    }
    else if((bottom > window.innerHeight && top > window.innerHeight) || (bottom < 0 && top < 0)){ //not visible
        disableAnimation(element);
    }
}

function enableAnimation(element, anim){
    element.style = "opacity: 1;";
    element.style.animation =  anim;
}

function disableAnimation(element){
    element.style.animation =  "";
    element.style = "opacity: 0;";
    //animated[iterator] = true;
}