import {markerGroup, createMarker} from '../utils/create-map.js';
import {getData} from './data.js';
import {showErrorMessage} from './show-error-message.js';
import {createMapLable} from '../utils/create-map-lable.js';

const resetForm = () => {
  document.querySelector('.ad-form').reset();
  document.querySelector('.map__filters').reset();
  markerGroup.clearLayers();

  createMarker();
  getData()
    .then((data) => {
      const offersSlice = data.slice(0, 10);
      offersSlice.forEach((offer) => {
        createMapLable(offer);
      });
    })
    .catch((err) => {
      showErrorMessage(err);
    });
};

export {resetForm};
