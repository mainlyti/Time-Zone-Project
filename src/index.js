function updateTime() {
  let currentCityElement = document.querySelector("h2");
  let currentCityTimeElement = document.querySelector(".currentTime");
  let currentCityDateElement = document.querySelector(".currentDate");
  let currentCity = moment.tz.guess();
  let currentCityDate = moment.tz(currentCity);

  currentCityElement.innerHTML = currentCity.replace("_", " ").split("/")[1];
  currentCityTimeElement.innerHTML = currentCityDate.format(
    "h:mm:ss [<small>]a[</small>]"
  );
  currentCityDateElement.innerHTML =
    currentCityDate.format("dddd MMMM D, YYYY");

  //London
  let londonElement = document.querySelector("#london");
  let londonTimeElement = londonElement.querySelector("#london-time");
  let londonTime = moment().tz("Europe/London");

  londonTimeElement.innerHTML = londonTime.format("h:mm [<small>]a[</small>]");

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoTimeElement = tokyoElement.querySelector("#tokyo-time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm [<small>]a[</small>]");

  //New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkTimeElement = newYorkElement.querySelector("#new-york-time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm [<small>]a[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#allDisplayedCities");
  cityElement.innerHTML = `
  <div class="currentCity">
          <h2>${cityName}</h2>
          <div class="currentTime">${cityTime.format(
            "h:mm:ss [<small>]a[</small>]"
          )}</div>
          <div class="currentDate">${cityTime.format("dddd MMMM D, YYYY")}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
