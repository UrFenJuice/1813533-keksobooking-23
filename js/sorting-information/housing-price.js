import {createMapLable, markerGroup} from '../utils/create-map-lable.js';

const housingPriceSort = (offers) => {
  const housingPrice = document.querySelector('#housing-price');
  housingPrice.addEventListener('change', (evt) => {
    markerGroup.clearLayers();
    const offerSort = offers.filter((item) => {
      if (evt.target.value === 'middle') {
        return item.offer.price >= 10000 && item.offer.price <= 50000;
      } else if (evt.target.value === 'low') {
        return item.offer.price <= 10000;
      } else if (evt.target.value === 'high') {
        return item.offer.price >= 50000;
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

export {housingPriceSort};
