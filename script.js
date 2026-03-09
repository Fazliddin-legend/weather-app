const apiKey = "ca04401bfa716e498a6cd54905fff781";

async function getWeather(){

const city = document.getElementById("cityInput").value;

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

displayWeather(data);

getForecast(city);

}

function displayWeather(data){

document.getElementById("cityName").innerText = data.name;

document.getElementById("temperature").innerText =
Math.round(data.main.temp) + "°C";

document.getElementById("description").innerText =
data.weather[0].description;

const icon =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

document.getElementById("weatherIcon").src = icon;

}

async function getForecast(city){

const url =
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

const forecastBox = document.getElementById("forecast");

forecastBox.innerHTML = "";

for(let i=0;i<5;i++){

const day = data.list[i*8];

forecastBox.innerHTML += `
<div class="day">

<p>${day.dt_txt.split(" ")[0]}</p>

<p>${Math.round(day.main.temp)}°C</p>

</div>
`;

}

}

function handleKey(event){

if(event.key === "Enter"){

getWeather();

}

}

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

function getLocationWeather(){

navigator.geolocation.getCurrentPosition(async position => {

const lat = position.coords.latitude;

const lon = position.coords.longitude;

const url =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

displayWeather(data);

});

}