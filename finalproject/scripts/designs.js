// ---------------- FETCHING AND DISPLAYING NAILS CARD DATA ----------------
const nailsData = 'data/nail-styles.json';

// last checked
const cards = document.getElementById('cards');
let nailStyles = [];  
//above list outside function allows for global use

async function getNailsData() {
  try {
    const response = await fetch(nailsData);
    if (!response.ok) throw new Error('Fetch failed');
    const data = await response.json();
    displayNails(data.nails);
  } catch (error) {
    console.error(error);
  }
}
getNailsData();  //call to the above function 

function displayNails(nails) {
  cards.innerHTML = ''; //clears div
//   if (cards.classList.contains('list')) {
//     nails.forEach((business) => {
    //   let card = document.createElement('section');
    //   let name = document.createElement('h2');
    //   // let tagline = document.createElement('p');
    //   // let image = document.createElement('img');
    //   let contact = document.createElement('div');
    //   let email = document.createElement('p');
    //   let phone = document.createElement('p');
    //   let url = document.createElement('a');
    //   card.setAttribute('class', 'card');
    //   name.innerHTML = `${business.name}`;
    //   // tagline.textContent = `${business.tagline}`;
    //   // tagline.setAttribute('class', 'tagline')
    //   email.textContent = `EMAIL: ${business.email}`;
    //   phone.textContent = `PHONE: ${business.phone}`;
    //   url.textContent = `URL: ${business.URLName}`;
    //   url.setAttribute('href', business.URL);
    //   url.setAttribute('target', '_blank');
    //   url.setAttribute('class', 'list');
    //   // image.setAttribute('src', business.image);
    //   // image.setAttribute('alt', `${business.name} photograph`);
    //   // image.setAttribute('loading', 'lazy');
    //   // image.setAttribute('width', '100');
    //   // image.setAttribute('length', '100');
    //   contact.setAttribute('id', 'contact')
    //   contact.appendChild(email);
    //   contact.appendChild(phone);
    //   contact.appendChild(url);
    //   card.appendChild(name);
    //   // card.appendChild(tagline);
    //   // card.appendChild(image);
    //   card.appendChild(contact);

//       cards.appendChild(card);
//     });
//   }
//   else {
//     businesses.forEach((business) => {
//       let card = document.createElement('section');
    //   let name = document.createElement('h2');
    //   let tagline = document.createElement('p');
    //   let image = document.createElement('img');
    //   let contact = document.createElement('div');
    //   let email = document.createElement('p');
    //   let phone = document.createElement('p');
    //   let url = document.createElement('a');
    //   card.setAttribute('class', 'card');
    //   name.innerHTML = `${business.name}`;
    //   tagline.textContent = `${business.tagline}`;
    //   tagline.setAttribute('class', 'tagline')
    //   email.textContent = `EMAIL: ${business.email}`;
    //   phone.textContent = `PHONE: ${business.phone}`;
    //   url.textContent = `URL: ${business.URLName}`;
    //   image.setAttribute('src', business.image);
    //   image.setAttribute('alt', `${business.name} photograph`);
    //   image.setAttribute('loading', 'lazy');
    //   image.setAttribute('width', '100');
    //   image.setAttribute('height', '100');
    //   url.setAttribute('href', business.URL);
    //   url.setAttribute('target', '_blank');
    //   contact.setAttribute('id', 'contact');
    //   contact.appendChild(email);
    //   contact.appendChild(phone);
    //   contact.appendChild(url);
    //   card.appendChild(name);
    //   card.appendChild(tagline);
    //   card.appendChild(image);
    //   card.appendChild(contact);

    //   cards.appendChild(card);
    // });
//   }
}
