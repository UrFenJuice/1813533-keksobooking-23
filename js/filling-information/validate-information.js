const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

const MIN_TITLE_LENGTH = title.getAttribute('minlength');
const MAX_TITLE_LENGTH = title.getAttribute('maxlength');
const MAX_PRICE = price.getAttribute('max');

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
  if (+price.value > +MAX_PRICE) {
    price.setCustomValidity(`Цена за ночь не должна превышать ${  MAX_PRICE }`);
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
};

price.addEventListener('input', priceValidate);

const roomNumberChangeHandler = function (evt) {
  const targetElement = evt.target;

  if (capacity.value !== targetElement.value) {
    if (+targetElement.value > 99) {
      targetElement.setCustomValidity(`Эта недвижимость ${ capacity.querySelector('option[value="0"]').textContent }`);
    } else {
      targetElement.setCustomValidity(`Эта недвижимость ${ capacity.querySelector(`option[value="${ targetElement.value }"]`).textContent }`);
    }
  } else {
    targetElement.setCustomValidity('');
  }

  targetElement.reportValidity();
};

roomNumber.addEventListener('change', roomNumberChangeHandler);

const roomNumberValidate = function () {
  const targetElement = roomNumber;

  if (capacity.value !== targetElement.value) {
    if (+targetElement.value > 99) {
      targetElement.setCustomValidity(`Эта недвижимость ${ capacity.querySelector('option[value="0"]').textContent }`);
    } else {
      targetElement.setCustomValidity(`Эта недвижимость ${ capacity.querySelector(`option[value="${ targetElement.value }"]`).textContent }`);
    }
  } else {
    targetElement.setCustomValidity('');
  }
  targetElement.reportValidity();
};

const capacityChangeHandler = function (evt) {
  const targetElement = evt.target;

  if (roomNumber.value !== targetElement.value) {
    if (+targetElement.value < 1) {
      targetElement.setCustomValidity(`${ targetElement.options[targetElement.selectedIndex].textContent } ${ roomNumber.querySelector('option[value="100"]').textContent }`);
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
  roomNumberValidate();
};

form.addEventListener('submit', formChangeHandler);
