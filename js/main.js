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


let fields = {
    "welcome": random(welcomeMsgs),
    "age": calcAge(),
    "copyyear": new Date().getFullYear(),
};

function initFields() {
  for (let key in fields) {
         let value = fields[key];
        document.getElementById(key).innerHTML = value;
  }
}

(() => initFields())();