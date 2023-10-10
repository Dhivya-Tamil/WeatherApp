const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const errormsg = document.querySelector(".error");


const apiKey = "32895a8de07a850febd6d2a0f6ec702a";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkWeather(city){
    const response = await fetch( baseUrl + city +`&appid=${apiKey}`);

    if(response.status==404){
        errormsg.style.display ='block';
        weather.style.display='none';
    }

    let data = await response.json();
    console.log(data)

    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed +" km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    errormsg.style.display ='none';
    weather.style.display = 'block';
}

searchbtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})



