import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';
import CurrencyConversion from './currency-conversion';

// Business Logic

async function getConversion(country, currAmt) {
  const response = await ConversionService.getConversion();
  if(response.conversion_rates) {
    const convAmt = CurrencyConversion.getCurrencyConversion(currAmt, response.conversion_rates[country]);
    printElements(country, convAmt, currAmt);
  } else {
    printError(response, country);
  }
}

// UI Logic

function printElements(country, conversion, exchangeAmt) {
  document.querySelector("#conversion").innerText = `${exchangeAmt} USD is equal to ${conversion} ${country}`;
}

function printError(error, country) {
  document.querySelector("#conversion").innerText = `There was an error accessing the conversion rate for ${country}: 
  ${error}`;
}

function handleFormSubmission() {
  event.preventDefault();
  const currAmt = document.getElementById("dollar-conversion").value;
  const country = document.getElementById("country").value;
  getConversion(country, currAmt);
  document.querySelector("#dollar-conversion").innerText = null;
  //document.querySelector("#exchange-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("curr-body").addEventListener()
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});