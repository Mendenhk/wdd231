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