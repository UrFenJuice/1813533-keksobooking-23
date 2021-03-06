import {createMapLable, markerGroup} from '../utils/create-map-lable.js';
import {debounce} from '../utils/debounce.js';
import {MIN_OFFER_PRICE, MAX_OFFER_PRICE} from '../utils/constants.js';

const filterInformation = (offers) => {
  const form = document.querySelector('.map__filters');
  const featuresValue = [];
  const filterChangeHandler = function (evt) {
    evt.preventDefault();
    const allFilters = document.querySelectorAll('.map__filter');
    const allFiltersValue = [];


    markerGroup.clearLayers();

    allFilters.forEach((item) => {
      allFiltersValue.push(item.value);
    });

    const filterType = (item) => {
      if (item.offer.type === allFiltersValue[0]) {
        return true;
      } else if (allFiltersValue[0] === 'any') {
        return true;
      }
      return false;
    };

    const filterPrice = (item) => {
      if (allFiltersValue[1] === 'middle') {
        return item.offer.price >= MIN_OFFER_PRICE && item.offer.price <= MAX_OFFER_PRICE;
      } else if (allFiltersValue[1] === 'low') {
        return item.offer.price <= MIN_OFFER_PRICE;
      } else if (allFiltersValue[1] === 'high') {
        return item.offer.price >= MAX_OFFER_PRICE;
      } else if (allFiltersValue[1] === 'any') {
        return true;
      }
      return false;
    };

    const filterRooms = (item) => {
      if (item.offer.rooms === +allFiltersValue[2]) {
        return true;
      } else if (allFiltersValue[2] === 'any') {
        return true;
      }
      return false;
    };

    const filterGuests = (item) => {
      if (item.offer.guests === +allFiltersValue[3]) {
        return true;
      } else if (allFiltersValue[3] === 'any') {
        return true;
      }
      return false;
    };

    if (evt.target.name === 'features' && evt.target.checked) {
      featuresValue.push(evt.target.value);
    } else if (evt.target.name === 'features' && !evt.target.checked) {
      featuresValue.pop(evt.target.value);
    }
    const filterFeatures = (item) => {
      if (!item.offer.features) {
        return false;
      }
      return featuresValue.every((element) => item.offer.features.includes(element));
    };

    let offerSort = [];
    offerSort = offers
      .filter(filterType)
      .filter(filterPrice)
      .filter(filterRooms)
      .filter(filterGuests)
      .filter(filterFeatures);
    const offerSortSlice = offerSort.slice(0, 10);
    offerSortSlice.forEach((offer) => {
      createMapLable(offer);
    });
  };

  form.addEventListener('change', debounce(filterChangeHandler));
};

export {filterInformation};
