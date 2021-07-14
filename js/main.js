
import {deactivateApp} from './state/deactivate-app.js';

import {createMap} from './utils/create-map.js';
import {createMapLable} from './utils/create-map-lable.js';

import {fillingInfo} from './filling-information/filling-information.js';
import {initializeForm} from './filling-information/initialize-form.js';
import './filling-information/validate-information.js';
import {showErrorMessage} from './filling-information/show-error-message.js';
import {resetForm} from './filling-information/reset-form.js';

import {housingTypeSort} from './sorting-information/housing-type.js';
import {housingPriceSort} from './sorting-information/housing-price.js';
import {housingRoomsSort} from './sorting-information/housing-rooms.js';
import {housingGuestsSort} from './sorting-information/housing-guests.js';
import {housingFeaturesSort} from './sorting-information/housing-features.js';
import {sortingInformation} from './sorting-information/sorting-information.js';

const resetButton = document.querySelector('.ad-form__reset');

deactivateApp();

createMap();

const fetchOffers = fillingInfo(
  (offers) => {
    // housingTypeSort(offers);
    // housingPriceSort(offers);
    // housingRoomsSort(offers);
    // housingGuestsSort(offers);
    // housingFeaturesSort(offers);
    sortingInformation(offers);

    const offersSlice = offers.slice(0, 10);
    offersSlice.forEach((offer) => {
      createMapLable(offer);
    });
  },
  (err) => {
    showErrorMessage(err);
  });

fetchOffers();

initializeForm();

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});
