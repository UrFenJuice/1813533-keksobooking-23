const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

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

  if (capacity.value !== targetElement.value) {
    if (+targetElement.value > 99) {
      if (capacity.value !== '0') {
        targetElement.setCustomValidity(`Эта недвижимость ${ capacity.querySelector('option[value="0"]').textContent }`);
      } else {
        targetElement.setCustomValidity('');
      }
    } else {
      targetElement.setCustomValidity(`Эта недвижимость ${ capacity.querySelector(`option[value="${ targetElement.value }"]`).textContent }`);
    }
  } else {
    targetElement.setCustomValidity('');
  }
  targetElement.reportValidity();
};

const roomNumberChangeHandler = function (evt) {
  roomNumberValidate(evt.target);
};

roomNumber.addEventListener('change', roomNumberChangeHandler);

const capacityChangeHandler = function (evt) {
  const targetElement = evt.target;

  if (roomNumber.value !== targetElement.value) {
    if (+targetElement.value < 1) {
      if (roomNumber.value !== '100') {
        targetElement.setCustomValidity(`${ targetElement.options[targetElement.selectedIndex].textContent } ${ roomNumber.querySelector('option[value="100"]').textContent }`);
      } else {
        targetElement.setCustomValidity('');
      }

    } else {
      targetElement.setCustomValidity(`${ targetElement.options[targetElement.selectedIndex].textContent } ${ roomNumber.querySelector(`option[value="${ targetElement.value }"]`).textContent }`);
    }
  } else {
    targetElement.setCustomValidity('');
  }

  targetElement.reportValidity();
};

capacity.addEventListener('change', capacityChangeHandler);


const formChangeHandler = function () {
  titleValidate();
  priceValidate();
  roomNumberValidate(roomNumber);
};

form.addEventListener('submit', formChangeHandler);
