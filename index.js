// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([guardian, genre]) => {
        const playlistSongs = songs.filter(song => song.genre === genre);
        const playlistElement = document.createElement("div");
        playlistElement.classList.add("playlist");
        playlistElement.innerHTML = `<h2>${guardian}'s Playlist</h2>`;
        playlistSongs.forEach(song => {
            const songElement = document.createElement("div");
            songElement.classList.add("song");
            songElement.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            playlistElement.appendChild(songElement);
        });
        return playlistElement;
    });

    // Append playlists to the playlists container
    const playlistsContainer = document.getElementById("playlists");
    playlists.forEach(playlist => playlistsContainer.appendChild(playlist));
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
