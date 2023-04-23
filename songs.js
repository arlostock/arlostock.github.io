// Replace the placeholder below with Arlo's Spotify Artist ID.
const artistID = "INSERT_SPOTIFY_ARTIST_ID_HERE";
const accessToken = "INSERT_SPOTIFY_ACCESS_TOKEN_HERE";

$(document).ready(function () {
    fetch(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=US`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const songList = $("#song-list");
        data.tracks.forEach(track => {
            songList.append(`<li><a href="${track.external_urls.spotify}">${track.name}</a></li>`);
        });
    })
    .catch(error => {
        console.error("Error fetching Arlo's top tracks:", error);
    });
});
