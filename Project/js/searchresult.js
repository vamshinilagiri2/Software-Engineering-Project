const movieSearchBox = document.getElementById('search-input');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('swiper');

// load movies from API
async function loadMovies(searchTerm){
    const URL = `http://localhost:8080/user/searchByTitle/${searchTerm}`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if(data.rstatus.statusCode == 200) {
        displayMovieList(data.moviesList);
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
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        // let card = document.createElement("div");
        // //Card should have category and should stay hidden initially
        // card.classList.add("card", movies[idx].category, "hide");
        // movieListItem.appendChild(card);
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
    // loadMovieDetails();
}

// function loadMovieDetails(){
//     const searchListMovies = searchList.querySelectorAll('.search-list-item');
//     searchListMovies.forEach(movie => {
//         movie.addEventListener('click', async () => {
//             searchList.classList.add('hide-search-list');
//             movieSearchBox.value = "";
//             const result = await fetch(`http://localhost:8080/user/movieByTitle/${movieID}`);
//             const movieDetails = await result.json();
//             // console.log(movieDetails);
//             displayMovieDetails(movieDetails);
//         });
//     });
// }

// function displayMovieDetails(details){
    // resultGrid.innerHTML = `
    // <div class="swiper-wrapper">
    //     <!-- Movie box 1-->
    //     <div class="swiper-slide">
    //         <div class="movie-box">
    //             <img src="${details.Poster}" alt="" class="movie-box-img">
    //             <div class="box-text">
    //                 <h2 class="movie-title">${details.Title}</h2>
    //                 <span class="movie-type">${details.Genre}</span>
    //                 <br>
    //                 <a href="https://youtu.be/qZmY2lT28B8" class="book-btn">
    //                     <span>View Trailer</span> 
    //                     <lord-icon src="https://cdn.lordicon.com/fetyzpiw.json" trigger="morph" colors="primary:#ffffff" style="width:25px;height:25px"> </lord-icon>
    //                 </a>
    //                 <a href="addmovie.html" class="book-btn">
    //                 <span>Book ticket</span> 
    //                 <lord-icon src="https://cdn.lordicon.com/ucvsemjq.json" trigger="hover" colors="primary:#ffffff" style="width:25px;height:25px"> </lord-icon>
    //                 </a>
    //             </div>
    //         </div>  
    //     </div>
    // </div>
    // `;
// }

// window.addEventListener('click', (event) => {
//     if(event.target.className != "form-control"){
//         searchList.classList.add('hide-search-list');
//     }
// });


function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".movieListItem");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  