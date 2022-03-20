const API_KEY = "8bb8f0547c2a832495d78e8793733b17";
const locationWeather = document.querySelector("#locationWeather");

navigator.geolocation.getCurrentPosition(successFunction, errorFunction);

function successFunction(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const temp = data.main.temp;
      const name = data.name;
      const weather = data.weather[0].main;
      locationWeather.innerHTML = `City : ${name} | Weather : ${weather} | Temperature : ${temp}`;
    });
}
function errorFunction(position) {
  alert("Something went wrong...");
}
