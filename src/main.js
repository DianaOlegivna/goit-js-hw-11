import { createGalleryCardTemplate } from '../src/js/render-functions';
import { fetchImages} from '../src/js/pixabay-api';
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

let lightbox = new SimpleLightbox('.gallery-item', {
    captionsData: 'alt',
    captionDelay: 250,
});

 const toggleLoading = isLoading => {
    if (isLoading) {
        galleryEl.innerHTML = '<p>Loading images, please wait...</p>'; 
    } else {
        galleryEl.innerHTML = '';
    }
};

const onSearchFormSubmit = event => {
    event.preventDefault();

    const query = event.currentTarget.elements.user_query.value.trim();

    if (query === '') {
        iziToast.error({ message: 'The search field cannot be empty!!' });

        return;
    }

    toggleLoading(true);


    fetchImages(query)
        .then(data => {
            toggleLoading(false);

            if (data.total === 0) {
              iziToast.warning({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });

                searchFormEl.reset();

                return;
            }

            const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

            galleryEl.innerHTML = galleryTemplate;
            lightbox.refresh();
        })
        .catch(err => {
            console.log(err);
        });
    
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);