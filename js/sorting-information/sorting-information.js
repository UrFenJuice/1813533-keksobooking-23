import {createMapLable, markerGroup} from '../utils/create-map-lable.js';

const sortingInformation = (offers) => {
  const form = document.querySelector('.map__filters');
  const filterChangeHandler = function (evt) {
    markerGroup.clearLayers();

    if (evt.target && evt.target.matches('.map__filter') || evt.target.matches('.map__checkbox')) {
      let offerSort = offers;
      if (evt.target.name === 'housing-type') {
        offerSort = offers.filter((item) => {
          if (item.offer.type === evt.target.value) {
            return true;
          } else if (evt.target.value === 'any') {
            return true;
          }
          return false;
        });
      } else if (evt.target.name === 'housing-price') {
        offerSort = offers.filter((item) => {
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
      } else if (evt.target.name === 'housing-rooms') {
        offerSort = offers.filter((item) => {
          if (item.offer.rooms === +evt.target.value) {
            return true;
          } else if (evt.target.value === 'any') {
            return true;
          }
          return false;
        });
      } else if (evt.target.name === 'housing-guests') {
        offerSort = offers.filter((item) => {
          if (item.offer.guests === +evt.target.value) {
            return true;
          } else if (evt.target.value === 'any') {
            return true;
          }
          return false;
        });
      }
      const offerSortSlice = offerSort.slice(0, 10);
      offerSortSlice.forEach((offer) => {
        createMapLable(offer);
      });
    }
  };

  form.addEventListener('change', filterChangeHandler);
};

export {sortingInformation};
