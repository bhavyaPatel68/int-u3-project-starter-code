let storyOpening = document.querySelector(".story-opening");
let buttons1 = document.querySelector(".buttons-1");

let optionOneScreen = document.querySelector(".option-one-screen");
let buttons2 = document.querySelector(".buttons-2");

let optionTwoScreen = document.querySelector(".option-two-screen");
let buttons3 = document.querySelector(".buttons-3");

let optionOneEnd = document.querySelector(".option-one-end");
let buttons4 = document.querySelector(".buttons-4");

let optionTwoEnd = document.querySelector(".option-two-end");
let buttons5 = document.querySelector(".buttons-5");

let aggressiveEnd = document.querySelector(".aggressive-end");
let safeDriveEnd = document.querySelector(".safeDrive-end");

let b1ptionOne = document.querySelector(".b1-option-one");
let b1ptionTwo = document.querySelector(".b1-option-two");

let b2ptionOne = document.querySelector(".b2-option-one");
let b2ptionTwo = document.querySelector(".b2-option-two");

let b3ptionOne = document.querySelector(".b3-option-one");
let b3ptionTwo = document.querySelector(".b3-option-two");

let b4ptionOne = document.querySelector(".b4-option-one");
let b4ptionTwo = document.querySelector(".b4-option-two");

let b5ptionOne = document.querySelector(".b5-option-one");
let b5ptionTwo = document.querySelector(".b5-option-two");


// team choice

b1ptionOne.addEventListener("click", function () {
    storyOpening.style.display = "none";
    buttons1.style.display = "none";

    optionOneScreen.style.display = "block";
    buttons2.style.display = "block";
});

b1ptionTwo.addEventListener("click", function () {
    storyOpening.style.display = "none";
    buttons1.style.display = "none";

    optionTwoScreen.style.display = "block";
    buttons3.style.display = "block";
});


// mclared qualifing

b2ptionOne.addEventListener("click", function () {
    optionOneScreen.style.display = "none";
    buttons2.style.display = "none";

    optionOneEnd.style.display = "block";
    buttons4.style.display = "block";
});

b2ptionTwo.addEventListener("click", function () {
    optionOneScreen.style.display = "none";
    buttons2.style.display = "none";

    optionTwoEnd.style.display = "block";
    buttons5.style.display = "block";
});


// haas qualifing

b3ptionOne.addEventListener("click", function () {
    optionTwoScreen.style.display = "none";
    buttons3.style.display = "none";

    optionOneEnd.style.display = "block";
    buttons4.style.display = "block";
});

b3ptionTwo.addEventListener("click", function () {
    optionTwoScreen.style.display = "none";
    buttons3.style.display = "none";

    optionTwoEnd.style.display = "block";
    buttons5.style.display = "block";
});


// agro ending

b4ptionOne.addEventListener("click", function () {
    optionOneEnd.style.display = "none";
    buttons4.style.display = "none";

    aggressiveEnd.style.display = "block";
});

b5ptionOne.addEventListener("click", function () {
    optionTwoEnd.style.display = "none";
    buttons5.style.display = "none";

    aggressiveEnd.style.display = "block";
});


// safe ending

b4ptionTwo.addEventListener("click", function () {
    optionOneEnd.style.display = "none";
    buttons4.style.display = "none";

    safeDriveEnd.style.display = "block";
});

b5ptionTwo.addEventListener("click", function () {
    optionTwoEnd.style.display = "none";
    buttons5.style.display = "none";

    safeDriveEnd.style.display = "block";
});