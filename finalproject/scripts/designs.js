// ----------- FETCHING AND DISPLAYING NAILS CARD DATA -----------
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
		let myInnerDiv = document.createElement('div');
		let singleCost = document.createElement('p');
		let setCost = document.createElement('p');

		card.setAttribute('class', 'dCard');
		myImage.setAttribute('src', `${item.image}`);
		myImage.setAttribute('alt', `${item.name}`);
		myImage.setAttribute('width', '200');
		myImage.setAttribute('height', '200');
		myName.innerHTML = `${item.name}`;
		singleCost.innerHTML = `Price per nail: $${item.singlePrice}`;
		setCost.innerHTML = `Price per set (10): $${item.setPrice}`;
		myInnerDiv.appendChild(singleCost);
		myInnerDiv.appendChild(setCost);
		card.appendChild(myImage);
		card.appendChild(myName);
		card.append(myInnerDiv);
		elegantSection.appendChild(card);
		cards.appendChild(elegantSection);
	});

	threeDList.forEach((item) => {
		let card = document.createElement('div');
		let myImage = document.createElement('img');
		let myName = document.createElement('h3');
		let myInnerDiv = document.createElement('div');
		let singleCost = document.createElement('p');
		let setCost = document.createElement('p');

		card.setAttribute('class', 'dCard');
		myImage.setAttribute('src', `${item.image}`);
		myImage.setAttribute('alt', `${item.name}`);
		myName.innerHTML = `${item.name}`;
		singleCost.innerHTML = `Price per nail: $${item.singlePrice}`;
		setCost.innerHTML = `Price per set (10): $${item.setPrice}`;
		myInnerDiv.appendChild(singleCost);
		myInnerDiv.appendChild(setCost);
		card.appendChild(myImage);
		card.appendChild(myName);
		card.append(myInnerDiv);
		threeDSection.appendChild(card);
		cards.appendChild(threeDSection);
	});

	playfulList.forEach((item) => {
		let card = document.createElement('div');
		let myImage = document.createElement('img');
		let myName = document.createElement('h3');
		let myInnerDiv = document.createElement('div');
		let singleCost = document.createElement('p');
		let setCost = document.createElement('p');

		card.setAttribute('class', 'dCard');
		myImage.setAttribute('src', `${item.image}`);
		myImage.setAttribute('alt', `${item.name}`);
		myName.innerHTML = `${item.name}`;
		singleCost.innerHTML = `Price per nail: $${item.singlePrice}`;
		setCost.innerHTML = `Price per set (10): $${item.setPrice}`;
		myInnerDiv.appendChild(singleCost);
		myInnerDiv.appendChild(setCost);
		card.appendChild(myImage);
		card.appendChild(myName);
		card.append(myInnerDiv);
		playfulSection.appendChild(card);
		cards.appendChild(playfulSection);
	});
}

//code for local storage greeting based on visits
const backAgain = document.querySelector('#back-again');
const msOneDay = 86400000;
// const twoDaysAgo = 1770261000000;
// const twoHoursAgo = 1770253800000;
const msDateNow = Date.now();
//above: stores date as a millisecond number

const storedValue = localStorage.getItem('sreyNailsVisited');
// console.log(storedValue);
if (storedValue !== null) {
	localStorage.setItem('sreyNailsVisited', msDateNow);
	// console.log(`not null: ${localStorage.getItem('sreyNailsVisited')}`);
	// console.log(`not null: ${Date(localStorage.getItem('vissreyNailsVisitedited'))}`);
	if ((msDateNow - storedValue) < msOneDay) {
		backAgain.innerHTML = 'Thank you for visiting again.';
	} else {
		const days = Math.floor((msDateNow - storedValue) / msOneDay);
		backAgain.innerHTML = `You last visited ${days} days ago.`;
	}
} else {
	localStorage.setItem('sreyNailsVisited', msDateNow);
	// console.log(`null: ${localStorage.getItem('sreyNailsVisited')}`);
	backAgain.innerHTML = "Welcome! Let us know if you have any questions."
}