import {map} from './create-map.js';
import {createAd} from './create-ad.js';

const createMapLable = function (item) {
  const lat = item.offer.lat;
  const lng = item.offer.lng;
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
    .addTo(map)
    .bindPopup(
      createAd(item),
      {
        keepInView: true,
      },
    );
};

export {createMapLable};
