//to add a div to the set of animated divs, put the id of the div in this array
var animatedDivs = [
    "nameAnimator",
    "aboutAnimator",
    "resumeAnimator",
    ////
    "schoolworkContainerAnimator",
    /*
    "schoolworkAnimator",
    "summaryAnimator",
    "comporgAnimator",
    "comsysAnimator",
    "progstudioAnimator",
    */
    ////
    "projectsContainerAnimator"
    /*
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
    */
];

//to set the animation of the div, write the CSS code for the corresponding animation and put it in the corresponding spot in this array
var animations = [
    "sectionsAnimation 1.5s 1"
];
for(var i = 1; i < animatedDivs.length; i++){
    animations[i] = "sectionsAnimation .75s 1";
}


var animated = [];
for(var i = 0; i < animatedDivs.length; i++){
    animated[i] = false;
}

var iterator;

window.addEventListener("scroll", handleScrolling, false);
handleScrolling();

function handleScrolling(){
    for(iterator = 0; iterator < animatedDivs.length; iterator++){
        if(animated[iterator] == false){
            animate(document.getElementById(animatedDivs[iterator]), animations[iterator]);
        }
    }
}

function animate(element, anim){ 
    var bounds = element.getBoundingClientRect();
    var top = bounds.top;
    var bottom = bounds.bottom;
    var height = bounds.height;

    if((top + height >= 0) && (height + window.innerHeight >= bottom)){ //partially visible
        enableAnimation(element, anim);
    }
    else if(iterator == 0 && (bottom > window.innerHeight && top > window.innerHeight) || (bottom < 0 && top < 0)){//name is not visible
        element.style.animation =  "";
        element.style = "opacity: 0;";
    }
}

function enableAnimation(element, anim){
    element.style = "opacity: 1;";
    element.style.animation =  anim;
    if(iterator != 0){
        animated[iterator] = true;
    }
}