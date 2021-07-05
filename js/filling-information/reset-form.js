import {markerGroup, createMarker} from '../utils/create-map.js';

const resetForm = (evt) => {
  evt.preventDefault();
  document.querySelector('.ad-form').reset();
  document.querySelector('.map__filters').reset();
  markerGroup.clearLayers();

  createMarker();
};

export {resetForm};
