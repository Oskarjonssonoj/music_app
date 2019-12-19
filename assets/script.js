
// make a reference to our form
const formSearch = document.querySelector('#formSearch');
// make a reference to our searchbar
const searchFieldText = document.querySelector('#searchFieldText'); 
// make a reference to our artist section
const userCardsEl = document.querySelector('#user-cards');
// make a reference to our song section
const songListEl = document.querySelector('#songs_results');
// clear button
const clearMusic = document.querySelector("#clear");

let clearResult = 0;

// when submitting our searched result 
formSearch.addEventListener('submit', e => {

    if(clearResult !== 0) {
        userCardsEl.innerHTML = "";
    }

    e.preventDefault();

 
const urlSearch = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchFieldText.value}`;

 const getUsers = async () => {
	const response = await fetch(urlSearch, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "aa5ae56d05mshfbaaaf5b970144dp1ca8b5jsn591b55d65cae"
	}
});
		if (!response.ok) {
			throw new Error('Response was not ok.');
		}
        const searchResult = await response.json();

        //loopa över alla resultat
		searchResult.data.forEach(data => {
			const artistHTML = `
				<div class="col-sm-4 col-md-4 col-lg-3 mb-4">
					<div class="card bg-dark text-light">
						<img src="${data.album.cover_medium}">
						<div class="card-body">
                            <h5 class="card-title">${data.artist.name}</h5>
                            <h5 class="card-title">${data.title}</h5>
                            <h5 class="card-title">${data.album.title}</h5>
                            <a href="info.html" class="btn btn-primary">More info</a>
                        </div>
					</div>
				</div>
            `;
            
			userCardsEl.innerHTML += artistHTML;
        });

        clearResult+=1;
};
getUsers()  
    .catch(err => {
        console.error("Something went very wrong! Error was:", err);
    });
});

clearMusic.addEventListener("click", () => {
    userCardsEl.innerHTML = "";
    searchFieldText.value = "";
});