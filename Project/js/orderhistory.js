const resultGrid1 = document.getElementById('orderhistorycard');
const api_url = "http://localhost:8080/checkout/orderHistory/" +un;

async function orderhistory() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)
    if (response.ok == true) {
        for (let i of data.bookingList) {
            resultGrid1.innerHTML += `
            <section class="product" id="orderhistorycards">
                <div class="product__photo">
                    <div class="photo-main">
                    <img src="data:image/png;base64,${i.movie.picture}" alt="" class="movie-box-img">
                    </div>
                </div>
                <div class="product__info">
                    <div class="title">
                        <h1>${i.movie.title}</h1>
                        <span>Booking ID: CEBS${i.bookingID}</span>
                    </div>
                    <div class="description">
                        <ul>
                            <li>Show Date: ${i.showdetails.showId.showDate}</li>
                            <li>Show time: ${i.showdetails.showId.showTime}</li>
                            <li>Number of tickets purchased: x ${i.numberOfTickets}</li>
                        </ul>
                    </div>
                    <div class="price">
                        <span>$${i.totalPrice}</span>
                    </div>
                </div>
          </section>
          <br>
        `;
        }

    }

    else if (response.ok == false) {

    }
}










