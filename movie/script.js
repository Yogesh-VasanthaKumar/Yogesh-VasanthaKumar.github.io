const searchInput = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');

let debounceTimer;


async function fetchMovies(query) {
    try {
        const response = await fetch(`https://swapi.dev/api/films/?search=${query}`);
        
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

function updateMovieList(movies) {
    movieList.innerHTML = '';
    if(movies.length == 0){
        const li = document.createElement('li');
        li.textContent = "No Movie Found";
        movieList.appendChild(li);
    }
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        movieList.appendChild(li);
    });
}


function handleSearchInput() {
    const query = searchInput.value;

   
    clearTimeout(debounceTimer);

   
    debounceTimer = setTimeout(async () => {
        if (query.length >= 3) {
            const movies = await fetchMovies(query);
            updateMovieList(movies);
        }
        else{
            const li = document.createElement('li');
        li.textContent = "Please enter more than 3 letter";
        movieList.appendChild(li);
        }
    }, 300); 
}


searchInput.addEventListener('input', handleSearchInput);
