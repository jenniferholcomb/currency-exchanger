import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';
import PairService from './pair-service.js';

// Business Logic

async function getConversion() {
  const response = await ConversionService.getConversion();
  if(response.conversion_rates) {
    //sessionStorage.setItem("apiCall", JSON.stringify(response));
    getCountries(response);
  } else {
    printError(response);
  }
}

async function getExchangeRate(country1, country2, exchangeAmt) {
  const response = await PairService.getPairExchangeRate(country1, country2);
  if(response.conversion_rate){
    const exchangeTotal = (exchangeAmt * JSON.stringify(response.conversion_rate)).toFixed(2);
    printElements(country1, country2, exchangeAmt, exchangeTotal)
  } else {
    printError(response);
  }
}

// UI Logic

function getCountries(response) {
  //const response = JSON.parse(sessionStorage.getItem("apiCall"));
  const select1 = document.querySelector('#country1');
  const select2 = document.querySelector('#country2');
  populateDropDown(select1, response);
  populateDropDown(select2, response);
}

function populateDropDown(country, response) {
  const countryArr = Object.keys(response.conversion_rates);
  let i = 0;
  countryArr.forEach(() => {
    let newOption = document.createElement("option");
    let optionText = document.createTextNode(countryArr[i]);
    newOption.appendChild(optionText);
    newOption.setAttribute('value', countryArr[i]);
    country.appendChild(newOption);
    i++;
  });
}

function printElements(country1, country2, exchangeAmt, exchangeTotal) {
  document.querySelector("#conversion").innerText = `${exchangeAmt} ${country1} is equal to ${exchangeTotal} ${country2}`;
  // if(country1 === "err" || country2 === "err") {
  //   printError("Please select a country.");
  // } else {
  //   document.querySelector("#conversion").innerText = `${exchangeAmt} ${country1} is equal to ${exchangeTotal} ${country2}`;
  // }   
}

function printError(error) {
  document.querySelector("#conversion").innerText = `There was an error accessing conversion rates: ${error}`;  
}     

function handleFormSubmission() {
  event.preventDefault();
  const country1 = document.getElementById("country1").value;
  const country2 = document.getElementById("country2").value;
  const exchangeAmt = document.getElementById("dollar-conversion").value;
  getExchangeRate(country1, country2, exchangeAmt);
  document.querySelector("#dollar-conversion").innerText = null;
}

window.addEventListener("load", function() {
  getConversion();
  document.getElementById("exchange-form").addEventListener("submit", handleFormSubmission);
});



