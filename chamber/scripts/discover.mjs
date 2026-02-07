import { discoverMorro } from '../data/discover-data.mjs';
console.log(discoverMorro);


// ----------- FUNCTION FOR DISPLAYING DISCOVER CARDS -----------
function displayDiscoverCards(places) {
  const discoverSection = document.querySelector('#discover-cards-section');
  places.forEach((level) => {
    let dCard = document.createElement('section');
    let myName = document.createElement('h2');
    let myButton = document.createElement('button');
    let figure = document.createElement('figure');
    let myPhoto = document.createElement('img');
    let myAddress = document.createElement('address');
    let myDescription = document.createElement('p');
    dCard.setAttribute('class', 'dCard');
    myName.innerHTML = `${level.name}`;
    myButton.textContent = 'Learn More';
    myPhoto.setAttribute('src', level.image);
    myPhoto.setAttribute('alt', level.name);
    myPhoto.setAttribute('loading', 'lazy');
    figure.appendChild(myPhoto);
    figure.appendChild(myButton);
    myAddress.innerHTML = `${level.address}<br>${level.city}`;
    myDescription.innerHTML = `${level.description}`;
    dCard.appendChild(myName);
    dCard.append(figure);
    dCard.appendChild(myAddress);
    dCard.appendChild(myDescription);
    discoverSection.appendChild(dCard);
  });
}

displayDiscoverCards(discoverMorro);

const welcomeElement = document.querySelector('#welcomeBack');
const msOneDay = 86400000;
const twoDaysAgo = 1770261000000;
const twoHoursAgo = 1770253800000;
const msDateNow = Date.now();
//above: stores date as a millisecond number

const storedValue = localStorage.getItem('visited');
// console.log(storedValue);
if (storedValue !== null) {
  localStorage.setItem('visited', msDateNow);
  // console.log(`not null: ${localStorage.getItem('visited')}`);
  // console.log(`not null: ${Date(localStorage.getItem('visited'))}`);
  if ((msDateNow - storedValue) < msOneDay) {
    welcomeElement.innerHTML = 'Back so soon! Awesome!';
  } else {
    const days = Math.floor((msDateNow - storedValue) / msOneDay);
    welcomeElement.innerHTML = `You last visited ${days} days ago.`;
  }
} else {
  localStorage.setItem('visited', msDateNow);
  // console.log(`null: ${localStorage.getItem('visited')}`);
  welcomeElement.innerHTML = "Welcome! Let us know if you have any questions."
}