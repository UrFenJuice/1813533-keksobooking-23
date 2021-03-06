const closePopup = () => {
  const closeButton = document.querySelector('.error__button');
  const popup = document.querySelector('.error');
  const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  const closePopupChangeHandler = () => {
    popup.remove();
  };

  closeButton.addEventListener('click', closePopupChangeHandler);
  popup.addEventListener('click', closePopupChangeHandler);

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      popup.remove();
    }
  };
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showErrorMessage = (error) => {
  const card = document.querySelector('#error').content;
  const template = card.querySelector('.error');
  const fragment = document.createDocumentFragment();
  const element = template.cloneNode(true);

  if (error) {
    element.querySelector('.error__message').textContent = error;
  }

  fragment.appendChild(element);
  document.querySelector('body').appendChild(fragment);

  closePopup();
};

export {showErrorMessage};
