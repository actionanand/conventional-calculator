import './src/styles/app.css';

import './src/scripts/app';
import './src/scripts/vendor';

import htmlStrHome from './src/views/main.html?raw';

document.querySelector('#app').innerHTML = htmlStrHome;

