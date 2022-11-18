import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';
import CurrencyConversion from './currency-conversion';

// Business Logic

async function getConversion() {
  const response = await ConversionService.getConversion();
  if(!response.ok) {
  //  const convAmt = CurrencyConversion.getCurrencyConversion(currAmt, response.conversion_rates[country]);
  //  printElements(country, convAmt, currAmt);
    printError(response, country);
  } else {
    return response;
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

function populateDropDown() {
  //const countries = [];
  //const response = await ConversionService.getConversion();
  document.querySelector("#test").innerText = "Does this work";
}

function handleFormSubmission(response) {
  event.preventDefault();
  const currAmt = document.getElementById("dollar-conversion").value;
  const country = document.getElementById("country").value;
  getConversion(response, country, currAmt);
  document.querySelector("#dollar-conversion").innerText = null;
  //document.querySelector("#exchange-form").reset();
}

window.addEventListener("load", function() {
  const response = getConversion();
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission(response));
});