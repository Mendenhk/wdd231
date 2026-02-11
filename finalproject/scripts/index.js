// ---------------- MODAL CONSTANTS AND FUNCTIONS ----------------
import { categories } from '../data/categories.mjs';
console.log(categories);


displayCategories(categories);

// ----------- DISPLAYING MEMBERSHIP LEVEL CARDS -----------

function displayCategories(nailTypes) {
  const nailsSection = document.querySelector('#nails-section');
  nailTypes.forEach((nailType) => {
    let myCard = document.createElement('div');
    let myImage = document.createElement('img');
    let myDiv = document.createElement('div');
    let myTitle = document.createElement('h3');
    let modalButton = document.createElement('button');
    myDiv.setAttribute('class', 'button-div');
    myImage.setAttribute('src', `${nailType.image}`);
    myImage.setAttribute('alt', `${nailType.imageAlt}`)
    myTitle.innerHTML = `${nailType.title}`;
    modalButton.innerHTML = 'Learn More >>';
    modalButton.addEventListener('click', () => showStuff(nailTypes));
    myDiv.appendChild(myTitle);
    myDiv.appendChild(modalButton);
    myCard.appendChild(myImage);
    myCard.appendChild(myDiv);
    nailsSection.appendChild(myCard);
  });

}

// ---------------- MODAL CONSTANTS AND FUNCTIONS ----------------
const dialogBox = document.querySelector('#dialog-box');
const dialogTitle = document.querySelector('#dialog-box H3');
// const myCost = document.querySelector('#my-cost');
// const myBenefits = document.querySelector('#my-benefits');
// const myBenefitsList = document.querySelector('#dialog-box ul');
// const closeButton = document.querySelector('#dialog-box button');
// closeButton.addEventListener('click', () => dialogBox.close());

function showStuff(x) {
  // dialogBox.setAttribute('class', x.memberLevel);
  // myTitle.innerHTML = x.title;
  // myCost.innerHTML = `Yearly Cost: $${x.cost}`;
  // myBenefits.innerHTML = 'Benefits:';
  // let benefitList = ``;
  // x.benefits.forEach((line) => {
  //   const listLine = `<li>${line}</li>`;
  //   benefitList += listLine;
  // });
  // myBenefitsList.innerHTML = benefitList;
  dialogBox.showModal();
}