import {FILE_TYPES} from '../utils/constants.js';

const fileChooser = document.querySelector('.ad-form-header__input');
const preview = document.querySelector('.ad-form-header__preview img');

const fileChooserChangeHandler = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    const readerChangeHandler = () => {
      preview.src = reader.result;
    };

    reader.addEventListener('load', readerChangeHandler);

    reader.readAsDataURL(file);
  }
};

fileChooser.addEventListener('change', fileChooserChangeHandler);
