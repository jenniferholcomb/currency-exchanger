import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';

// Business Logic

async function getConversion() {
  const response = await ConversionService.getConversion();
  if(response.conversion_rates) {
    sessionStorage.setItem("apiCall", JSON.stringify(response));
    populateDropDown();
  } else {
    printError(response);
  }
}

// UI Logic

function populateDropDown() {
  const response = JSON.parse(sessionStorage.getItem("apiCall"));
  const countryArr = Object.keys(response.conversion_rates);
  let i = 0;
  countryArr.forEach(() => {
    let newOption = document.createElement("option");
    let optionText = document.createTextNode(countryArr[i]);
    newOption.appendChild(optionText);
    newOption.setAttribute('value', countryArr[i]);
    const select1 = document.querySelector('#country1');
    const select2 = document.querySelector('#country2');
    select1.appendChild(newOption);
    select2.appendChild(newOption);
    i++;
  });
}

function printElements(country, exchangeAmt) {
  const response = JSON.parse(sessionStorage.getItem("apiCall"));
  const convAmt = (exchangeAmt * response.conversion_rates[country]).toFixed(2);       
  document.querySelector("#conversion").innerText = `${exchangeAmt} USD is equal to ${convAmt} ${country}`;
}

function printError(error) {
  document.querySelector("#conversion").innerText = `There was an error accessing conversion rates: ${error}`;  
}     

function handleFormSubmission() {
  event.preventDefault();
  const country = document.getElementById("country2").value;
  const exchangeAmt = document.getElementById("dollar-conversion").value;
  printElements(country, exchangeAmt);
  document.querySelector("#dollar-conversion").innerText = null;
}

window.addEventListener("load", function() {
  getConversion();
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});

// add API KEY to .env, adjust .js
// figure out how to elimate "stacking" of columns in html
// add elements to both drop down menus

