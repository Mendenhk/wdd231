// Last checked here


const businessData = 'data/members.json';
//above: JSON array of objects containing business information
const cards = document.getElementById('cards');

async function getBusinessData() {
    const response = await fetch(businessData);
    //above:  data request from JSON formated file.  await makes further code pause until data returned.
    const data = await response.json();
    //above: parses JSON to object and saves in the variable "data".  await used to pause code until finished.
    console.table(data.companies);
    // above: temp output test of data response.  data.companies because data is an object containing a single array of objects called prophets.  Table works best with arrays directly, not objects.
    // displayProphets(data.prophets);
}
getBusinessData();  //call to the above function 

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Protrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '500');
        portrait.setAttribute('length', '300');
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}