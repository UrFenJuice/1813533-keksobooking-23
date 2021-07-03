const showErrorMessage = (error, hideError) => {
  const showError = new Promise((resolve) => {
    const card = document.querySelector('#error').content;
    const template = card.querySelector('.error');

    const fragment = document.createDocumentFragment();

    const element = template.cloneNode(true);

    if (error) {
      element.querySelector('.error__message').textContent = error;
    }

    fragment.appendChild(element);

    resolve(document.querySelector('body').appendChild(fragment));
  });

  showError.then(() => {
    hideError();
  });
};

export {showErrorMessage};
