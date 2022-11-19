import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';
import CurrencyConversion from './currency-conversion';


// Business Logic

// async function getConversion(country, currAmt) {
//   const response = await ConversionService.getConversion();
//   if(response.conversion_rates) {
//     const convAmt = CurrencyConversion.getCurrencyConversion(currAmt, response.conversion_rates[country]);
//     printElements(country, convAmt, currAmt);
//   } else {
//     printError(response, country);
//   }
// }

// // UI Logic

// function printElements(country, conversion, exchangeAmt) {
//   document.querySelector("#conversion").innerText = `The conversion of ${exchangeAmt} USD to ${country} is ${conversion}.`;
// }

// function printError(error, country) {
//   document.querySelector("#conversion").innerText = `There was an error accessing the conversion rate for ${country}: 
//   ${error}`;
// }

// function handleFormSubmission() {
//   event.preventDefault();
//   const currAmt = document.getElementById("dollar-conversion").value;
//   const country = document.getElementById("country").value;
//   console.log(currAmt);
//   console.log(country);
//   getConversion(country, currAmt);
//   document.querySelector("#dollar-conversion").innerText = null;
//   //document.querySelector("#exchange-form").reset();
// }

// window.addEventListener("load", function() {
//   document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
// });

// Business Logic

// async function getConversion() {
//   const response = await ConversionService.getConversion();
//   return response;
// }

// UI Logic

async function makeConversion(country, currAmt) {
  const response = await ConversionService.getConversion();
  console.log(response.conversion_rates);
  if(response.conversion_rates) {
    const convAmt = CurrencyConversion.getCurrencyConversion(currAmt, response.conversion_rates[country]);
    printElements(country, convAmt, currAmt);
  } else {
    printError(response, country);
  }
}

function printElements(country, conversion, exchangeAmt) {
  document.querySelector("#conversion").innerText = `${exchangeAmt} USD is equal to ${conversion} ${country}`;
}

function printError(error, country) {
  document.querySelector("#conversion").innerText = `There was an error accessing the conversion rate for ${country}: 
  ${error}`;
}

// function populateDropDown() {
//   //const countries = [];
//   //const response = await ConversionService.getConversion();
//   document.querySelector("#test").innerText = "Does this work";
// }

function handleFormSubmission() {
  event.preventDefault();
  console.log("here");
  const currAmt = document.getElementById("dollar-conversion").value;
  const country = document.getElementById("country").value;
  makeConversion(country, currAmt);
  const conversionService = new ConversionService();
  console.log(conversionService);
  //makeConversion(response, country, currAmt);
  document.querySelector("#dollar-conversion").innerText = null;
  //document.querySelector("#exchange-form").reset();
}

window.addEventListener("load", function() {

  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});

// window.addEventListener("load", function() {
//   document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
// });