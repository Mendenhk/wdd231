// Last checked here


const businessData = 'data/members.json';
//above: JSON array of objects containing business information
const cards = document.getElementById('cards');

async function getBusinessData() {
    const response = await fetch(businessData);
    //above:  data request from JSON formated file.  await makes further code pause until data returned.
    const data = await response.json();
    //above: parses JSON to object and saves in the variable "data".  await used to pause code until finished.
    // console.table(data.companies);
    // above: temp output test of data response.  data.companies because data is an object containing a single array of objects called companies.  Table works best with arrays directly, not objects.
    displayBusinesses(data.companies);
    //call to function below.
}
getBusinessData();  //call to the above function 

const displayBusinesses = (businesses) => {
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