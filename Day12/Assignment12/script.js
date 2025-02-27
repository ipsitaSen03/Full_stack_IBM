
document.getElementById('movieForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let movie = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        year: document.getElementById('year').value,
        rating: document.getElementById('rating').value,
        genre: document.getElementById('genre').value,
        poster: document.getElementById('poster').value
    };
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    alert('Movie added successfully!');
    this.reset();
});

function displayMovies() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    let movieList = document.getElementById('movieList');
    if (!movieList) return;
    movieList.innerHTML = movies.length ? '' : '<tr><td colspan="7">No movies added yet!</td></tr>';
    movies.forEach((movie, index) => {
        movieList.innerHTML += `<tr>
            <td>${movie.name}</td>
            <td>${movie.description.slice(0, 100)}...</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" alt="Poster"></td>
            <td><button class="btn" onclick="deleteMovie(${index})">🗑 Delete</button></td>
        </tr>`;
    });
}
function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem('movies'));
    movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}
function sortMovies(field) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.sort((a, b) => a[field] > b[field] ? 1 : -1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}
document.getElementById('search')?.addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll('#movieList tr');
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(filter) ? '' : 'none';
    });
});
window.onload = displayMovies;