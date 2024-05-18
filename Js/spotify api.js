function searchSpotify() {
    const clientId = '42e1ccefcf784422a9528d2465c46957';
    const clientSecret = '0c691e2e59864aa2afb924e7ee341fdb';

    // Function to get a new token
    function getToken() {
        const url = 'https://accounts.spotify.com/api/token';
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret));

        const body = new URLSearchParams();
        body.append('grant_type', 'client_credentials');

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: body,
            redirect: 'follow'
        };

        return fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => data.access_token)
            .catch(error => console.error('Error fetching token:', error));
    }

    // Function to search Spotify
    function searchSpotifyWithToken(token) {
        const searchTerm = document.getElementById("searchTerm").value;
        const url = `https://api.spotify.com/v1/search?query=${searchTerm}&type=track&include_external=audio&locale=en-US%2Cen%3Bq%3D0.5&limit=1`;

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                const searchResults = document.getElementById("searchResults");
                const track = data.tracks.items[0];
                const trackName = track.name;
                const artistName = track.artists[0].name;
                const albumName = track.album.name;
                const previewUrl = track.preview_url;
                const imageUrl = track.album.images[0].url;

                searchResults.innerHTML = `
                    <h2 class="mb-3">Search Results</h2>
                    <div class="card">
                        <img src="${imageUrl}" class="card-img-top album-image" alt="${albumName}">
                        <div class="card-body">
                            <h5 class="card-title">${trackName}</h5>
                            <p class="card-text">Artist: ${artistName}</p>
                            <p class="card-text">Album: ${albumName}</p>
                            <audio controls class="mb-3">
                                <source src="${previewUrl}" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                `;
            })
            .catch(error => console.error('Error fetching search results:', error));
    }

    // Fetch a new token and then search Spotify
    getToken().then(token => {
        searchSpotifyWithToken(token);
    });
}
