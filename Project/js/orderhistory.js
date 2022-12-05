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
}










