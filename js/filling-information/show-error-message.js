const showErrorMessage = (error) => {
  const card = document.querySelector('#error').content;
  const template = card.querySelector('.error');
  const fragment = document.createDocumentFragment();
  const element = template.cloneNode(true);

  const closeButton = document.querySelector('.error__button');
  const popup = document.querySelector('.error');
  const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  if (error) {
    element.querySelector('.error__message').textContent = error;
  }

  fragment.appendChild(element);
  document.querySelector('body').appendChild(fragment);


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

export {showErrorMessage};
