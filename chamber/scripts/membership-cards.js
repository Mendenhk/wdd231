import { membershipLevels } from "../data/membership.js";
console.log(membershipLevels);


displayMembershipLevels(membershipLevels);

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
    benefitButton.setAttribute('id', 'open-button');
    benefits.appendChild(cost);
    benefits.appendChild(benefitText)
    benefits.appendChild(benefitUL);
    card.appendChild(title);
    card.appendChild(benefits);
    card.appendChild(benefitButton);
    levelsSection.appendChild(card);

  });

}

// ---------------- MODAL FUNCTIONS ----------------
const openButton = document.querySelector('#open-button');
const dialogBox = document.querySelector('#dialog-box');
const closeButton = document.querySelector('#dialog-box button');

openButton.addEventListener('click', () => {
  dialogBox.showModal();
});

closeButton.addEventListener('click', () => {
  dialogBox.close();
});