import {createMapLable, markerGroup} from '../utils/create-map-lable.js';

const housingRoomsSort = (offers) => {
  const housingRooms = document.querySelector('#housing-rooms');
  housingRooms.addEventListener('change', (evt) => {
    markerGroup.clearLayers();
    const offerSort = offers.filter((item) => {
      if (item.offer.rooms === +evt.target.value) {
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

export {housingRoomsSort};
