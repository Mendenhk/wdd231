import { discoverMorro } from '../data/discover-data.mjs';
console.log(discoverMorro);


// ----------- FUNCTION FOR DISPLAYING DISCOVER CARDS -----------
function displayDiscoverCards(places) {
  const discoverSection = document.querySelector('#discover-cards-section');
  places.forEach((level) => {
    let dCard = document.createElement('section');
    let myName = document.createElement('h2');
    let myPhoto = document.createElement('img');
    let myAddress = document.createElement('p');
    let myCity = document.createElement('p');
    let myDescription = document.createElement('p');
    dCard.setAttribute('class', 'dCard');
    myName.innerHTML = `${level.name}`;
    myPhoto.setAttribute('src', level.image);
    myPhoto.setAttribute('alt', level.name);
    myPhoto.setAttribute('loading', 'lazy');
    myAddress.innerHTML = `${level.address}`;
    myCity.innerHTML = `${level.city}`;
    myDescription.innerHTML = `${level.description}`;
    dCard.appendChild(myName);
    dCard.append(myPhoto);
    dCard.appendChild(myAddress);
    dCard.appendChild(myCity);
    dCard.appendChild(myDescription);
    discoverSection.appendChild(dCard);
  });
}

displayDiscoverCards(discoverMorro);