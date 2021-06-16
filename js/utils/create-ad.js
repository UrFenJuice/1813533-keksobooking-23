const createAd = function (offer, container) {
  const adContainer = document.querySelector(container);
  const card = document.querySelector('#card').content;
  const template = card.querySelector('.popup');
  const fragment = document.createDocumentFragment();

  const element = template.cloneNode(true);

  element.querySelector('.popup__title').textContent = offer.location.title;
  element.querySelector('.popup__text--address').textContent = offer.location.address;
  element.querySelector('.popup__text--price').textContent = `${offer.location.price  } ₽/ночь`;

  let typeOfHousing;
  switch (offer.location.type) {
    case 'flat':
      typeOfHousing = 'Квартира';
      break;
    case 'bungalow':
      typeOfHousing = 'Бунгало';
      break;
    case 'house':
      typeOfHousing = 'Дом';
      break;
    case 'palace':
      typeOfHousing = 'Дворец';
      break;
    case 'hotel':
      typeOfHousing = 'Отель';
      break;
  }
  element.querySelector('.popup__type').textContent = typeOfHousing;
  element.querySelector('.popup__text--capacity').textContent = `${offer.location.rooms  } комнаты для ${  offer.location.guests  } гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${  offer.location.checkin  }, выезд до ${  offer.location.checkout}`;

  const features = offer.location.features;
  const featureListElement = element.querySelector('.popup__features');
  const modifiers = features.map((feature) => `popup__feature--${feature}`);

  featureListElement.querySelectorAll('.popup__feature')
    .forEach((item) => {
      const modifier = item.classList[1];

      if (! modifiers.includes(modifier)) {
        item.remove();
      }
    });
  element.querySelector('.popup__description').textContent = offer.location.description;


  const offerPhotos = offer.location.photos;
  const photosBlock = element.querySelector('.popup__photos');
  const newPhoto = card.querySelector('.popup__photo');
  const fragmentPhoto = document.createDocumentFragment();
  offerPhotos.forEach((photo) => {
    const elementPhoto = newPhoto.cloneNode(true);
    elementPhoto.src = photo;
    fragmentPhoto.appendChild(elementPhoto);
  });
  photosBlock.children[0].remove();
  photosBlock.appendChild(fragmentPhoto);

  element.querySelector('.popup__avatar').src = offer.author.avatar;

  fragment.appendChild(element);
  adContainer.appendChild(fragment);
};

export {createAd};
