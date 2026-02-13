// ---------------- FETCHING AND DISPLAYING NAILS CARD DATA ----------------
const nailsData = 'data/nail-styles.json';

const cards = document.getElementById('cards');
let nailStyles = [];  
//above list outside function allows for global use

// last checked
async function getNailsData() {
  try {
    const response = await fetch(nailsData);
    console.log(response);
    if (!response.ok) throw new Error('Fetch failed');
    const data = await response.json();
		console.log(data);
    displayNails(data.nails);
  } catch (error) {
    console.error(error);
  }
}
getNailsData();  //call to the above function 

function displayNails(stylesObject) {
  cards.innerHTML = ''; //clears div
  let elegantSection = document.createElement('section');
  elegantSection.setAttribute('id', 'elegant');
  let threeDSection = document.createElement('section');
  threeDSection.setAttribute('id', 'threeD');
  let standardSection = document.createElement('section');
  standardSection.setAttribute('id', 'standard');
  let elegantList = [];
  let threeDList = [];
  let standardList = [];
	stylesObject.forEach((style) => {
		if (style.category === 'elegant') {
			elegantList.filter((style) => style.category === 'elegant');
			console.log(elegantList);
			//above creates a filtered list of elegant styles
			elegantList.forEach((style) => {
				let card = document.createElement('div');
				let myImage = document.createElement('img');
			});
		}
	});
//     nails.forEach((style) => {
    //   let card = document.createElement('section');
    //   let name = document.createElement('h2');
    //   // let tagline = document.createElement('p');
    //   // let image = document.createElement('img');
    //   let contact = document.createElement('div');
    //   let email = document.createElement('p');
    //   let phone = document.createElement('p');
    //   let url = document.createElement('a');
    //   card.setAttribute('class', 'card');
    //   name.innerHTML = `${style.name}`;
    //   // tagline.textContent = `${style.tagline}`;
    //   // tagline.setAttribute('class', 'tagline')
    //   email.textContent = `EMAIL: ${style.email}`;
    //   phone.textContent = `PHONE: ${style.phone}`;
    //   url.textContent = `URL: ${style.URLName}`;
    //   url.setAttribute('href', style.URL);
    //   url.setAttribute('target', '_blank');
    //   url.setAttribute('class', 'list');
    //   // image.setAttribute('src', style.image);
    //   // image.setAttribute('alt', `${style.name} photograph`);
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

      cards.appendChild(elegantSection);
      cards.appendChild(threeDSection);
      cards.appendChild(standardSection);
//     });
//   }
//   else {
//     nails.forEach((style) => {
//       let card = document.createElement('section');
    //   let name = document.createElement('h2');
    //   let tagline = document.createElement('p');
    //   let image = document.createElement('img');
    //   let contact = document.createElement('div');
    //   let email = document.createElement('p');
    //   let phone = document.createElement('p');
    //   let url = document.createElement('a');
    //   card.setAttribute('class', 'card');
    //   name.innerHTML = `${style.name}`;
    //   tagline.textContent = `${style.tagline}`;
    //   tagline.setAttribute('class', 'tagline')
    //   email.textContent = `EMAIL: ${style.email}`;
    //   phone.textContent = `PHONE: ${style.phone}`;
    //   url.textContent = `URL: ${style.URLName}`;
    //   image.setAttribute('src', style.image);
    //   image.setAttribute('alt', `${style.name} photograph`);
    //   image.setAttribute('loading', 'lazy');
    //   image.setAttribute('width', '100');
    //   image.setAttribute('height', '100');
    //   url.setAttribute('href', style.URL);
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
