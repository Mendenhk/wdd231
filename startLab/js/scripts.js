const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxDivText = document.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxDivText.innerHTML = `apples.`;
});

openButton2.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxDivText.innerHTML = `oranges.`;
});

openButton3.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxDivText.innerHTML = `bananas.`;
});

closeButton.addEventListener('click', () => {
  dialogBox.close();
});
