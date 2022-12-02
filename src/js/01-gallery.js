// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

gallery.innerHTML += onCreatePlot(galleryItems);

function onCreatePlot(galleryItems) {
  return galleryItems
    .map(element => {
      return `<a class="gallery__item" href="${element.original}">
        <img class="gallery__image" src="${element.preview}" alt="${element.description}"/>
        </a>`;
    })
    .join('');
}

let modal = new simpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
modal.on('show.simplelightbox');
