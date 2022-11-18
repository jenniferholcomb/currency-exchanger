import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import ConversionService from './conversion-service.js';

// Business Logic

// async function getConversion(country) {
//   const response = await ConversionService.getConversion();
//   if(response.conversion_rates){
//     printElements(response.conversion_rates.country, country);
//   }
// }
function handleFormSubmission() {
  event.preventDefault();
  const currAmt = document.getElementById("dollar-conversion").value;
  const country = document.getElementById("country").value;
  console.log(currAmt);
  console.log(country);
  //document.querySelector('#response').innerText = null;
  document.querySelector("#exchange-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});