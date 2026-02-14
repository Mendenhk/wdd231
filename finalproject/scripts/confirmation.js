
const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

//below extracts all of the chosen nail styles from the URL and puts it in an array (chosenStyles)
//the next line then creates a text string from the array, separated by a comma
const chosenStyles = myInfo.getAll('nailStyle');
const chosenStylesText = chosenStyles.length
  ? chosenStyles.join(', ')
  : 'None selected';

document.querySelector('#results').innerHTML = `
  <p>Appointment Date: ${myInfo.get('date')}</p>
  <p>Appointment Time: ${myInfo.get('time')}</p>
  <p>Your chosen styles: ${chosenStylesText}</p>  
  <p>First Name: ${myInfo.get('first')}</p> 
  <p>Last Name: ${myInfo.get('last')}</p>
  <p>email: ${myInfo.get('email')}</p>
  <p>Phone: ${myInfo.get('phone')}</p>`

const timestamp = myInfo.get("timestamp");
const date = new Date(Number(timestamp));
document.querySelector('#join-timestamp').innerHTML = `<br>
  timestamp: ${date}`;