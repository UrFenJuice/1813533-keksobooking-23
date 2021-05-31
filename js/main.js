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
