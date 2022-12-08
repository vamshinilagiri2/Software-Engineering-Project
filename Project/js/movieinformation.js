const resultGrid = document.getElementById('addmovie-container');

var todaysdate = "";

// load movies from API
async function loadMovies(){
    const isoStr = new Date().toISOString();
    console.log(isoStr);
    const datetimearr = isoStr.split("T");
    console.log(datetimearr);
    todaysdate = datetimearr[0];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const title = urlParams.get('title')
    const URL = `http://localhost:8080/user/movieByTitle/${title}`;
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data)

      

    if(res.ok == true)  displayMovieList(data);
}

function onloadshowdetails() {
    getshowdetails({value:todaysdate})
}

async function getshowdetails(Object){
    var screenheader1 =document.getElementById("screen1header")
    var screenheader2 =document.getElementById("screen2header")
    var screenheader3 =document.getElementById("screen3header")
    var screenheader4 =document.getElementById("screen4header")


    const screen1 = document.getElementById('screen1-buttons');
    const screen2 = document.getElementById('screen2-buttons');
    const screen3 = document.getElementById('screen3-buttons');
    const screen4 = document.getElementById('screen4-buttons');

    screen1.innerHTML =""
    screen2.innerHTML =""
    screen3.innerHTML =""
    screen4.innerHTML =""

    screenheader1.style.display='none';
    screenheader2.style.display='none';
    screenheader3.style.display='none';
    screenheader4.style.display='none';


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const title = urlParams.get('title')
    const URL = `http://localhost:8080/getShowDetailsByTitleAndShowDate/?title=${title}&showDate=${Object.value}`;
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data)
    var showdetailsdict ={}
    if(data.statusCode){
        if(Object.value==todaysdate){

        }
        else {
            alert(data.statusMessage)
            


        }




    }
    else if (data.rstatus.statusCode==200){

        for (const showdata of data.showDetailsList) {
            var screenId = showdata.showId.screen.screenID
            if(screenId in showdetailsdict) {
                showdetailsdict[screenId].push(showdata.showId.showTime)
            }
            else {
                showdetailsdict[screenId]=[]
                showdetailsdict[screenId].push(showdata.showId.showTime)
            }
        }
        console.log(showdetailsdict)
        var one=showdetailsdict[1]
        var two=showdetailsdict[2]
        var three=showdetailsdict[3]
        var four=showdetailsdict[4]
        console.log(one)
        if(one) {
            screenheader1.style.display='block'
            one.forEach(element => {
                screen1.innerHTML += `
                <button type="button" class="button-class" id="button1" onclick="window.location.href='http://localhost/Integration/Project/seatselection.html?title=${title}&showtime=${element}&showdate=${Object.value}&screenid=1';">${element}</button>
                `;
                
            });
    
        }
        else {
            screen1.innerHTML =""
            screenheader1.style.display='none';
        }
    
        if(two) {
            screenheader2.style.display='block'
            two.forEach(element => {
                screen2.innerHTML += `
                <button type="button" class="button-class" id="button1" onclick="window.location.href='http://localhost/Integration/Project/seatselection.html?title=${title}&showtime=${element}&showdate=${Object.value}&screenid=2';">${element}</button>
                `;
                
            });
    
        }
        else {
            screen2.innerHTML =""
            screenheader2.style.display='none';
        }
    
    
        if(three) {
            screenheader3.style.display='block'
            three.forEach(element => {
                screen3.innerHTML += `
                <button type="button" class="button-class" id="button1" onclick="window.location.href='http://localhost/Integration/Project/seatselection.html?title=${title}&showtime=${element}&showdate=${Object.value}&screenid=3';">${element}</button>
                `;
                
            });
    
        }
        else {
            screen3.innerHTML =""
            screenheader3.style.display='none';
        }
    
        if(four) {
            screenheader4.style.display='block'
            four.forEach(element => {
                screen4.innerHTML += `
                <button type="button" class="button-class" id="button1" onclick="window.location.href='http://localhost/Integration/Project/seatselection.html?title=${title}&showtime=${element}&Showdate=${Object.value}&screenid=4';">${element}</button>
                `;
                
            });
    
        }
        else {
            screen4.innerHTML =""
            screenheader4.style.display='none';
        }
        
    }
    




    
}






function displayMovieList(details){
    // for (const element of details.showdetails) {
    //     if(element.screen.screenID == 101) {
    //         screen101= element.showTime;
    //         console.log(screen101)
    //     }
    //     else if(element.screen.screenID == 102) {
    //         screen102= element.showTime;
    //         console.log(screen102)
    //     }
    //     else if(element.screen.screenID == 103) {
    //         screen103= element.showTime;
    //         console.log(screen103)
    //     }
    //     else if(element.screen.screenID == 104) {
    //         screen104= element.showTime;
    //         console.log(screen104)
    //     }
    // }
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
        <a href="#showtime">
        <input type="button" value="Book Movie">
        </a>

    </div>
</div>
<div class="info-class container">
    
    <div class="col-xs-12">
        <p class="text-content">
        ${details.synopsis}
    </div>
    <dl class="info-tbl">
    <div class="tbl-row movie-info">
    <dt class="tbl-cell-ttl ttl">
        Movie title:
    </dt> 
    <dd>${details.title}</dd>
    </div>
    <div class="tbl-row movie-info">
    <dt class="tbl-cell-ttl ttl"> Movie genre: </dt> 
    <dd> ${details.category} </dd>
    </div>
    <div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Cast:
    </dt> <dd>
    ${details.movieCast}
    </dd></div><div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Director:
    </dt> <dd>
    ${details.director}
    </dd></div><div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Producer:
    </dt> <dd>
    ${details.producer}
    </dd></div>
    <div class="tbl-row movie-info">
    <dt class="tbl-cell-ttl ttl"> Movie Review: </dt> 
    <dd> ${details.review} </dd>
    </div>
    
    <div class="tbl-row movie-info"><dt class="tbl-cell-ttl ttl">
        Movie Rating:
    </dt> <dd>
    ${details.rating}
    </dd></div>

    </div></div>
</div>


<div>


        <div class="select-date-time-container container">
            <div class="heading" id="showtime">
                <h2 class="heading-title">Select date and time for movie</h2>
            </div>
        </div>
        <div class="date-container container">
            <h2 class="heading-title">Select date</h2>
            <input type="date" value=${todaysdate} onChange="getshowdetails(this)" id="showdate" />
        </div>
        <div class="time-container" id="time-container">

            <div class="date-time-container container">
                <h2 class="heading-title theatre-container" id="screen1header">
                    UGA Theatre - Screen 1
                </h2>
                <div class="screen1-buttons" id="screen1-buttons">

                </div>
            </div>
            <div class="date-time-container container">
                <h2 class="heading-title theatre-container" id="screen2header">
                    UGA Theatre - Screen 2
                </h2>
                <div class="screen2-buttons" id="screen2-buttons" >

                </div>
            </div>
            <div class="date-time-container container">
                <h2 class="heading-title theatre-container" id="screen3header">
                    UGA Theatre - Screen 3
                </h2>
                <div class="screen3-buttons" id="screen3-buttons" >

                </div>
            </div>
            <div class="date-time-container container">
                <h2 class="heading-title theatre-container" id="screen4header">
                    UGA Theatre - Screen 4
                </h2>
                <div class="screen4-buttons" id="screen4-buttons" >

                </div>
            </div>
        </div>
    </div>





    `;

    document.getElementById("showdate").setAttribute('min', todaysdate);
}
