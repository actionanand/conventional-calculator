import './src/styles/app.css'

import htmlStrHome from './src/views/main.html?raw';

import appJs from './src/scripts/app';
import vendorJs from './src/scripts/vendor';


document.querySelector('#app').innerHTML = htmlStrHome;

appJs();
vendorJs();
