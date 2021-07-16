import {map} from './create-map.js';
import {createAd} from './create-ad.js';

const markerGroup = L.layerGroup().addTo(map);

const createMapLable = (item) => {
  const lat = item.location.lat;
  const lng = item.location.lng;
  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      createAd(item),
      {
        keepInView: true,
      },
    );
};

export {createMapLable, markerGroup};
