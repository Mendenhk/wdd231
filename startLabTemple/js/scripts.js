import { temples } from '../data/temples.js';
import { url } from '../data/temples.js';
console.log(temples);

const showHere = document.querySelector('#showHere');
// const openButton = document.querySelector('#openButton');
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myinfo = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');

myclose.addEventListener('click', () => {
  mydialog.close();
});

function displayItems(data) {
  data.forEach(temple => {
    // showHere.innerHTML = `${temple.name}`;
    const photo = document.createElement('img');
    photo.src = `${url}${temple.path}`;
    photo.alt = temple.name;
    photo.addEventListener('click', () => showStuff(temple));
    // console.log(temple.name);
    showHere.appendChild(photo);
  })
}
displayItems(temples);

function showStuff(temple) {
  mytitle.innerHTML = temple.name;
  mydialog.showModal();
  myinfo.innerHTML = `Dedicated ${temple.dedicated} by ${temple.person} as temple number ${temple.number}`
}