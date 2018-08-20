function calcAge() {
    var ageDifMs = Date.now() - new Date("1998/07/13").getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function random(array) {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
}

let welcomeMsgs = [
    "Welcome to my little site OwO",
    "Please wipe your feet on the way in!",
    "Hey there :)",
    "Hello! And again, welcome to the Apeture Sci- oh wait, wrong output stream...",
    "Cats > Dogs. Fite me"
];

let notfoundMsgs = [
    "OwO, this isn't what you were looking for, was it?",
    "Nope, not here. I checked.",
    "Sorry, but the page you were looking for is in a different castle!",
];


let fields = {
    "welcome": random(welcomeMsgs),
    "age": calcAge(),
    "copyyear": new Date().getFullYear(),
    "error404": random(notfoundMsgs),
};

function initFields() {
  for (let key in fields) {
        let value = fields[key];
        let element = document.getElementById(key);
        if (element !== null) {
            element.innerHTML = value;
        }
  }
}

(() => initFields())();