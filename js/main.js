
import {deactivateApp} from './state/deactivate-app.js';

import {createMap} from './utils/create-map.js';
import {createMapLable} from './utils/create-map-lable.js';

import {fillingInfo} from './filling-information/filling-information.js';
import {initializeForm} from './filling-information/initialize-form.js';
import './filling-information/validate-information.js';
import {showErrorMessage} from './filling-information/show-error-message.js';
import {resetForm} from './filling-information/reset-form.js';

const form = document.querySelector('.ad-form');

deactivateApp();

createMap();

const fetchOffers = fillingInfo(
  (offers) => {
    offers.forEach((offer) => {
      createMapLable(offer);
    });
  },
  (err) => {
    showErrorMessage(err);
  });

fetchOffers();

initializeForm();

form.addEventListener('reset', (evt) => {
  evt.preventDefault();
  resetForm();
});
