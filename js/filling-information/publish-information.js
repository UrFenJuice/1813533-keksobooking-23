import {titleValidate, priceValidate, roomNumberValidate, roomNumber, capacityValidate, capacity, roomValueValidate, roomValue, timeInOut, timeIn, form} from './validate-information.js';
import {showErrorMessage} from './show-error-message.js';
import {hideMessage} from './hide-message.js';
import {showMessage} from './show-message.js';

const publishInfo = () => {

  const formChangeHandler = function (evt) {
    evt.preventDefault();

    const validateMyForm = new Promise(() => {
      titleValidate();
      priceValidate();
      roomNumberValidate(roomNumber);
      capacityValidate(capacity);
      roomValueValidate(roomValue);
      timeInOut(timeIn);
    });

    validateMyForm.then(() => {
      fetch(
        'https://23.javascript.pages.academy/keksobooking',
        {
          method: 'POST',
          body: new FormData(evt.target),
        },
      )
        .then((response) => {
          if (response.ok) {
            return showMessage();
          }

          throw new Error(`${response.status} ${response.statusText}`);
        })
        .catch(() => {
          showErrorMessage('', hideMessage);
        });
    });
  };

  form.addEventListener('submit', formChangeHandler);
};

export {publishInfo};
