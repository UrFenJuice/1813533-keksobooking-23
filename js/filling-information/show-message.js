import {resetForm} from './reset-form.js';

const closePopup = () => {
  const popup = document.querySelector('.success');
  const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  const closePopupChangeHandler = () => {
    popup.remove();
  };

  popup.addEventListener('click', closePopupChangeHandler);

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      popup.remove();
    }
  };
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showMessage = () => {
  const card = document.querySelector('#success').content;
  const template = card.querySelector('.success');

  const fragment = document.createDocumentFragment();

  const element = template.cloneNode(true);

  fragment.appendChild(element);

  document.querySelector('body').appendChild(fragment);

  closePopup();

  resetForm();
};

export {showMessage};
