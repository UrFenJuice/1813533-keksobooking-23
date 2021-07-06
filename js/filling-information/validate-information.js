const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const housesType = [
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
    if (+targetElement.value === 100 && +capacity.value !== 0) {
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
    if (+targetElement.value === 0 && +roomNumber.value !== 100) {
      targetElement.setCustomValidity(`${ targetElement.options[targetElement.selectedIndex].textContent } ${ roomNumber.querySelector('option[value="100"]').textContent }`);
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
};

capacity.addEventListener('change', capacityChangeHandler);

const roomValueValidate = function (targetElement) {
  for (let index = 0; index < housesType.length; index++) {
    if (housesType[index].type === targetElement.value) {
      price.min = housesType[index].price;
      price.placeholder = housesType[index].price;
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
