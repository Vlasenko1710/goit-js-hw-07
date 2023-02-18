import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
// const makeImgCard = ({preview, original, description}) => {

// const linkEl = document.createElement('a');
//     linkEl.classList.add('gallery__link');
//     linkEl.href = original;

// const itemEl = document.createElement('img');
//     itemEl.classList.add('gallery__image');
//     itemEl.src = preview;
//     itemEl.alt = description;

// linkEl.appendChild(itemEl);
//     return linkEl;
    
// }
// const images = galleryItems.map(makeImgCard);
// console.log(images);

// gallery.append(...images);

const makeImageMarkup = image => {
    const { preview, original, description } = image;
    return `
     <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`};
console.log(makeImageMarkup);
const makeGalleryMarkup = galleryItems.map(makeImageMarkup).join('');
gallery.insertAdjacentHTML('beforeend', makeGalleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {

  captionsData: "alt",
    captionDelay: 250,
    loop: false,
    widthRatio: 0.9,
    heightRatio: 0.9,
});