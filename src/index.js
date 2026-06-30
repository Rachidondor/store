import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
console.log('اهلا بك في حسوب')
import '@fortawesome/fontawesome-free/js/all.js';
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))