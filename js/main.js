const NOW = new Date();

// Static messages
let welcomeMsgs = [
    "Welcome to my little site OwO",
    "Please wipe your feet on the way in!",
    "Hey there :)",
    "Hello! And again, welcome to the Apeture Sci- oh wait, wrong output stream...",
    "Cats > Dogs. Fite me",
    "What is love?",
    "Fus Ro Da!",
    "Zin krif horvut se suleyk. What is better - to be born good, or to overcome your evil nature through great effort? &ndash;Paarthurnax",
];

let notfoundMsgs = [
    "OwO, this isn't what you were looking for, was it?",
    "Nope, not here. I checked.",
    "Sorry, but the page you were looking for is in a different castle!",
];


// Dynamic messages
if (NOW.getDate() == 25 && NOW.getMonth() == 11) { // 25 Dec
    welcomeMsgs.push("Merry Christmas!");
    welcomeMsgs.push("Hope you have a great day :)");
    welcomeMsgs.push("Presents!");

    notfoundMsgs.push("Nope, only coal here.");
}
else if (NOW.getDate() == 31 && NOW.getMonth() == 9) { // 31 Oct
    welcomeMsgs.push("Happy Halloween!");
    welcomeMsgs.push("Spooky Scary Skelatons Everywhere!");
    welcomeMsgs.push("*plays monstermash on repeat*");
    welcomeMsgs.push("CANDYYYYY!");

    notfoundMsgs.push("TRICK! Try another page for a treat... maybe")
}
else if (NOW.getDate() == 1 && NOW.getMonth() == 3) { // 1 Apr
    welcomeMsgs.push("What's that on your face? No, over there... It's April Fools!");
    welcomeMsgs.push("Look behind you!");

    notfoundMsgs.push("Not a joke, there is actually nothing here")
}
else if (NOW.getDate() == 31 && NOW.getMonth() == 11) { // 31 Dec
    welcomeMsgs.push("Happy old year!");
}
else if (NOW.getDate() == 1 && NOW.getMonth() == 0) { // 1 Jan
    welcomeMsgs.push("Happy new year!");
}

// Calculations
function calcAge() {
    var ageDifMs = NOW - new Date("1998/07/13").getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


// Setting values
function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function setContent(id, value) {
    let element = document.getElementById(id);
    if (element !== null) {
        element.innerHTML = value;
    }
}

function initFields() {
    setContent("welcome", randomElement(welcomeMsgs))
    setContent("age", calcAge())
    setContent("copyyear", NOW.getFullYear())
    setContent("error404", randomElement(notfoundMsgs))
}

(() => initFields())();
