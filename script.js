let team = "";
let qualifying = "";
let strat = "";

let body = document.body;
let title = document.querySelector(".title");

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
let secretEnd = document.querySelector(".secret-end");

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

b1ptionOne.addEventListener("click", function () {
    team = "mclaren";

    body.style.backgroundColor = "#111";
    body.style.color = "white";

    title.style.color = "#ff8700";

    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = "#ff8700";
        button.style.color = "white";
    });

    document.querySelectorAll(
        ".story-opening, .option-one-screen, .option-two-screen, .option-one-end, .option-two-end, .aggressive-end, .safeDrive-end, .secret-end"
    ).forEach(box => {
        box.style.backgroundColor = "#222";
        box.style.color = "white";
        box.style.border = "2px solid #ff8700";
    });

    storyOpening.style.display = "none";
    buttons1.style.display = "none";

    optionOneScreen.style.display = "block";
    buttons2.style.display = "block";
});

b1ptionTwo.addEventListener("click", function () {
    team = "haas";

    body.style.backgroundColor = "white";
    body.style.color = "black";

    title.style.color = "#d50000";

    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = "#d50000";
        button.style.color = "white";
    });

    document.querySelectorAll(
        ".story-opening, .option-one-screen, .option-two-screen, .option-one-end, .option-two-end, .aggressive-end, .safeDrive-end, .secret-end"
    ).forEach(box => {
        box.style.backgroundColor = "white";
        box.style.color = "black";
        box.style.border = "2px solid #d50000";
    });

    storyOpening.style.display = "none";
    buttons1.style.display = "none";

    optionTwoScreen.style.display = "block";
    buttons3.style.display = "block";
});

b2ptionOne.addEventListener("click", function () {
    qualifying = "push";

    optionOneScreen.style.display = "none";
    buttons2.style.display = "none";

    optionOneEnd.style.display = "block";
    buttons4.style.display = "block";
});

b2ptionTwo.addEventListener("click", function () {
    qualifying = "safe";

    optionOneScreen.style.display = "none";
    buttons2.style.display = "none";

    optionTwoEnd.style.display = "block";
    buttons5.style.display = "block";
});

b3ptionOne.addEventListener("click", function () {
    qualifying = "push";

    optionTwoScreen.style.display = "none";
    buttons3.style.display = "none";

    optionOneEnd.style.display = "block";
    buttons4.style.display = "block";
});

b3ptionTwo.addEventListener("click", function () {
    qualifying = "safe";

    optionTwoScreen.style.display = "none";
    buttons3.style.display = "none";

    optionTwoEnd.style.display = "block";
    buttons5.style.display = "block";
});

b4ptionOne.addEventListener("click", function () {
    strat = "aggressive";

    optionOneEnd.style.display = "none";
    buttons4.style.display = "none";

    aggressiveEnd.style.display = "block";
});

b5ptionOne.addEventListener("click", function () {
    strat = "aggressive";

    optionTwoEnd.style.display = "none";
    buttons5.style.display = "none";

    aggressiveEnd.style.display = "block";
});


b4ptionTwo.addEventListener("click", function () {
    strat = "safe";

    optionOneEnd.style.display = "none";
    buttons4.style.display = "none";

    if (
        team === "mclaren" &&
        qualifying === "push" &&
        strat === "safe"
    ) {
        secretEnd.style.display = "block";
    } else {
        safeDriveEnd.style.display = "block";
    }
});

b5ptionTwo.addEventListener("click", function () {
    strat = "safe";

    optionTwoEnd.style.display = "none";
    buttons5.style.display = "none";

    if (
        team === "mclaren" &&
        qualifying === "push" &&
        strat === "safe"
    ) {
        secretEnd.style.display = "block";
    } else {
        safeDriveEnd.style.display = "block";
    }
});