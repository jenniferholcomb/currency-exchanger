import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Triangle from './template.js';

function handleTriangleForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
 
}

window.addEventListener("load", function() {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
});