import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';
import CurrencyConversion from './currency-conversion';

// Business Logic

async function getConversion(country, currAmt) {
  const response = await ConversionService.getConversion();
  const convAmt = CurrencyConversion.getCurrencyConversion(currAmt, response.conversion_rate.country);
  if(response.conversion_rates) {
    printElements(country, convAmt, currAmt);
  } else {
    printError(response, country);
  }
}

// UI Logic

function printElements(country, conversion, exchangeAmt) {
  document.querySelector("#showResponse").innerText = `The conversion of ${exchangeAmt} USD to ${country} is ${conversion}.`;
}

function printError(error, country) {
  document.querySelector("#showResponse").innerText = `There was an error accessing the conversion rate for ${country}: ${error}`;
}

function handleFormSubmission() {
  event.preventDefault();
  const currAmt = document.getElementById("dollar-conversion").value;
  const country = document.getElementById("country").value;
  console.log(currAmt);
  console.log(country);
  getConversion(country, currAmt);
  document.querySelector("#dollar-conversion").innerText = null;
  //document.querySelector("#exchange-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});