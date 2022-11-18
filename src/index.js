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
  document.querySelector('#response').innerText = null;
 
}

window.addEventListener("load", function() {
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});