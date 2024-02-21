import './src/styles/app.css';

import htmlStrHome from './src/views/main.html?raw';

import { add, subtract, multiply, divide } from './src/scripts/app';


document.querySelector('#app').innerHTML = htmlStrHome;

const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
