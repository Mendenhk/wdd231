const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "b880fde6b814b0cab73283eb5f8c824b";
const myLat = "35.37";
const myLon = "-120.85";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=imperial&appid=${myKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // console.table(data);
            // displayResults(data); // uncomment when ready
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    console.log('hello');
    myTown.innerHTML = `City: ${data.name}`;
    myDescription.innerHTML = `description: ${data.weather[0].description}`;
    myTemperature.innerHTML = `Temperature: ${data.main.temp} &degF`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();
