const myTown = document.querySelector('#town');
const myTemperature = document.querySelector('#temperature');
const myDescription = document.querySelector('#description');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector("#sunrise");
const myGraphic = document.querySelector('#graphic');
const myToday = document.querySelector('#today');
const myTomorrow = document.querySelector('#tomorrow');
const myTwoDays = document.querySelector('#two-days');

const myKey = "b880fde6b814b0cab73283eb5f8c824b";
const myLat = "35.37";
const myLon = "-120.85";
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=imperial&appid=${myKey}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=imperial&appid=${myKey}`;


// -------------------- EXTRACTING WEATHER DATA ------------------
async function apiFetchWeather() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // console.table(data);
            // displayResults(data); // uncomment when ready
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// -------------------- DISPLAYING WEATHER DATA ------------------

function displayWeather(data) {
    myDescription.innerHTML = `${data.weather[0].description}`;
    myTemperature.innerHTML = `${data.main.temp} &degF`;
    high.innerHTML = `High: ${data.main.temp_max} &degF`;
    low.innerHTML = `Low: ${data.main.temp_min} &degF`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    const timestampRise = data.sys.sunrise;
    const riseDate = new Date(timestampRise * 1000);
    const riseTime = riseDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });
    sunrise.innerHTML = `Sunrise: ${riseTime}`;
    const timestampSet = data.sys.sunset;
    const setDate = new Date(timestampSet * 1000);
    const setTime = setDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });
    sunset.innerHTML = `Sunset: ${setTime}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetchWeather();

// -------------------- EXTRACTING FORECAST DATA ------------------
async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // console.table(data);
            // displayResults(data); // uncomment when ready
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// -------------------- DISPLAYING FORECAST DATA ------------------

function displayForecast(data) {
    const timestampTwoDays = data.list[16].dt;
    const twoDaysDate = new Date(timestampTwoDays * 1000);
    const twoDays = twoDaysDate.toLocaleDateString("en-US", {
        weekday: "long"
    });
    const timestampThreeDays = data.list[24].dt;
    const threeDaysDate = new Date(timestampThreeDays * 1000);
    const threeDays = threeDaysDate.toLocaleDateString("en-US", {
        weekday: "long"
    });
    myToday.innerHTML = `Tomorrow: ${data.list[8].main.temp_max} &degF`;
    myTomorrow.innerHTML = `${twoDays}: ${data.list[16].main.temp_max} &degF`;
    myTwoDays.innerHTML = `${threeDays}: ${data.list[24].main.temp_max} &degF`;
}

apiFetchForecast();