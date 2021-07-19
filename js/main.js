
import {deactivateApp} from './state/deactivate-app.js';

import {createMap} from './utils/create-map.js';
import {createMapLable} from './utils/create-map-lable.js';
import {MAX_OFFERS} from './utils/constants.js';

import {getData} from './filling-information/data.js';
import {initializeForm} from './filling-information/initialize-form.js';
import './filling-information/validate-information.js';
import {showErrorMessage} from './filling-information/show-error-message.js';
import {resetForm} from './filling-information/reset-form.js';

import {filterInformation} from './filter-information/filter-information.js';
import './filling-information/preview-avatar.js';
import './filling-information/preview-house.js';

const resetButton = document.querySelector('.ad-form__reset');

deactivateApp();

createMap();

getData()
  .then((data) => {
    filterInformation(data);

    const offersSlice = data.slice(0, MAX_OFFERS);
    offersSlice.forEach((offer) => {
      createMapLable(offer);
    });
  })
  .catch((err) => {
    showErrorMessage(err);
  });


initializeForm();

const resetFormChangeHandler = (evt) => {
  evt.preventDefault();
  resetForm();
};

resetButton.addEventListener('click', resetFormChangeHandler);
