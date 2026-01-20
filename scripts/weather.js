// const temp = document.getElementById('current-temp');
// const weatherIcon = document.querySelector('#weather-icom');
// const caption = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&units=imperial&appid={b880fde6b814b0cab73283eb5f8c824b}'

// async function apiFetch() {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // testing only
//       // displayResults(data); // uncomment when ready
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// apiFetch();

// code added by teacher
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "b880fde6b814b0cab73283eb5f8c824b";
const myLat = "42.91";
const myLon = "-76.80";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=imperial&appid=${myKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      console.table(data);
      // displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();