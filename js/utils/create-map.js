import {activateApp} from '../state/activate-app.js';

const defaultLat = 35.68950;
const defaultLng = 139.69171;
const address = document.querySelector('#address');
address.readonly = true;

const map = L.map('map-canvas')
  .setView({
    lat: defaultLat,
    lng: defaultLng,
  }, 10);

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const createMarker = () => {
  const mainPinMarker = L.marker(
    {
      lat: defaultLat,
      lng: defaultLng,
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
    address.value = `${ chagedPos.lat.toFixed(5) }, ${ chagedPos.lng.toFixed(5) }`;
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

export {createMap, map, defaultLat, defaultLng, address, markerGroup, mainPinIcon, createMarker};
