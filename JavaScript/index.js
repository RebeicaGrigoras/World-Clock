function updateTime() {
  
  // Rome
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTimeNow = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTimeNow.format("MMMM Do, YYYY");
  romeTimeElement.innerHTML = `${romeTimeNow.format(
    "h:mm:ss"
  )} <small>${romeTimeNow.format("A")}</small>`;

  //Brasil

  let brasilElement = document.querySelector("#brasilia");
  let brasilDateElement = brasilElement.querySelector(".date");
  let brasilTimeElement = brasilElement.querySelector(".time");
  let brasilTimeNow = moment().tz("Brazil/East");

  brasilDateElement.innerHTML = brasilTimeNow.format("MMMM Do, YYYY");
  brasilTimeElement.innerHTML = `${brasilTimeNow.format(
    "h:mm:ss"
  )} <small>${brasilTimeNow.format("A")}</small>`;

  //Toronto

  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTimeNow = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = torontoTimeNow.format("MMMM Do, YYYY");
  torontoTimeElement.innerHTML = `${torontoTimeNow.format(
    "h:mm:ss"
  )} <small>${torontoTimeNow.format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city-block">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
          <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", function (event) {
  // Wrap the updateCity function in an anonymous function
  setInterval(function () {
    updateCity(event);
  }, 1000);
});
