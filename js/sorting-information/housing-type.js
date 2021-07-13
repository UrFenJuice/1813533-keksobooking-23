import {createMapLable, markerGroup} from '../utils/create-map-lable.js';

const housingTypeSort = (offers) => {
  const housingType = document.querySelector('#housing-type');
  housingType.addEventListener('change', (evt) => {
    markerGroup.clearLayers();
    const offerSort = offers.filter((item) => {
      if (item.offer.type === evt.target.value) {
        return true;
      } else if (evt.target.value === 'any') {
        return true;
      }
      return false;
    });
    const offerSortSlice = offerSort.slice(0, 10);
    offerSortSlice.forEach((offer) => {
      createMapLable(offer);
    });
  });
};

export {housingTypeSort};


