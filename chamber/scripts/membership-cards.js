//all of the below is copied from another .js
// const getString = window.location.search;
// console.log(getString);

// const myInfo = new URLSearchParams(getString);
// console.log(myInfo);

// document.querySelector('#results').innerHTML = `
//   <p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')} </p> 
//   <p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
//   <p>Your Phone: ${myInfo.get('phone')}</p>
//   <p>Your email is: ${myInfo.get('email')}</p>`;
import { membershipLevels } from "../data/membership.js";

// ----------- DISPLAYING SPOTLIGHT BUSINESS CARDS -----------

function displaySpotlightMembers(members) {
  //   const spotlightMembers = members.filter(member => member.memberLevel === 3 || member.memberLevel === 2);
  //   const selectedMembers = [];
  //   //below: returns a random interger between 0 and the length of the spotlightMembers array minus 1
  //   for (let i = 0; i < 2; i++) {
  //     // creates an array of 2 unique random spotlight members
  //     const randInt = getRandomInt(0, spotlightMembers.length - 1);
  //     console.log(randInt);
  //     selectedMembers.push(spotlightMembers[randInt]);
  //     spotlightMembers.splice(randInt, 1);
  //     // console.log(spotlightMembers);
  //     console.log(selectedMembers);
  //   }
  //   selectedMembers.forEach((member) => {
  //     let card = document.createElement('section');
  //     let name = document.createElement('h3');
  //     let logo = document.createElement('img');
  //     let phone = document.createElement('p');
  //     let contact = document.createElement('div');
  //     let address = document.createElement('p');
  //     let url = document.createElement('a');
  //     let status = document.createElement('p');
  //     card.setAttribute('class', 'sCard');
  //     name.innerHTML = `${member.name}`;
  //     logo.setAttribute('src', member.logo);
  //     logo.setAttribute('alt', `${member.name} logo`);
  //     logo.setAttribute('width', '100px');
  //     logo.setAttribute('length', '100px');
  //     phone.textContent = `${member.phone}`;
  //     address.textContent = `${member.address}`;
  //     url.textContent = `${member.URLName}`;
  //     url.setAttribute('href', member.URL);
  //     url.setAttribute('target', '_blank');
  //     if (member.memberLevel === 3) {
  //       status.textContent = "Gold Status Member";
  //       status.setAttribute('class', 'gold')
  //     }
  //     if (member.memberLevel === 2) {
  //       status.textContent = "Silver Status Member";
  //       status.setAttribute('class', 'silver')
  //     }
  //     contact.setAttribute('id', 'contact')
  //     contact.appendChild(phone);
  //     contact.appendChild(address);
  //     contact.appendChild(url);
  //     card.appendChild(name);
  //     card.appendChild(logo);
  //     card.appendChild(contact);
  //     card.appendChild(status);
  //     spotlightCards.appendChild(card);

  //   });

}


// // general function for choosing a number between a minimum number and a maximum number:
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }