const resultGrid = document.getElementById('addmovie-container');

// load movies from API
async function loadMovies(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const title = urlParams.get('title')
    console.log(title);
    const URL = `http://localhost:8080/user/movieByTitle/${title}`;
    const res = await fetch(URL);
    const data = await res.json();
    // // console.log(data.Search);
    if(res.ok == true)  displayMovieList(data);
}

function displayMovieList(details){
    console.log(resultGrid)
    resultGrid.innerHTML = `
    
    <div class="trailer-container container">
        <div class="trailer-child-container">
            <iframe width="1060" height="515"
            src="${details.trailerLink}">
            </iframe>
        </div>
    </div>


    <div class="heading-title container">
    <div class="more-info-class">
        More information about movie
    </div>
</div>
<div class="info-class container">
    
    <div class="col-xs-12">
        <p class="text-content">
        ${details.synopsis}
    </div>
    <dl class="info-tbl"><div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Original title:
    </dt> <dd>
    ${details.title}
    </dd></div><div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Movie genre:
    </dt> <dd>
    ${details.category}
    </dd></div><div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Cast:
    </dt> <dd>
    ${details.cast}
    </dd></div><div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Director:
    </dt> <dd>
    ${details.director}
    </dd></div><div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Production:
    </dt> <dd>
    ${details.producer}
    </dd></div> <div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Age restrictions:
    </dt> <dd>
    ${details.rating}
    </dd></div></div></div>
</div>

<div>


        <div class="select-date-time-container container">
            <div class="heading">
                <h2 class="heading-title">Select date and time for movie</h2>
            </div>
        </div>
        <div class="date-container container">
            <h2 class="heading-title">Select date</h2>
            <input type="date" value="2022-09-30" />
        </div>
        <div class="time-container">
            <div class="date-time-container container">
                <h2 class="heading-title theatre-container">
                    UGA Theatre - Screen 1
                </h2>
                <div >
                    <a href="D:\Master's\Software-Engineering\Project\ticket-selection\index.html">
                    <button type="button" class="button-class" id="button1">1:30pm</button>
                    <button type="button" class="button-class" id="button2">3:30pm</button>
                    <button type="button" class="button-class" id="button3">5:30pm</button>
                    </a>
                </div>
            </div>
            <div class="date-time-container container">
                <h2 class="heading-title theatre-container">
                    UGA Theatre - Screen 2
                </h2>
                <div >
                    <button type="button" class="button-class" id="button1">11:30am</button>
                    <button type="button" class="button-class" id="button2">1:30pm</button>
                    <button type="button" class="button-class" id="button3">3:30pm</button>
                    <button type="button" class="button-class" id="button3">5:30pm</button>
                    <button type="button" class="button-class" id="button3">6:30pm</button>
                </div>
            </div>
            <div class="date-time-container container">
                <h2 class="heading-title theatre-container">
                    UGA Theatre - Screen 3
                </h2>
                <div >
                    <button type="button" class="button-class" id="button1">11:30pm</button>
                    <button type="button" class="button-class" id="button2">1:30pm</button>
                    <button type="button" class="button-class" id="button3">7:30pm</button>
                </div>
            </div>
            <div class="date-time-container container">
                <h2 class="heading-title theatre-container">
                    UGA Theatre - Screen 4
                </h2>
                <div>
                    <button type="button" class="button-class" id="button1">1:30pm</button>
                    <button type="button" class="button-class" id="button2">3:30pm</button>
                    <button type="button" class="button-class" id="button3">5:30pm</button>
                </div>
            </div>
        </div>
    </div>





    `;
}
