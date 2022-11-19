const moviedetails_url = "http://localhost:8080/user/movies";
const movietable = document.getElementById('movietable');

const promodetails_url = "http://localhost:8080/getPromotions";
const promotable = document.getElementById('promocodes');

const userdetails_url = "http://localhost:8080/getUsers";
const usertable = document.getElementById('usertable');

const moviedropdownlist = document.getElementById('movienamelist');
const movielist_api_url = "http://localhost:8080/user/movies/currentAndComingSoon";

async function adminpagedetails() {
    const response1 = await fetch(moviedetails_url);
    const data1 = await response1.json();
    for (let i of data1.moviesList) {
        movietable.innerHTML += `
          <tr>
            <td>
              <img src="data:image/png;base64,${i.picture}">
            </td>
            <td>
            ${i.title}
            </td>
            <td>
            ${i.category}
            </td>
            <td>
              ${i.releasedate}
            </td>
            <td>
              <div id=deletebutton onclick="delete()">
              <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="morph" colors="primary:#ffffff,secondary:#ffffff" state="morph-trash-in" style="width:25px;height:25px"> </lord-icon>
              </div>
          </tr>

`;
    }


    const response3 = await fetch(userdetails_url);
    const data3 = await response3.json();
    for (let i of data3) {
        usertable.innerHTML += `
        <tr>
          <td>
            ${i.firstName+" "+i.lastName}
          </td>
          <td>
            ${i.userName}
          </td>
          <td>
            ${i.emailID}
          </td>
          <td>
          ${i.usertype.userRole}
          </td>
          <td>
          <div id=deletebutton onclick="delete()">
          <lord-icon src="https://cdn.lordicon.com/rivoakkk.json" trigger="morph" colors="primary:#ffffff,secondary:#ffffff" state="morph-trash-in" style="width:25px;height:25px"> </lord-icon>
          </div>
        </tr>

`;
    }


    const response2 = await fetch(promodetails_url);
    const data2 = await response2.json();
    count=0;
    for (let i of data2) {
      count=count+1
        promotable.innerHTML += `
        <div class="promocodecard" id="promocodecard">
          <tr>
            <td>
              ${i.promotionCode}
            </td>
            <td>
              ${i.startDate}
            </td>
            <td>
              ${i.endDate}
            </td>
            <td>
              ${i.promotional_Value}
            </td>

            <td>
              <div id=deletebutton onclick="edit_row('${count}')">
              <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="morph" colors="primary:#ffffff,secondary:#ffffff" state="morph-trash-in" style="width:25px;height:25px"> </lord-icon>
              </div>
            </td>
          </tr>
        </div>

      `;
    }


    //------Load Movie List in Drop down menu in Add movie Section ----//

    const response = await fetch(movielist_api_url);
    const movienames = await response.json();
    for ( let i of movienames.moviesList) {
        moviedropdownlist.innerHTML += `
		<option value="${i.title}"></option>
        `;
    }

    






}