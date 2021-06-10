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

const getRandomFloatNumber = function (_minNumber, _maxNumber, _floatSigns) {

  if (_minNumber >= 0 && _maxNumber >= 0) {
    if (_minNumber >= _maxNumber) {
      return parseFloat((Math.random() * (_minNumber - _maxNumber) + _maxNumber).toFixed(_floatSigns));
    }
    return parseFloat((Math.random() * (_maxNumber - _minNumber) + _minNumber).toFixed(_floatSigns));
  }
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, getRandomFloatNumber, getRandomArrayElement};
