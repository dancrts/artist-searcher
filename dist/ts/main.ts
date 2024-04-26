import { Album } from "./album.model";

const musicData: Album[] = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const artistsTable = document.getElementById("all-artist-table");
const longNamesTable = document.getElementById("long-names-table");
const bigArtistsTable = document.getElementById("big-artists-table");

const artistsPane = document.getElementById("artists-tab");
const longNamesPane = document.getElementById("long-names-tab")
const bigArtistsPane = document.getElementById("big-artists-tab")

const allSales = document.getElementById("all-sales");

let allAlbums = musicData.slice();

//add get separated artists per table
function addAllArtists() {
    let tableRows = "";
    allAlbums.forEach(album => tableRows += `<tr><td>${album.name}</td><td>${album.artist}</td><td>${album.sales}</td></tr>`)
    return tableRows;
}


function getTotalSales() {
    let totalSales = 0;
    allAlbums.forEach(album => totalSales += album.sales)
    return totalSales;
}

function loadArtistTable() {
    artistsTable!.innerHTML = "";
    artistsTable!.innerHTML += addAllArtists()
    allSales!.innerText = "";
    allSales!.innerHTML = getTotalSales().toString() 
}



loadArtistTable();


