let now = new Date();

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let month = months[now.getMonth()];

let todayDate = document.querySelector(".todayDate");

todayDate.innerHTML = ` ${day},  ${date}/${month}/${year} ${hour}:${minutes} `;
//

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#fahrenheittemp");
  temperatureElement.innerHTML = 82.4;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#celciustemp");
  temperatureElement.innerHTML = 28;
}

//

let searchButton = document.querySelector("#searchButton");
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let currentCity = document.querySelector("h4");
  currentCity.innerHTML = `${city}`;
}

function search(event) {
  event.preventDefault();
  let h4 = document.querySelector("h4");
  let searchInput = document.querySelector("#city-input");
  h4.innerHTML = `${searchInput.value}`;
  let apiKey = "589343f359fb01e2574b3e2b59dcf62";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
