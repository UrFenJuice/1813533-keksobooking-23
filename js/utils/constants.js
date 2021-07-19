const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const PHOTO_WIDTH = 70;
const PHOTO_HEIGHT = 70;
const MAX_OFFERS = 10;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MAX_ROOMS = 100;
const MIN_OFFER_PRICE = 10000;
const MAX_OFFER_PRICE = 50000;
const DEFAULT_LAT = 35.68950;
const DEFAULT_LNG = 139.69171;
const DEFAULT_ZOOM = 10;
const ICON_URL = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
const DEFAULT_ICON_SIZE = [52, 52];
const DEFAULT_ICON_ANCHOR = [26, 52];
const MAX_NUM_OF_DECIMAL_PLACES = 5;
const DEFAULT_IMAGE_URL = 'img/muffin-grey.svg';
const HOUSES_TYPES = [
  {
    type: 'bungalow',
    price: 0,
  },
  {
    type: 'flat',
    price: 1000,
  },
  {
    type: 'hotel',
    price: 3000,
  },
  {
    type: 'house',
    price: 5000,
  },
  {
    type: 'palace',
    price: 10000,
  },
];

export {FILE_TYPES, PHOTO_WIDTH, PHOTO_HEIGHT, MAX_OFFERS, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAX_PRICE, HOUSES_TYPES, MAX_ROOMS, MIN_OFFER_PRICE, MAX_OFFER_PRICE, DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM, DEFAULT_ICON_SIZE, DEFAULT_ICON_ANCHOR, MAX_NUM_OF_DECIMAL_PLACES, ICON_URL, DEFAULT_IMAGE_URL};
