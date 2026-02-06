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