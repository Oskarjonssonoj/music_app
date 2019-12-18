fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=avicii", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "aa5ae56d05mshfbaaaf5b970144dp1ca8b5jsn591b55d65cae"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});