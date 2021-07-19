import {activateApp} from '../state/activate-app.js';
import {DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM, ICON_URL, DEFAULT_ICON_SIZE, DEFAULT_ICON_ANCHOR, MAX_NUM_OF_DECIMAL_PLACES} from './constants.js';

const address = document.querySelector('#address');
address.readonly = true;

const map = L.map('map-canvas')
  .setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, DEFAULT_ZOOM);

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: ICON_URL,
  iconSize: DEFAULT_ICON_SIZE,
  iconAnchor: DEFAULT_ICON_ANCHOR,
});

const createMarker = () => {
  const mainPinMarker = L.marker(
    {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(markerGroup);

  address.value = `${ mainPinMarker.getLatLng().lat } , ${ mainPinMarker._latlng.lng }`;

  mainPinMarker.on('dragend',(evt)=> {
    const chagedPos = evt.target.getLatLng();
    address.value = `${ chagedPos.lat.toFixed(MAX_NUM_OF_DECIMAL_PLACES) }, ${ chagedPos.lng.toFixed(MAX_NUM_OF_DECIMAL_PLACES) }`;
  });
};

const createMap = () => {

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  createMarker();

  map.whenReady(activateApp);
};

export {createMap, map, address, markerGroup, mainPinIcon, createMarker};
