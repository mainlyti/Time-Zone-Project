//New York
let newYorkElement = document.querySelector("#newYork");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");

newYorkDateElement.innerHTML = moment().format("dddd MMMM D, YYYY");
