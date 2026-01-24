//spotlightCards.js for the home webpage
// ---------------- FETCHING BUSINESS CARD DATA ----------------
const businessData = 'data/members.json';
//above: JSON array of objects containing business information
const spotlightCards = document.getElementById('spotlight-cards');
let businesses = [];  //allows global use

async function getBusinessData(displayFunction) {
  const response = await fetch(businessData);
  //above:  data request from JSON formated file.  await makes further code pause until data returned.
  const data = await response.json();
  //above: parses JSON to object and saves in the variable "data".  await used to pause code until finished.
  // console.table(data.companies);
  // above: temp output test of data response.  data.companies because data is an object containing a single array of objects called companies.  Table works best with arrays directly, not objects.
  businesses = data.companies;
  displayFunction(businesses);
  //call to function below.
}
getBusinessData(displaySpotlightMembers);  //call to the above function 


// ---------------- DISPLAYING SPOTLIGHT BUSINESS CARDS ----------------

function displaySpotlightMembers(members) {
  const spotlightMembers = members.filter(member => member.memberLevel === 3 || member.memberLevel === 2);
  const selectedMembers = [];
  //below: returns a random interger between 0 and the length of the spotlightMembers array minus 1
  for (let i = 0; i < 2; i++) {
    // creates an array of 2 unique random spotlight members
    const randInt = getRandomInt(0, spotlightMembers.length - 1);
    console.log(randInt);
    selectedMembers.push(spotlightMembers[randInt]);
    spotlightMembers.splice(randInt, 1);
    // console.log(spotlightMembers);
    console.log(selectedMembers);
  }
  selectedMembers.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    let contact = document.createElement('div');
    let address = document.createElement('p');
    let url = document.createElement('p');
    let status = document.createElement('p');
    card.setAttribute('class', 'sCard');
    name.innerHTML = `${member.name}`;
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `${member.name} logo`);
    logo.setAttribute('width', '100px');
    logo.setAttribute('length', '100px');
    phone.textContent = `${member.phone}`;
    address.textContent = `${member.address}`;
    url.textContent = `${member.URL}`;
    if (member.memberLevel === 3) {
      status.textContent = "Gold Status Member";
      status.setAttribute('class', 'gold')
    }
    if (member.memberLevel === 2) {
      status.textContent = "Silver Status Member";
      status.setAttribute('class', 'silver')
    }
    contact.setAttribute('id', 'contact')
    contact.appendChild(phone);
    contact.appendChild(address);
    contact.appendChild(url);
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(contact);
    card.appendChild(status);
    spotlightCards.appendChild(card);
    // });
    // }

    // getBusinessData().then(() => {
    //   displaySpotlightMembers(businesses);
    // });
  });

}


// general function for choosing a number between a minimum number and a maximum number:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}