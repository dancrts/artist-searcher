import { Album } from "./album.model";
import { TablePopulator } from "./table-populator";

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

//get data containers
const artistsTable = document.getElementById("all-artist-table");
const longNamesTable = document.getElementById("long-names-table");
const bigArtistsTable = document.getElementById("big-artists-table");
const allSales = document.getElementById("all-sales");

//get buttons that trigger those actions
const artistsPane = document.getElementById("artists-tab");
const longNamesPane = document.getElementById("long-names-tab")
const bigArtistsPane = document.getElementById("big-artists-tab")



let allAlbums = musicData.slice();
let longNames: Album[], bigArtistsAlbums: Album[];

const tablePopulator = new TablePopulator();

let totalAlbumSales = tablePopulator.getTotalSales(allAlbums)

function loadFirstTime() {
    tablePopulator.addArtistsToTable(artistsTable!,allAlbums)
    allSales!.innerHTML = totalAlbumSales.toString() 
}

artistsPane!.addEventListener("click", () => {
    loadFirstTime();
})

bigArtistsPane!.addEventListener("click", () => {
    bigArtistsAlbums = allAlbums.filter(album => album.sales >= 1000000)
    tablePopulator.addArtistsToTable(bigArtistsTable!, bigArtistsAlbums, "bigArtist");
})

longNamesPane!.addEventListener("click", () => {
    longNames = allAlbums.filter(album => album.artist.length >= 8)
    tablePopulator.addArtistsToTable(longNamesTable!, longNames, "longName")
})

loadFirstTime();


