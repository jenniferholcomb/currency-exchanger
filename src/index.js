import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';
// import CurrencyConversion from './currency-conversion';

// Business Logic

async function getConversion() {
  const response = await ConversionService.getConversion();
  if(response.conversion_rates) {
    sessionStorage.setItem("apiCall", JSON.stringify(response));
    console.log(response);
    populateDropDown();
    // const convAmt = CurrencyConversion.getCurrencyConversion(currAmt, response.conversion_rates[country]);
    // printElements(country, convAmt, currAmt);
  } else {
    printError(response);
  }
}

// UI Logic

function populateDropDown() {
  const response = JSON.parse(sessionStorage.getItem("apiCall"));
  //console.log(response.conversion_rates);
  const countryArr = Object.keys(response.conversion_rates);
  document.querySelector("#test").innerText = countryArr[1];
  let newOption = document.createElement("option");
  let optionText = document.createTextNode(countryArr[1]);
  newOption.appendChild(optionText);
  newOption.setAttribute('value', countryArr[1]);
  const select = document.querySelector('#country2');
  select.appendChild(newOption);
  //document.body.appendChild(p);
}

// function printElements(country, conversion, exchangeAmt) {
//   document.querySelector("#conversion").innerText = `${exchangeAmt} USD is equal to ${conversion} ${country}`;
// }

function printError(error) {
  document.querySelector("#conversion").innerText = `There was an error accessing the conversion rate for : 
  ${error}`;  
}     
// ${country}

function handleFormPopulate() {
  getConversion();
}

function handleFormSubmission() {
  event.preventDefault();
  // const currAmt = document.getElementById("dollar-conversion").value;
  // const country = document.getElementById("country").value;
  document.querySelector("#dollar-conversion").innerText = null;
  //document.querySelector("#exchange-form").reset();
}

window.addEventListener("load", function() {
  handleFormPopulate();
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});






// // Business Logic

// async function makeCall() {
//   const response = await ConversionService.getConversion();
//   console.log(response);
//   if(response.conversion_rates) {
//     sessionStorage.setItem("apiCall", JSON.stringify(response));
//     console.log(response);
//     grabResponse();
//     // const convAmt = CurrencyConversion.getCurrencyConversion(currAmt, response.conversion_rates[country]);
//     // printElements(country, convAmt, currAmt);
//   } else {
//     printError(response);
//   }
// }

// function grabResponse() {
//   const response = sessionStorage.getItem("apiCall");
  
//   console.log(response);
// }

// // function printElements(country, conversion, exchangeAmt) {
// //   document.querySelector("#conversion").innerText = `${exchangeAmt} USD is equal to ${conversion} ${country}`;
// // }

// function printError(error) {
//   document.querySelector("#conversion").innerText = `There was an error accessing the conversion rate for : 
//   ${error}`;  
// }     
// // ${country}
// // function populateDropDown() {
// //   //const countries = [];
// //   //const response = await ConversionService.getConversion();
// //   document.querySelector("#test").innerText = "Does this work";
// // }

// function handleFormSubmission() {
//   event.preventDefault();
//   // const currAmt = document.getElementById("dollar-conversion").value;
//   // const country = document.getElementById("country").value;
//   makeCall();
//   document.querySelector("#dollar-conversion").innerText = null;
//   //document.querySelector("#exchange-form").reset();
// }

// window.addEventListener("load", function() {
//   document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
// });

// // window.addEventListener("load", function() {
// //   document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
// // });