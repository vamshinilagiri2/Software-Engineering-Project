const movieSearchBox = document.getElementById('search-input');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('swiper');

// load movies from API
async function loadMovies(searchTerm){
    const URL = `http://localhost:8080/user/searchByTitle/${searchTerm}`;
    const res = await fetch(`${URL}`);
    if(res.ok == false) {
        searchList.innerHTML = `
        <div class = "search-item-info">
            <h1>Movie Not Found ! </h1> 
        </div>
        `;
        
    }
    else {
        const data = await res.json();
        if(data.rstatus.statusCode == 200) {
            displayMovieList(data.moviesList);
        }
    }
}

function findMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMovieList(movies){
    searchList.innerHTML = "";
    if(movies.length==0) {
        searchList.length=0;
    }
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].movieID; // setting movie id in  data-id
        movieListItem.classList.add('search-list-item');
        if(movies[idx].picture != "N/A")
            moviePoster = movies[idx].picture;
        else 
            moviePoster = "image_not_found.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "data:image/png;base64,${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].title}</h3>
           <p>${movies[idx].category}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
          var url = new URL("http://localhost/Integration/Project/movieinformation.html");
          var title= document.getElementsByTagName("h3")[0].innerHTML;
          url.searchParams.append('title', title);
          window.location = url ;

        });
    });
}

