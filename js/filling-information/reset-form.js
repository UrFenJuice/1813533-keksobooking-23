import {markerGroup, createMarker} from '../utils/create-map.js';
import {getData} from './data.js';
import {showErrorMessage} from './show-error-message.js';
import {createMapLable} from '../utils/create-map-lable.js';
import {MAX_OFFERS, DEFAULT_IMAGE_URL} from '../utils/constants.js';

const resetForm = () => {
  document.querySelector('.ad-form').reset();
  document.querySelector('.map__filters').reset();
  document.querySelector('.ad-form-header__preview img').src = DEFAULT_IMAGE_URL;
  document.querySelector('.ad-form__photo').innerHTML = '';
  markerGroup.clearLayers();

  createMarker();
  getData()
    .then((data) => {
      const offersSlice = data.slice(0, MAX_OFFERS);
      offersSlice.forEach((offer) => {
        createMapLable(offer);
      });
    })
    .catch((err) => {
      showErrorMessage(err);
    });
};

export {resetForm};
