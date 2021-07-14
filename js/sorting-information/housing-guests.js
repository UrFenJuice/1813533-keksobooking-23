import {createMapLable, markerGroup} from '../utils/create-map-lable.js';

const housingGuestsSort = (offers) => {
  const housingGuests = document.querySelector('#housing-guests');
  housingGuests.addEventListener('change', (evt) => {
    markerGroup.clearLayers();
    const offerSort = offers.filter((item) => {
      if (item.offer.guests === +evt.target.value) {
        return true;
      } else if (evt.target.value === 'any') {
        return true;
      }
      return false;
    });
    // const offerSortSlice = offerSort.slice(0, 10);
    // offerSortSlice.forEach((offer) => {
    //   createMapLable(offer);
    // });
    return offerSort;
  });
};

export {housingGuestsSort};
