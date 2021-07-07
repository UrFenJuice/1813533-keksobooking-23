import {markerGroup, createMarker} from '../utils/create-map.js';

const resetForm = () => {
  document.querySelector('.ad-form').reset();
  document.querySelector('.map__filters').reset();
  markerGroup.clearLayers();

  createMarker();
};

export {resetForm};
