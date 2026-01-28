// All of the following is from the last form assignment

const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
  <p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')} </p> 
  <p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
  <p>Your Phone: ${myInfo.get('phone')}</p>
  <p>Your email is: ${myInfo.get('email')}</p>`;


//the following is code for extracting the benefits key from the membership database and placing them in a bulleted list:
// membership.benefits.forEach(benefit => {
//   const li = document.createElement("li");
//   li.textContent = benefit;
//   ul.appendChild(li);
// });
