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
              ${i.rating}
            </td>
            <td>
            <div>
            <lord-icon
                src="https://cdn.lordicon.com/gsqxdxog.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style="width:25px;height:25px">
            </lord-icon>
            </div>
            </td>
            
          </tr>

`;
  }


  const response3 = await fetch(userdetails_url);
  const data3 = await response3.json();
  for (let i of data3) {
    usertable.innerHTML += `

        <tr>
          <td>
            ${i.firstName + " " + i.lastName}
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
  count = 0;
  for (let i of data2) {
    count = count + 1
    promotable.innerHTML += `
          <tr id="row${count}">
            <td id="promocode_row${count}">
              ${i.promotionCode}
            </td>
            <td id="startdate_row${count}">
              ${i.startDate}
            </td>
            <td id="enddate_row${count}">
              ${i.endDate}
            </td>
            <td id="promovalue_row${count}">
              ${i.promotional_Value}
            </td>

            <td>
              <input type="button" id="edit_button${count}" value="Edit" class="edit" onclick="edit_row('${count}')">
            </td>
            <td>
              <input type="button" id="save_button${count}" value="Save" class="save"  style="display:none"  onclick="save_row('${count}')">
            </td>
            <td>
              <input type="button" id=deletebutton${count} class="delete" onclick="delete_row('${count}')" value="Delete">
            </td>
            <td>
              <input type="button" id="sendemail_button${count}" value="Send Email" class="edit" onclick="sendemail_row('${count}')">
            </td>

          </tr>
      `;
  }


  //------Load Movie List in Drop down menu in Add movie Section ----//

  const response = await fetch(movielist_api_url);
  const movienames = await response.json();
  for (let i of movienames.moviesList) {
    moviedropdownlist.innerHTML += `
		<option value="${i.title}"></option>
        `;
  }








}