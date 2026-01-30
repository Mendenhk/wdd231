import { membershipLevels } from "../data/membership.js";
console.log(membershipLevels);

//membership level Cards.js for the join webpage
// // ---------------- FETCHING BUSINESS CARD DATA ----------------
// const businessData = 'data/members.json';
// //above: JSON array of objects containing business information
// const spotlightCards = document.getElementById('spotlight-cards');
// let businesses = [];  //allows global use

// async function getBusinessData(displayFunction) {
//   const response = await fetch(businessData);
//   //above:  data request from JSON formated file.  await makes further code pause until data returned.
//   const data = await response.json();
//   //above: parses JSON to object and saves in the variable "data".  await used to pause code until finished.
//   // console.table(data.companies);
//   // above: temp output test of data response.  data.companies because data is an object containing a single array of objects called companies.  Table works best with arrays directly, not objects.
//   businesses = data.companies;
displayMembershipLevels(membershipLevels);
//call to function below.

// ----------- DISPLAYING MEMBERSHIP LEVEL CARDS -----------

function displayMembershipLevels(levels) {
  const levelsSection = document.querySelector('#level-cards');
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
  levels.forEach((level) => {
    let card = document.createElement('section');
    let title = document.createElement('h3');
    let benefits = document.createElement('div');
    let cost = document.createElement('p');
    let benefitText = document.createElement('p');
    let benefitUL = document.createElement('ul');
    let benefitButton = document.createElement('button');
    card.setAttribute('class', 'mCard');
    if (level.memberLevel === "NP") {
      card.setAttribute('id', 'np')
    }
    if (level.memberLevel === "Bronze") {
      card.setAttribute('id', 'bronze')
    }
    if (level.memberLevel === "Silver") {
      card.setAttribute('id', 'silver')
    }
    if (level.memberLevel === "Gold") {
      card.setAttribute('id', 'gold')
    }
    title.innerHTML = `${level.title}`;
    cost.innerHTML = `Yearly Cost: $${level.cost}`;
    benefitText.innerHTML = 'Benefits:';
    let benefitList = ``;
    level.benefits.forEach((line) => {
      const listLine = `<li>${line}</li>`;
      benefitList += listLine;
    });
    benefitUL.innerHTML = benefitList;
    benefitButton.innerHTML = 'more info';
    benefitButton.setAttribute('id', 'info-button');
    benefits.appendChild(cost);
    benefits.appendChild(benefitText)
    benefits.appendChild(benefitUL);
    card.appendChild(title);
    card.appendChild(benefits);
    card.appendChild(benefitButton);
    levelsSection.appendChild(card);

  });

}


// // general function for choosing a number between a minimum number and a maximum number:
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }