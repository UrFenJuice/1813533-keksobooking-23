import {createOffers} from './utils/create-offers.js';
import {createAd} from './utils/create-ad.js';

import {deactivateApp} from './state/deactivate-app.js';
import {activateApp} from './state/activate-app.js';

import {fillingInfo} from './filling-information/filling-information.js';
import {publishInfo} from './filling-information/publish-information.js';
import './filling-information/validate-information.js';
import {confirmedInfo} from './filling-information/confirmed-information.js';
import {showMessage} from './filling-information/show-message.js';
import {showErrorMessage} from './filling-information/show-error-message.js';

const adOffers = createOffers(10);

const mapCanvas = document.querySelector('#map-canvas');

mapCanvas.appendChild(createAd(adOffers[0]));

deactivateApp();

activateApp();

fillingInfo();

publishInfo();

confirmedInfo();

showMessage();

showErrorMessage();
