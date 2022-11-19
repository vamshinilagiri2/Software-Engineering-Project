var un = window.localStorage.getItem('searchTerm');
const resultGrid = document.getElementById('swiper');
const api_url = "http://localhost:8080/movies/"+un;
console.log(un);
console.log(api_url);
async function loadUser() 
{
  const response = await fetch(api_url);
   const data = await response.json();
    resultGrid.innerHTML = `
    <div class="swiper-wrapper">
        <!-- Movie box 1-->
        <div class="swiper-slide">
            <div class="movie-box">
                <img src="${details.Poster}" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title">${details.Title}</h2>
                    <span class="movie-type">${details.Genre}</span>
                    <br>
                    <a href="https://youtu.be/qZmY2lT28B8" class="book-btn">
                        <span>View Trailer</span> 
                        <lord-icon src="https://cdn.lordicon.com/fetyzpiw.json" trigger="morph" colors="primary:#ffffff" style="width:25px;height:25px"> </lord-icon>
                    </a>
                    <a href="addmovie.html" class="book-btn">
                    <span>Book ticket</span> 
                    <lord-icon src="https://cdn.lordicon.com/ucvsemjq.json" trigger="hover" colors="primary:#ffffff" style="width:25px;height:25px"> </lord-icon>
                    </a>
                </div>
            </div>  
        </div>
    </div>
    `;
}
loadUser();

window.addEventListener('click', (event) => {
    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
});