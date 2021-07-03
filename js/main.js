
import {deactivateApp} from './state/deactivate-app.js';

import {createMap} from './utils/create-map.js';
import {createMapLable} from './utils/create-map-lable.js';

import {fillingInfo} from './filling-information/filling-information.js';
import {publishInfo} from './filling-information/publish-information.js';
import './filling-information/validate-information.js';
import {showErrorMessage} from './filling-information/show-error-message.js';
import {hideMessage} from './filling-information/hide-message.js';
import {resetForm} from './filling-information/reset-form.js';

const resetBtn = document.querySelector('.ad-form__reset');

deactivateApp();

createMap();

const fetchOffers = fillingInfo(
  (offers) => {
    offers.forEach((offer) => {
      createMapLable(offer);
    });
  },
  (err) => {
    showErrorMessage(err, hideMessage);
  });

fetchOffers();

publishInfo();

resetBtn.addEventListener('click', resetForm);
