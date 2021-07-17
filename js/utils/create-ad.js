const createAd = (offer) => {
  const card = document.querySelector('#card').content;
  const template = card.querySelector('.popup');

  const element = template.cloneNode(true);

  const allElements = element.children;

  element.querySelector('.popup__title').textContent = offer.offer.title;
  element.querySelector('.popup__text--address').textContent = offer.offer.address;
  element.querySelector('.popup__text--price').textContent = `${offer.offer.price  } ₽/ночь`;

  let typeOfHousing;
  switch (offer.offer.type) {
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
  element.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms  } комнаты для ${  offer.offer.guests  } гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${  offer.offer.checkin  }, выезд до ${  offer.offer.checkout}`;

  const features = offer.offer.features;
  const featureListElement = element.querySelector('.popup__features');

  if(features) {

    const featuresFragment = document.createDocumentFragment();
    features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);

      featuresFragment.appendChild(featureElement);
    });
    featureListElement.textContent = '';
    featureListElement.appendChild(featuresFragment);
  } else {
    featureListElement.style.display = 'none';
  }


  element.querySelector('.popup__description').textContent = offer.offer.description;


  const offerPhotos = offer.offer.photos;
  const photosBlock = element.querySelector('.popup__photos');
  const newPhoto = card.querySelector('.popup__photo');
  const fragmentPhoto = document.createDocumentFragment();
  if (offerPhotos) {
    offerPhotos.forEach((photo) => {
      const elementPhoto = newPhoto.cloneNode(true);
      elementPhoto.src = photo;
      fragmentPhoto.appendChild(elementPhoto);
    });
    photosBlock.innerHTML = '';
    photosBlock.appendChild(fragmentPhoto);
  } else {
    photosBlock.style.display = 'none';
  }


  element.querySelector('.popup__avatar').src = offer.author.avatar;

  for (let index = 0; index < allElements.length; index++) {
    if (allElements[index].innerHTML === '' && !allElements[index].classList.contains('popup__avatar')) {
      allElements[index].style.display = 'none';
    }
  }

  return element;
};

export {createAd};
