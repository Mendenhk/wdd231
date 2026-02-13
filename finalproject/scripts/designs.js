// ---------------- FETCHING AND DISPLAYING NAILS CARD DATA ----------------
const nailsData = 'data/nail-styles.json';

const cards = document.getElementById('cards');
let nailStyles = [];  
//above list outside function allows for global use

async function getNailsData() {
  try {
    const response = await fetch(nailsData);
    // console.log(response);
    if (!response.ok) throw new Error('Fetch failed');
    const data = await response.json();
		// console.log(data);
    displayNails(data.nails);
  } catch (error) {
    console.error(error);
  }
}
getNailsData();  //call to the above function 

function displayNails(stylesObject) {
	// console.log(stylesObject);
  cards.innerHTML = ''; //clears div
  let elegantSection = document.createElement('section');
	let elegantTitle = document.createElement('H2');
	elegantTitle.innerHTML = `ELEGANT`;
	elegantSection.appendChild(elegantTitle);
  elegantSection.setAttribute('id', 'elegant');
  let threeDSection = document.createElement('section');
	let threeDTitle = document.createElement('H2');
	threeDTitle.innerHTML = `3D NAILS`;
	threeDSection.appendChild(threeDTitle);
  threeDSection.setAttribute('id', 'threeD');
  let playfulSection = document.createElement('section');
	let playfulTitle = document.createElement('H2');
	playfulTitle.innerHTML = `PLAYFUL`;
	playfulSection.appendChild(playfulTitle);
  playfulSection.setAttribute('id', 'playful');

  let elegantList = [];
  let threeDList = [];
  let playfulList = [];
	elegantList = stylesObject.filter((object) => object.category === 'elegant')
	console.log(elegantList);
	threeDList = stylesObject.filter((object) => object.category === '3D')
	console.log(threeDList);
	playfulList = stylesObject.filter((object) => object.category === 'playful')
	console.log(playfulList);

	// last checked
	//adding cards to each section from the corresponding list
	elegantList.forEach((item) => {
		let card = document.createElement('div');
		let myImage = document.createElement('img');
		let myName = document.createElement('h3');
		let singleCost = document.createElement('p');
		let setCost = document.createElement('p');
		
		myImage.setAttribute('src', `${item.image}`);
		myImage.setAttribute('alt', `${item.name}`);
		myName.innerHTML = `${item.name}`;
		singleCost.innerHTML = `Price per nail: $${item.singlePrice}`;
		setCost.innerHTML = `Price per set (10): $${item.setPrice}`;
		card.appendChild(myImage);
		card.appendChild(myName);
		card.appendChild(singleCost);
		card.appendChild(setCost);
		elegantSection.appendChild(card);
		cards.appendChild(elegantSection);
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

      cards.appendChild(threeDSection);
      cards.appendChild(playfulSection);
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
