//to add a div to the set of animated divs, put the id of the div in this array
var animatedDivs = [
    "myName",
    "about",
    "resume",
    "gamesTab",
    "graphicsTab",
    "webMobileTab",

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
    "fadeInUp 1.5s 1", //myName
    "fadeInLeft 0.75s 1", //about
    "fadeInRight 0.75s 1", //resume
    "fadeInLeft 0.75s 1", //gamesTab
    "fadeInRight 0.75s 1", //graphicsTab
    "fadeInLeft 0.75s 1", //webMobileTab
                 
    //"sectionsAnimation 0.75s 1",
    // "sectionsAnimation 0.75s 1",
    // "sectionsAnimation 0.75s 1"
];
// for (var i = 3; i < animatedDivs.length; i++) {
//     animations[i] = "fadeInUp .75s 1";
// }