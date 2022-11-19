const promocodelist = document.getElementById('promocodes');

function deletepromocode(){
    const promocodelists = promocodelist.querySelectorAll('.promocodecard');
    promocodelists.forEach(code => {
        console.log(code)
        code.addEventListener('click', async () => {
            console.log(code.promotionId);
            // promocodelist.classList.add('hide-search-list');
            // movieSearchBox.value = "";
            // const result = await fetch(`http://localhost:8080/getPromotions/${promotionId}`);
            // const movieDetails = await result.json();
            // // console.log(movieDetails);
            // displayMovieDetails(movieDetails);
        });
    });
}