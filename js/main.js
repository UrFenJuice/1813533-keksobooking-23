
import {deactivateApp} from './state/deactivate-app.js';

import {createOffers} from './utils/create-offers.js';

import {createMap} from './utils/create-map.js';
import {createMapLable} from './utils/create-map-lable.js';

import {fillingInfo} from './filling-information/filling-information.js';
import {publishInfo} from './filling-information/publish-information.js';
import './filling-information/validate-information.js';
import {confirmedInfo} from './filling-information/confirmed-information.js';
import {showMessage} from './filling-information/show-message.js';
import {showErrorMessage} from './filling-information/show-error-message.js';

deactivateApp();

createMap();

const adOffers = createOffers(10);

adOffers.forEach((offer) => {
  createMapLable(offer);
});

fillingInfo();

publishInfo();

confirmedInfo();

showMessage();

showErrorMessage();
