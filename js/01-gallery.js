import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const makeImgCard = ({preview, original, description}) => {

const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = original;

const itemEl = document.createElement('img');
    itemEl.classList.add('gallery__image');
    itemEl.src = preview;
    itemEl.dataset.source = original;
    itemEl.alt = description;

linkEl.appendChild(itemEl);
    return linkEl;
    
}

const images = galleryItems.map(makeImgCard);
console.log(images);

gallery.append(...images);


gallery.addEventListener('click', onImageClick)
function onImageClick(e) {
    blockStandAction(e);
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`);
    instance.show();
    gallery.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
}

function blockStandAction(e) {
    e.preventDefault();
}
