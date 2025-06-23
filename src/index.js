//New York
let newYorkElement = document.querySelector("#newYork");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");

newYorkDateElement.innerHTML = moment()
  .tz("America/New_York")
  .format("dddd MMMM D, YYYY");
newYorkTimeElement.innerHTML = moment()
  .tz("America/New_York")
  .format("h:mm:ss [<small>]A[</small>]");
