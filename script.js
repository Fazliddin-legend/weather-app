const apiKey = "ca04401bfa716e498a6cd54905fff781";

async function getWeather(){

const city = document.getElementById("cityInput").value;

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);
const data = await response.json();

if(data.cod === "404"){
document.getElementById("weatherResult").innerHTML = "City not found";
return;
}

document.getElementById("weatherResult").innerHTML = `
<h2>${data.name}</h2>
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].main}</p>
`;

}catch(error){

document.getElementById("weatherResult").innerHTML =
"Error loading weather data";

}

}

function handleKey(event){
if(event.key === "Enter"){
getWeather();
}
}