import {activateApp} from '../state/activate-app.js';

const address = document.querySelector('#address');
address.readonly = true;

const map = L.map('map-canvas')
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);

const createMap = function () {

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.68950,
      lng: 139.69171,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);

  address.value = `${ mainPinMarker.getLatLng().lat } , ${ mainPinMarker._latlng.lng }`;
  mainPinMarker.on('dragend',(evt)=> {
    const chagedPos = evt.target.getLatLng();
    address.value = `${ chagedPos.lat.toFixed(5) } , ${ chagedPos.lng.toFixed(5) }`;
  });

  map.whenReady(activateApp);
};

export {createMap, map};
