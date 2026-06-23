let team = "";
let qualifying = "";
let firstMove = "";
let pitChoice = "";
let finalMove = "";

let body = document.body;
let title = document.querySelector(".title");
let nameInput = document.querySelector(".name-input");
let nameSubmit = document.querySelector(".name-submit");

let storyOpening = document.querySelector(".story-opening");
let buttons1 = document.querySelector(".buttons-1");

let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");

let buttons2 = document.querySelector(".buttons-2");
let buttons3 = document.querySelector(".buttons-3");

let raceStart = document.querySelector(".race-start");
let buttons4 = document.querySelector(".buttons-4");

let midRace = document.querySelector(".mid-race");
let buttons5 = document.querySelector(".buttons-5");

let finalLaps = document.querySelector(".final-laps");
let buttons6 = document.querySelector(".buttons-6");

let aggressiveEnd = document.querySelector(".aggressive-end");
let safeDriveEnd = document.querySelector(".safeDrive-end");
let pitEnd = document.querySelector(".pit-end");
let secretEnd = document.querySelector(".secret-end");

function showRaceStart() {
    optionOneScreen.style.display = "none";
    optionTwoScreen.style.display = "none";
    buttons2.style.display = "none";
    buttons3.style.display = "none";

    raceStart.style.display = "block";
    buttons4.style.display = "block";
}

function showMidRace() {
    raceStart.style.display = "none";
    buttons4.style.display = "none";

    midRace.style.display = "block";
    buttons5.style.display = "block";
}

function showFinalLaps() {
    midRace.style.display = "none";
    buttons5.style.display = "none";

    finalLaps.style.display = "block";
    buttons6.style.display = "block";
}

document.querySelector(".b1-option-one").onclick = function () {
    team = "mclaren";

    body.style.backgroundColor = "#111";
    body.style.color = "white";

    title.style.color = "#ff8700";

    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = "#ff8700";
        button.style.color = "white";
    });

    document.querySelectorAll(
        ".story-opening, .option-one-screen, .option-two-screen, .race-start, .mid-race, .final-laps, .aggressive-end, .safeDrive-end, .pit-end, .secret-end"
    ).forEach(box => {
        box.style.backgroundColor = "#222";
        box.style.color = "white";
        box.style.border = "2px solid #ff8700";
    });

    storyOpening.style.display = "none";
    buttons1.style.display = "none";

    optionOneScreen.style.display = "block";
    buttons2.style.display = "block";
};

document.querySelector(".b1-option-two").onclick = function () {
    team = "haas";

    body.style.backgroundColor = "white";
    body.style.color = "black";

    title.style.color = "#d50000";

    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = "#d50000";
        button.style.color = "white";
    });

    document.querySelectorAll(
        ".story-opening, .option-one-screen, .option-two-screen, .race-start, .mid-race, .final-laps, .aggressive-end, .safeDrive-end, .pit-end, .secret-end"
    ).forEach(box => {
        box.style.backgroundColor = "white";
        box.style.color = "black";
        box.style.border = "2px solid #d50000";
    });

    storyOpening.style.display = "none";
    buttons1.style.display = "none";

    optionTwoScreen.style.display = "block";
    buttons3.style.display = "block";
};

document.querySelector(".b2-option-one").onclick = function () {
    qualifying = "push";
    showRaceStart();
};

document.querySelector(".b2-option-two").onclick = function () {
    qualifying = "safe";
    showRaceStart();
};

document.querySelector(".b3-option-one").onclick = function () {
    qualifying = "push";
    showRaceStart();
};

document.querySelector(".b3-option-two").onclick = function () {
    qualifying = "safe";
    showRaceStart();
};

document.querySelector(".b4-option-one").onclick = function () {
    firstMove = "aggressive";

    raceStart.style.display = "none";
    buttons4.style.display = "none";

    aggressiveEnd.style.display = "block";
};

document.querySelector(".b4-option-two").onclick = function () {
    firstMove = "wait";
    showMidRace();
};

document.querySelector(".b5-option-one").onclick = function () {
    pitChoice = "pit";

    midRace.style.display = "none";
    buttons5.style.display = "none";

    pitEnd.style.display = "block";
};

document.querySelector(".b5-option-two").onclick = function () {
    pitChoice = "stayout";
    showFinalLaps();
};

document.querySelector(".b6-option-one").onclick = function () {
    finalMove = "overtake";

    finalLaps.style.display = "none";
    buttons6.style.display = "none";

    if (
        team === "mclaren" &&
        qualifying === "push" &&
        firstMove === "wait" &&
        pitChoice === "stayout" &&
        finalMove === "overtake"
    ) {
        secretEnd.style.display = "block";
    } else {
        safeDriveEnd.style.display = "block";
    }
};

document.querySelector(".b6-option-two").onclick = function () {
    finalMove = "staybehind";

    finalLaps.style.display = "none";
    buttons6.style.display = "none";

    safeDriveEnd.style.display = "block";
};

nameSubmit.onclick = function () {
    let rawName = nameInput.value.trim();
    if (rawName.length === 0) {
        return;
    }
    let newTitle = `${rawName}'s F1 Story`;
    title.textContent = newTitle;
    document.title = newTitle;
    document.querySelector('.name-entry').style.display = 'none';
};