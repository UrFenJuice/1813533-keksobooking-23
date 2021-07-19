import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAX_PRICE, HOUSES_TYPES, MAX_ROOMS} from '../utils/constants.js';

const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const roomValue = form.querySelector('#type');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

const titleValidate = function () {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
};

title.addEventListener('input', titleValidate);

const priceValidate = function () {
  if (+price.value > MAX_PRICE) {
    price.setCustomValidity(`Цена за ночь не должна превышать ${  MAX_PRICE }`);
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
};

price.addEventListener('input', priceValidate);

const roomNumberValidate = function (targetElement) {

  if (+targetElement.value >= +capacity.value) {
    if (+targetElement.value === MAX_ROOMS && +capacity.value !== 0) {
      targetElement.setCustomValidity(`Эта недвижимость ${ capacity.querySelector('option[value="0"]').textContent }`);
    } else {
      targetElement.setCustomValidity('');
    }
  } else {
    targetElement.setCustomValidity(`Эта недвижимость ${ capacity.querySelector(`option[value="${ targetElement.value }"]`).textContent } или менее`);
  }
  targetElement.reportValidity();
};

const roomNumberChangeHandler = function (evt) {
  roomNumberValidate(evt.target);
};

roomNumber.addEventListener('change', roomNumberChangeHandler);

const capacityValidate = function (targetElement) {
  if (+targetElement.value <= +roomNumber.value) {
    if (+targetElement.value === 0 && +roomNumber.value !== MAX_ROOMS) {
      targetElement.setCustomValidity(`${ targetElement.options[targetElement.selectedIndex].textContent } ${ roomNumber.querySelector(`option[value="${MAX_ROOMS}"]`).textContent }`);

    } else {
      targetElement.setCustomValidity('');
    }
  } else {
    targetElement.setCustomValidity(`${ targetElement.options[targetElement.selectedIndex].textContent } ${ roomNumber.querySelector(`option[value="${ targetElement.value }"]`).textContent }`);
  }
  targetElement.reportValidity();
};

const capacityChangeHandler = function (evt) {
  capacityValidate(evt.target);
  roomNumberValidate(roomNumber);
};

capacity.addEventListener('change', capacityChangeHandler);

const roomValueValidate = function (targetElement) {
  for (let index = 0; index < HOUSES_TYPES.length; index++) {
    if (HOUSES_TYPES[index].type === targetElement.value) {
      price.min = HOUSES_TYPES[index].price;
      price.placeholder = HOUSES_TYPES[index].price;
    }
  }
};

roomValueValidate(roomValue);

const roomValueChangeHandler = function (evt) {
  roomValueValidate(evt.target);
};

roomValue.addEventListener('change', roomValueChangeHandler);

const timeInOut = function (targetElement) {
  if (targetElement !== timeIn) {
    timeIn.value = targetElement.value;
  } else {
    timeOut.value = targetElement.value;
  }
};

const timeInOutChangeHandler = function (evt) {
  timeInOut(evt.target);
};

timeIn.addEventListener('change', timeInOutChangeHandler);
timeOut.addEventListener('change', timeInOutChangeHandler);

export {titleValidate, priceValidate, roomNumberValidate, roomNumber, capacityValidate, capacity, roomValueValidate, roomValue, timeInOut, timeIn, form};
