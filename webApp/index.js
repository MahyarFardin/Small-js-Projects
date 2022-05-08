const loc = document.querySelector(".location");
const image = document.querySelector(".weather-img");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temperature");
const apiKey = "bd8ec8998fdfc1753bb8ac6c864a1e80"
var position = [];
var latitude, longitude
navigator.geolocation.getCurrentPosition(setPosition);

function setPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function getWeather(longitude, latitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    fetch(api)
        .then((jsonData) => {
            let data = jsonData.json();
            return data
        })
        .then((data) => {
            console.log(data)
            loc.innerHTML=data.sys.country+", "+data.name;
            weather.innerHTML=data.weather[0].main;
            temp.innerHTML=data.main.temp+" K"
            image.src="/icons/"+data.weather[0].icon+".png"
        })
}
