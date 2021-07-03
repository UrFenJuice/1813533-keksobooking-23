const hideMessage = () => {
  const closeButton = document.querySelector('.error__button');
  const popup = document.querySelector('.error');
  const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  closeButton.addEventListener('click', () => {
    popup.remove();
  });
  popup.addEventListener('click', () => {
    popup.remove();
  });

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      popup.remove();
    }
  };
  document.addEventListener('keydown', onPopupEscKeydown);
};

export {hideMessage};
