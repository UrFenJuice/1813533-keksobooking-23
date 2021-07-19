import {FILE_TYPES, PHOTO_WIDTH, PHOTO_HEIGHT} from '../utils/constants.js';

const fileChooser = document.querySelector('.ad-form__input');
const preview = document.querySelector('.ad-form__photo');
const photo = document.createElement('img');

const fileChooserChangeHandler = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    preview.appendChild(photo);
    photo.width = PHOTO_WIDTH;
    photo.height = PHOTO_HEIGHT;

    const readerChangeHandler = () => {
      photo.src = reader.result;
    };

    reader.addEventListener('load', readerChangeHandler);

    reader.readAsDataURL(file);
  }
};

fileChooser.addEventListener('change', fileChooserChangeHandler);
