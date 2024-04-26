import { Album } from "./album.model";
import { AlbumService } from "./albums.service";
import { TablePopulator } from "./table.service";

//get data containers
const artistsTable = document.getElementById("all-artist-table");
const longNamesTable = document.getElementById("long-names-container");
const bigArtistsTable = document.getElementById("big-artists-container");
const totalSalesContainer = document.getElementById("total-sales-container");
const searchedArtistsContainer = document.getElementById("searched-artists-container");

//get buttons that trigger those actions
const artistsPane = document.getElementById("artists-tab");
const longNamesPane = document.getElementById("long-names-tab");
const bigArtistsPane = document.getElementById("big-artists-tab");
const searchButton = document.getElementById("button-search");

const artistNameInput = document.getElementById("artist-input") as HTMLInputElement;

let allAlbums: Album[],  longNames: Album[], bigArtists: Album[];
let totalAlbumSales : number;

const albumService = new AlbumService();
const tablePopulator = new TablePopulator();

let okComputer: Album = { name: "Ok Computer", artist: "Radiohead", sales: 5000000 };

albumService.deleteArtist("Adele");
albumService.deleteArtist("Prince");
albumService.deleteArtist("Justin Bieber");

albumService.addAlbum(okComputer);

function loadFirstTime() {
    allAlbums = albumService.musicAlbums;
    totalAlbumSales = albumService.getTotalSales(allAlbums);
    tablePopulator.addArtistsToTable(artistsTable!,allAlbums);
    totalSalesContainer!.innerHTML = totalAlbumSales.toString() ;
}

artistsPane!.addEventListener("click", () => {
    loadFirstTime();
})

bigArtistsPane!.addEventListener("click", () => {
    bigArtists = albumService.getAlbumsWithMostSales();
    tablePopulator.addArtistsToTable(bigArtistsTable!, bigArtists, "bigArtist");
})

longNamesPane!.addEventListener("click", () => {
    longNames = albumService.getArtistsWithLongNames();
    tablePopulator.addArtistsToTable(longNamesTable!, longNames, "longName");
})

searchButton!.addEventListener("click", () => {
    let artistsName = artistNameInput!.value
    if (artistsName !== "") {
        let searchedArtists = albumService.searchArtist(artistsName);
        if (searchedArtists.length == 0) {
            searchedArtistsContainer!.innerHTML = "<span>Lo sentimos, no conocemos ese artista! :C</span>";
        } else {
            tablePopulator.addArtistsToTable(searchedArtistsContainer!, searchedArtists, "searchedByArtist")
        }
    } else {
        searchedArtistsContainer!.innerHTML = "<span>Por favor ingresa un nombre! :C</span>";
    }
})

loadFirstTime();


