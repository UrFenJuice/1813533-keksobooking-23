import {createOffers} from './utils/create-offers.js';
import {createAd} from './utils/create-ad.js';

import {deactivatedApp} from './state/deactivated-app.js';
import {activatedApp} from './state/activated-app.js';

import {fillingInfo} from './filling-information/filling-information.js';
import {publishInfo} from './filling-information/publish-information.js';
import {validateInfo} from './filling-information/validate-information.js';
import {confirmedInfo} from './filling-information/confirmed-information.js';
import {showMessage} from './filling-information/show-message.js';
import {showErrorMessage} from './filling-information/show-error-message.js';

const adOffers = createOffers(10);

const mapCanvas = document.querySelector('#map-canvas');

mapCanvas.appendChild(createAd(adOffers[0]));

deactivatedApp();

activatedApp();

fillingInfo();

publishInfo();

validateInfo();

confirmedInfo();

showMessage();

showErrorMessage();
