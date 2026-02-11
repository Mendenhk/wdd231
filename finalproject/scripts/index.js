// ---------------- MODAL CONSTANTS AND FUNCTIONS ----------------
import { categories } from '../data/categories.mjs';
console.log(categories);


displayCategories(categories);

// ----------- DISPLAYING MEMBERSHIP LEVEL CARDS -----------

function displayCategories(nailTypes) {
  const levelsSection = document.querySelector('#nails-section');
  nailTypes.forEach((nailType) => {
  //   let card = document.createElement('section');
  //   let title = document.createElement('h3');
  //   let benefitButton = document.createElement('button');
  //   card.setAttribute('class', 'mCard');
  //   title.innerHTML = `${level.title}`;
  //   benefitButton.innerHTML = 'Learn More';
  //   benefitButton.addEventListener('click', () => showStuff(level));
  //   card.appendChild(title);
  //   card.appendChild(benefitButton);
  //   levelsSection.appendChild(card);
  });

}

// ---------------- MODAL CONSTANTS AND FUNCTIONS ----------------
const dialogBox = document.querySelector('#dialog-box');
const myTitle = document.querySelector('#dialog-box H2');
const myCost = document.querySelector('#my-cost');
const myBenefits = document.querySelector('#my-benefits');
const myBenefitsList = document.querySelector('#dialog-box ul');
const closeButton = document.querySelector('#dialog-box button');
closeButton.addEventListener('click', () => dialogBox.close());

function showStuff(x) {
  dialogBox.setAttribute('class', x.memberLevel);
  myTitle.innerHTML = x.title;
  myCost.innerHTML = `Yearly Cost: $${x.cost}`;
  myBenefits.innerHTML = 'Benefits:';
  let benefitList = ``;
  x.benefits.forEach((line) => {
    const listLine = `<li>${line}</li>`;
    benefitList += listLine;
  });
  myBenefitsList.innerHTML = benefitList;
  dialogBox.showModal();
}