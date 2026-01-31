
const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
  <p>First Name: ${myInfo.get('first')}</p> 
  <p>Last Name: ${myInfo.get('last')}</p>
  <p>Title: ${myInfo.get('title')}</p>
  <p>email: ${myInfo.get('email')}</p>
  <p>Phone: ${myInfo.get('phone')}</p>
  <p>Membership Level: ${myInfo.get('membership')}</p>`;