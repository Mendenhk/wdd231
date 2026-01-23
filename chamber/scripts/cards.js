//cards.js-for the member directory webp
// ---------------- FETCHING AND DISPLAYING BUSINESS CARD DATA ----------------
const businessData = 'data/members.json';
//above: JSON array of objects containing business information
const cards = document.getElementById('cards');
let businesses = [];  //allows global use

async function getBusinessData() {
  const response = await fetch(businessData);
  //above:  data request from JSON formated file.  await makes further code pause until data returned.
  const data = await response.json();
  //above: parses JSON to object and saves in the variable "data".  await used to pause code until finished.
  // console.table(data.companies);
  // above: temp output test of data response.  data.companies because data is an object containing a single array of objects called companies.  Table works best with arrays directly, not objects.
  businesses = data.companies;
  displayBusinesses(businesses);
  //call to function below.
}
getBusinessData();  //call to the above function 

const displayBusinesses = (businesses) => {
  cards.innerHTML = ''; //clears div
  if (cards.classList.contains('list')) {
    businesses.forEach((business) => {
      let card = document.createElement('section');
      let name = document.createElement('h3');
      // let tagline = document.createElement('p');
      // let image = document.createElement('img');
      let contact = document.createElement('div');
      let email = document.createElement('p');
      let phone = document.createElement('p');
      let url = document.createElement('p');
      card.setAttribute('class', 'card');
      name.innerHTML = `${business.name}`;
      // tagline.textContent = `${business.tagline}`;
      // tagline.setAttribute('class', 'tagline')
      email.textContent = `EMAIL: ${business.email}`;
      phone.textContent = `PHONE: ${business.phone}`;
      url.textContent = `URL: ${business.URL}`;
      // image.setAttribute('src', business.image);
      // image.setAttribute('alt', `${business.name} photograph`);
      // image.setAttribute('loading', 'lazy');
      // image.setAttribute('width', '100');
      // image.setAttribute('length', '100');
      contact.setAttribute('id', 'contact')
      contact.appendChild(email);
      contact.appendChild(phone);
      contact.appendChild(url);
      card.appendChild(name);
      // card.appendChild(tagline);
      // card.appendChild(image);
      card.appendChild(contact);

      cards.appendChild(card);
    });
  }
  else {
    businesses.forEach((business) => {
      let card = document.createElement('section');
      let name = document.createElement('h3');
      let tagline = document.createElement('p');
      let image = document.createElement('img');
      let contact = document.createElement('div');
      let email = document.createElement('p');
      let phone = document.createElement('p');
      let url = document.createElement('p');
      card.setAttribute('class', 'card');
      name.innerHTML = `${business.name}`;
      tagline.textContent = `${business.tagline}`;
      tagline.setAttribute('class', 'tagline')
      email.textContent = `EMAIL: ${business.email}`;
      phone.textContent = `PHONE: ${business.phone}`;
      url.textContent = `URL: ${business.URL}`;
      image.setAttribute('src', business.image);
      image.setAttribute('alt', `${business.name} photograph`);
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '100');
      image.setAttribute('length', '100');
      contact.setAttribute('id', 'contact')
      contact.appendChild(email);
      contact.appendChild(phone);
      contact.appendChild(url);
      card.appendChild(name);
      card.appendChild(tagline);
      card.appendChild(image);
      card.appendChild(contact);

      cards.appendChild(card);
    });
  }
}

// ---------------- LIST OR CARDS BUTTON FUNCTION ----------------
const listCardButton = document.querySelector('#listOrCards');
listCardButton.addEventListener('click', () => {
  cards.classList.toggle('list');
  listCardButton.classList.toggle('list');
  displayBusinesses(businesses);
});

// ---------------- SPOTLIGHT BUSINESS CARDS ----------------
// Check all of the following code for correctness
// const spotlightCards = document.getElementById('spotlightCards');

// function displaySpotlightMembers(members) {
  // const spotlightMembers = members.filter(member => member.memberLevel === 3 || member.memberLevel === );
  // const selectedMembers = [];
  // while (selectedMembers.length < 3 && spotlightMembers.length > 0) {
  //   const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
  //   selectedMembers.push(spotlightMembers.splice(randomIndex, 1)[0]);
  // }
  // selectedMembers.forEach((member) => {
  //   let card = document.createElement('section');
  //   let name = document.createElement('h3');
  //   let tagline = document.createElement('p');
  //   let image = document.createElement('img');
  //   let contact = document.createElement('div');
  //   let email = document.createElement('p');
  //   let phone = document.createElement('p');
  //   let url = document.createElement('p');
  //   card.setAttribute('class', 'card');
  //   name.innerHTML = `${member.name}`;
  //   tagline.textContent = `${member.tagline}`;
  //   tagline.setAttribute('class', 'tagline')
  //   email.textContent = `EMAIL: ${member.email}`;
  //   phone.textContent = `PHONE: ${member.phone}`;
  //   url.textContent = `URL: ${member.URL}`;
  //   image.setAttribute('src', member.image);
  //   image.setAttribute('alt', `${member.name} photograph`);
  //   image.setAttribute('loading', 'lazy');
  //   image.setAttribute('width', '100');
  //   image.setAttribute('length', '100');
  //   contact.setAttribute('id', 'contact')
  //   contact.appendChild(email);
  //   contact.appendChild(phone);
  //   contact.appendChild(url);
  //   card.appendChild(name);
  //   card.appendChild(tagline);
  //   card.appendChild(image);
  //   card.appendChild(contact);

  //   spotlightCards.appendChild(card);
  // });
// }

// getBusinessData().then(() => {
//   displaySpotlightMembers(businesses);
// });
