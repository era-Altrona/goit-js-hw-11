// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { serviceImages } from './js/pixabay-api';
import { createGallery } from './js/render-functions';


const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

const galleryModal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();

  let question = event.target.elements.query.value.trim();

  gallery.innerHTML = ' ';

  if (!question) {
    iziToast.show({
      backgroundColor: '#EF4040',
      message: `Enter the data for the search!`,
      messageColor: '#FFFFFF',
      position: 'topRight',
    });
    return;
  }

  loader.style.display = 'inline-block';

  serviceImages(question)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          title: '',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topCenter',
        });
      }

      gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
      galleryModal.refresh();
      loader.style.display = 'none';
    })

    .catch(error => {
      console.log(error.message);
    })
    .finally(() => event.target.reset());
}