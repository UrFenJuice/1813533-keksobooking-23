import {getRandomNumber, getRandomFloatNumber, getRandomArrayElement} from './secondary-functions.js';

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const ROOM_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getAuthor = function () {
  return {
    avatar: `img/avatars/user0${  getRandomNumber(1, 8)  }.png`,
  };
};

const getLocation = function () {
  return {
    lat: getRandomFloatNumber(35.65000, 35.70000, 5),
    lng: getRandomFloatNumber(139.70000, 139.80000, 5),
  };
};

const getOffer = function () {
  return {
    title: 'Объявление',
    address: `${getLocation().lat  }, ${  getLocation().lng}`,
    price: getRandomNumber(1, 99999),
    type: getRandomArrayElement(ROOM_TYPE),
    rooms: getRandomNumber(1, 20),
    guests: getRandomNumber(1, 20),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: FEATURES,
    description: 'Комфортное жилье со всеми удобствами.',
    photos: PHOTOS,
  };
};

const createOffers = function (length) {
  const offers = [];
  for (let index = 0; index <= length - 1; ++index) {
    offers[index] = {
      author: getAuthor(),
      location: getLocation(),
      offer: getOffer(),
    };
  }
  return offers;
};

export {createOffers};
