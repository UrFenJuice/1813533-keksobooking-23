// Решение нашел на MDN https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5_%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE
const getRandomNumber = function (_minNumber, _maxNumber) {
  _minNumber = Math.ceil(_minNumber);
  _maxNumber = Math.floor(_maxNumber);

  if (_minNumber >= 0 && _maxNumber >= 0) {
    if (_minNumber >= _maxNumber) {
      return Math.floor(Math.random() * (_minNumber - _maxNumber + 1)) + _maxNumber;
    }
    return Math.floor(Math.random() * (_maxNumber - _minNumber + 1)) + _minNumber;
  }
};

getRandomNumber(2, 4);

const getRandomFloatNumber = function (_minNumber, _maxNumber, _floatSigns) {

  if (_minNumber >= 0 && _maxNumber >= 0) {
    if (_minNumber >= _maxNumber) {
      return parseFloat((Math.random() * (_minNumber - _maxNumber) + _maxNumber).toFixed(_floatSigns));
    }
    return parseFloat((Math.random() * (_maxNumber - _minNumber) + _minNumber).toFixed(_floatSigns));
  }
};

getRandomFloatNumber(1.1, 1.2, 2);

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

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

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
      offer: getLocation(),
      location: getOffer(),
    };
  }
  return offers;
};

createOffers(10);
