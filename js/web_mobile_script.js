//to add a div to the set of animated divs, put the id of the div in this array
var animatedDivs = [
    "soundVis",
    "lots",
    "randomChoice",

    //"schoolNameAnimator",
    // "projNameAnimator",
    // "inDevNameAnimator",
    // "aboutAnimator",
    // "resumeAnimator",
    // //"schoolworkContainerAnimator",
    // "projectsContainerAnimator",
    // "inDevContainerAnimator"
];

//to set the animation of the div, write the CSS code for the corresponding animation and put it in the corresponding spot in this array
var animations = [
    "fadeInLeft 0.75s 1", //soundVis
    "fadeInRight 0.75s 1", //lots
    "fadeInLeft 0.75s 1", //randomChoice
                 
    //"sectionsAnimation 0.75s 1",
    // "sectionsAnimation 0.75s 1",
    // "sectionsAnimation 0.75s 1"
];
// for (var i = 3; i < animatedDivs.length; i++) {
//     animations[i] = "fadeInUp .75s 1";
// }