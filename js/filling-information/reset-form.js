import {defaultLat, defaultLng, address, markerGroup, mainPinIcon} from '../utils/create-map.js';

const resetForm = () => {
  const reset = new Promise((resolve) => {
    document.querySelector('.ad-form').reset();
    document.querySelector('.map__filters').reset();

    resolve(markerGroup.clearLayers());
  });
  reset.then(() => {
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

    address.value = `${ defaultLat } , ${ defaultLng }`;

    mainPinMarker.on('dragend',(evt)=> {
      const chagedPos = evt.target.getLatLng();
      address.value = `${ chagedPos.lat.toFixed(5) }, ${ chagedPos.lng.toFixed(5) }`;
    });
  });
};

export {resetForm};
