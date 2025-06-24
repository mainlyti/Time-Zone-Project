function updateTime() {
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".currentDate");
    let newYorkTimeElement = newYorkElement.querySelector(".currentTime");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("dddd MMMM D, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#allDisplayedCities");
  cityElement.innerHTML = `
  <div class="currentCity">
          <h2>${cityName}</h2>
          <div class="currentTime">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
          <div class="currentDate">${cityTime.format("dddd MMMM D, YYYY")}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
