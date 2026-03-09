const apiKey = "ca04401bfa716e498a6cd54905fff781";

async function getWeather(){

const city = document.getElementById("cityInput").value;

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

if(data.cod === "404"){

alert("City not found");

return;

}

document.getElementById("cityName").innerText = data.name;

document.getElementById("temperature").innerText =
Math.round(data.main.temp) + "°C";

document.getElementById("description").innerText =
data.weather[0].description;

const icon =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

document.getElementById("weatherIcon").src = icon;

}

function handleKey(event){

if(event.key === "Enter"){

getWeather();

}

}