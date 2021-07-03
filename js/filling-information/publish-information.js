import {titleValidate, priceValidate, roomNumberValidate, roomNumber, roomValueValidate, roomValue, timeInOut, timeIn, form} from './validate-information.js';
import {showErrorMessage} from './show-error-message.js';
import {hideMessage} from './hide-message.js';
import {showMessage} from './show-message.js';

const publishInfo = () => {

  const formChangeHandler = function (evt) {
    evt.preventDefault();
    titleValidate();
    priceValidate();
    roomNumberValidate(roomNumber);
    roomValueValidate(roomValue);
    timeInOut(timeIn);


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
  };

  form.addEventListener('submit', formChangeHandler);
};

export {publishInfo};
