import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';
// import CurrencyConversion from './currency-conversion';

// Business Logic

async function makeCall() {
  const response = await ConversionService.getConversion();
  console.log(response);
  if(response.conversion_rates) {
    sessionStorage.setItem("apiCall", response);
    grabResponse();
    // const convAmt = CurrencyConversion.getCurrencyConversion(currAmt, response.conversion_rates[country]);
    // printElements(country, convAmt, currAmt);
  } else {
    printError(response);
  }
}

async function grabResponse() {
  console.log(sessionStorage.getItem("apiCall"));
}

// function printElements(country, conversion, exchangeAmt) {
//   document.querySelector("#conversion").innerText = `${exchangeAmt} USD is equal to ${conversion} ${country}`;
// }

function printError(error) {
  document.querySelector("#conversion").innerText = `There was an error accessing the conversion rate for : 
  ${error}`;  
}     
// ${country}
// function populateDropDown() {
//   //const countries = [];
//   //const response = await ConversionService.getConversion();
//   document.querySelector("#test").innerText = "Does this work";
// }

function handleFormSubmission() {
  event.preventDefault();
  // const currAmt = document.getElementById("dollar-conversion").value;
  // const country = document.getElementById("country").value;
  makeCall();
  document.querySelector("#dollar-conversion").innerText = null;
  //document.querySelector("#exchange-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});

// window.addEventListener("load", function() {
//   document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
// });