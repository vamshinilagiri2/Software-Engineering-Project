function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var promocode = document.getElementById("promocode_row" + no);
    var startdate = document.getElementById("startdate_row" + no);
    var enddate = document.getElementById("enddate_row" + no);
    var promovalue = document.getElementById("promovalue_row" + no);

    var promocode_data = promocode.innerHTML.trim();
    var startdate_data = startdate.innerHTML.trim();
    var enddate_data = enddate.innerHTML.trim();
    var promovalue_data = promovalue.innerHTML.trim();

    promocode.innerHTML = "<input type='text' id='promocode_text"+ no + "' value='" + promocode_data+"' readonly stylecursor: not-allowed;>";
    startdate.innerHTML = "<input type='date' id='startdate_text" + no + "' value='" + startdate_data + "'>";
    enddate.innerHTML = "<input type='date' id='enddate_text" + no + "' value='" + enddate_data + "'>";
    promovalue.innerHTML = "<input type='number' id='promovalue_text" + no + "' value='" + promovalue_data + "'>";
}

function save_row(no) {
    console.log(document.getElementById("promocode_text" + no))
    var promocode_val = document.getElementById("promocode_text" + no).value;
    var startdate_val = document.getElementById("startdate_text" + no).value;
    var enddate_val = document.getElementById("enddate_text" + no).value;
    var promovalue_val = document.getElementById("promovalue_text" + no).value;

    document.getElementById("promocode_row" + no).innerHTML = promocode_val;
    document.getElementById("startdate_row" + no).innerHTML = startdate_val;
    document.getElementById("enddate_row" + no).innerHTML = enddate_val;
    document.getElementById("promovalue_row" + no).innerHTML = promovalue_val;


    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";

    var promodata = {}
    promodata.promotionCode = promocode_val.trim();
    promodata.startDate = startdate_val
    promodata.endDate = enddate_val
    promodata.promotional_Value = promovalue_val

    fetch("http://localhost:8080/editPromotion",
        {

            // Adding method type
            method: "PUT",
            // Adding body or contents to send
            body: JSON.stringify(promodata),
            // Adding headers to the request
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
            //mode: 'no-cors'
        })

        // Converting to JSON
        .then(response => response.json())
        .then(json => {
            if (json.statusCode == 400) {
                alert(json.statusMessage);
            }
            else {
                alert("Promo Code saved Suceessfully");
            }

        })

}

function delete_row(no) {
    var promocode_row = "promocode_row" + no;
    var promocodename = document.getElementById(promocode_row).innerHTML;
    console.log(promocode_row)
    console.log(promocodename)
    fetch("http://localhost:8080/deletePromotion/" + promocodename.trim(),
        {

            // Adding method type
            method: "DELETE",
            // Adding body or contents to send
            //body: JSON.stringify(requestBody),
            // Adding headers to the request
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
            //mode: 'no-cors'
        })

        // Converting to JSON
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.statusCode == 400) {
                alert(json.statusMessage);
            }
            else {
                alert("Promo Code Deleted Suceessfully");
            }

        })

    document.getElementById("row" + no + "").outerHTML = "";



}

function add_row() {

    var requestBody = {}
    requestBody.promotionCode = document.getElementById("new_promocode").value
    requestBody.startDate = document.getElementById("new_startdate").value
    requestBody.endDate = document.getElementById("new_enddate").value
    requestBody.promotional_Value = document.getElementById("new_promovalue").value

    console.log(requestBody)
    fetch("http://localhost:8080/addPromotion",
        {

            // Adding method type
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify(requestBody),
            // Adding headers to the request
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
            //mode: 'no-cors'
        })

        // Converting to JSON
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.statusCode == 400) {
                alert(json.statusMessage);
            }
            else {

                var new_promocode = document.getElementById("new_promocode").value;
                var new_startdate = document.getElementById("new_startdate").value;
                var new_enddate = document.getElementById("new_enddate").value;
                var new_promovalue = document.getElementById("new_promovalue").value;

                var table = document.getElementById("data_table");
                var table_len = (table.rows.length) - 1;
                var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='promocode_row" + table_len + "'>" + new_promocode + "</td><td id='startdate_row" + table_len + "'>" + new_startdate + "</td><td id='enddate_row" + table_len + "'>" + new_enddate + "</td><td id='promovalue_row" + table_len + "'>" + new_promovalue + "</td> <td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'></td> <td> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'></td> <td> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td><td><input type='button' id='sendemail_row${count}' value='Send Email' class='sendemail' onclick='sendemail_row('${count}')'></td></tr>";




                alert("Promo Code Added Suceessfully");
            }

        })

}

function sendemail_row(no) {
    var promocode_row = "promocode_row" + no;
    var promocodename = document.getElementById(promocode_row).innerHTML;
    console.log(promocode_row)
    console.log(promocodename)
    fetch("http://localhost:8080/sendPromotionalEmail/" + promocodename.trim(),
        {

            // Adding method type
            method: "POST",
            // Adding body or contents to send
            //body: JSON.stringify(requestBody),
            // Adding headers to the request
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
            //mode: 'no-cors'
        })

        // Converting to JSON
        .then(response => {
            if(response.ok==true) {
                document.getElementById("edit_button"+no).disabled=true
                document.getElementById("deletebutton"+no).disabled=true

                alert("Email Sent Successfully !! ")
            }
        })


}