const generateButton = document.getElementById('generate-btn');
const animeImage = document.getElementById('anime-image');


async function generateAnimePicture() {
    try {
        const apiKey = 'Vg3AEaW5k0Tez4HJppmpqZfyxNFSjxrArXX39Pj784c';
        const response = await fetch(`https://api.unsplash.com/photos/random?query=anime&client_id=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            const imageUrl = data.urls.regular;
            animeImage.src = imageUrl;
        } else {
            throw new Error('Unable to fetch image');
        }
    } catch (error) {
        console.error(error);
        alert('Failed to generate an anime picture. Please try again later.');
    }
}

generateButton.addEventListener('click', generateAnimePicture);
