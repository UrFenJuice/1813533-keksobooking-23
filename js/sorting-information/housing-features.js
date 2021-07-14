import {createMapLable, markerGroup} from '../utils/create-map-lable.js';

const getHouseRank = (offer) => offer.offer.features.length;

const compareHouse = (houseA, houseB) => {
  const rankA = getHouseRank(houseA);
  const rankB = getHouseRank(houseB);

  return rankB - rankA;
};
const housingFeaturesSort = (offers) => {
  const housingFeature = document.querySelector('#housing-features');

  const arrValues = [];
  const filterChangeHandler = function (evt) {
    if (evt.target && evt.target.matches('input[type="checkbox"]')) {
      if (evt.target.checked) {
        arrValues.push(evt.target.value);
      } else {
        arrValues.pop(evt.target.value);
      }
      markerGroup.clearLayers();
      const offerSort = offers.filter((item) => {
        if (item.offer.features === arrValues) {
          return true;
        }
        return false;
      });
      const offerSortSlice = offerSort.slice(0, 10);
      offerSortSlice.forEach((offer) => {
        createMapLable(offer);
      });
    }
  };

  housingFeature.addEventListener('change', filterChangeHandler);
};

export {housingFeaturesSort};
