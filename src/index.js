import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';
import CurrencyConversion from './currency-conversion';

// Business Logic

async function getConversion(country, currAmt) {
  const response = await ConversionService.getConversion();
  const convAmt = CurrencyConversion.getCurrencyConversion(currAmt);
  if(response.conversion_rates) {
    printElements(response.conversion_rates.country, convAmt);
  } else {
    printError(response);
  }
}

// UI Logid

function handleFormSubmission() {
  event.preventDefault();
  const currAmt = document.getElementById("dollar-conversion").value;
  const country = document.getElementById("country").value;
  console.log(currAmt);
  console.log(country);
  document.querySelector("#dollar-conversion").innerText = null;
  //document.querySelector("#exchange-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});