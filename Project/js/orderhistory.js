const resultGrid1 = document.getElementById('orderhistorycard');
const api_url = "http://localhost:8080/user/movies/current";

async function orderhistory() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)
    if (response.ok == true) {
        for (let i of data.moviesList) {
            resultGrid1.innerHTML += `
            <div class="product__photo">
                <div class="photo-main">
                    <img src="imgs/alien.jpg" alt="green apple slice">
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Movie Name </h1>
                    <span>Booking ID: 45999</span>
                </div>
                <div class="description">
                    <ul>
                        <li>Show Date: 01-01-01</li>
                        <li>Show time: 10:00:00</li>
                        <li>Number of tickets purchased: x4</li>
                    </ul>
                </div>
                <div class="price">
                    <span>$7.93</span>
                </div>
            </div>
        
        `;
        }

    }

    else if (response.ok == false) {

    }




    const response2 = await fetch(api_url2);
    const data2 = await response2.json();
    console.log(data2)
    if (response2.ok == true) {
        for (let i of data2.moviesList) {
            resultGrid2.innerHTML += `
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="data:image/png;base64,${i.picture}" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title">${i.title}</h2>
                            <span class="movie-type">${i.category}</span>
                            <br>
                            <a href="${i.trailerLink}" class="book-btn">
                                <span>View Trailer</span> 
                                <lord-icon src="https://cdn.lordicon.com/fetyzpiw.json" trigger="morph" colors="primary:#ffffff" style="width:25px;height:25px"> </lord-icon>
                            </a>
                            <a href="movieinformation.html?title=${i.title}" class="book-btn" onclick="moviecarddetails()">
                            <span>Book ticket</span> 
                            <lord-icon src="https://cdn.lordicon.com/ucvsemjq.json" trigger="hover" colors="primary:#ffffff" style="width:25px;height:25px"> </lord-icon>
                            </a>
                        </div>
                    </div>  
                </div>
        
        `;
        }

    }
    else if (response2.ok == false) {

    }




}










