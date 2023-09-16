const imageContainer = document.getElementById('image-container');
const loadingMessage = document.getElementById('loading-message');

let page = 1;
let loading = false;
const apikey = "Vg3AEaW5k0Tez4HJppmpqZfyxNFSjxrArXX39Pj784c";
async function fetchImages(page) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}

function createImageCard(imageData) {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const image = document.createElement('img');
    image.src = imageData.urls.regular;
    image.alt = imageData.alt_description;

    imageCard.appendChild(image);
    imageContainer.appendChild(imageCard);
}

async function loadImages() {
    if (loading) return;
    loading = true;
    loadingMessage.style.display = 'block';

    const images = await fetchImages(page);
    images.forEach(createImageCard);

    page++;
    loading = false;
    loadingMessage.style.display = 'none';
}


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadImages();
    }
});


loadImages();
