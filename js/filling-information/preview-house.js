const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.ad-form__input');
const preview = document.querySelector('.ad-form__photo');
const photo = document.createElement('img');


fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    preview.appendChild(photo);
    photo.width = 70;
    photo.height = 70;

    reader.addEventListener('load', () => {
      photo.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});
