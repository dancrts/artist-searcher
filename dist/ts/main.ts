import { Album } from "./album.model";
import { AlbumService } from "./albums.service";
import { TablePopulator } from "./table.service";

//get data containers
const artistsTable = document.getElementById("all-artist-table");
const longNamesTable = document.getElementById("long-names-table");
const bigArtistsTable = document.getElementById("big-artists-table");
const allSales = document.getElementById("all-sales");

//get buttons that trigger those actions
const artistsPane = document.getElementById("artists-tab");
const longNamesPane = document.getElementById("long-names-tab")
const bigArtistsPane = document.getElementById("big-artists-tab")



let allAlbums: Album[],  longNames: Album[], bigArtists: Album[];
let totalAlbumSales : number;

const albumService = new AlbumService();
const tablePopulator = new TablePopulator();

let okComputer: Album = { name: "Ok Computer", artist: "Radiohead", sales: 5000000 }

albumService.deleteArtist("Adele")
albumService.deleteArtist("Prince")
albumService.deleteArtist("Justin Bieber")

albumService.addAlbum(okComputer)

function loadFirstTime() {
    allAlbums = albumService.musicAlbums
    totalAlbumSales = tablePopulator.getTotalSales(allAlbums)
    tablePopulator.addArtistsToTable(artistsTable!,allAlbums)
    allSales!.innerHTML = totalAlbumSales.toString() 
}

artistsPane!.addEventListener("click", () => {
    loadFirstTime();
})

bigArtistsPane!.addEventListener("click", () => {
    bigArtists = albumService.getAlbumsWithMostSales()
    tablePopulator.addArtistsToTable(bigArtistsTable!, bigArtists, "bigArtist");
})

longNamesPane!.addEventListener("click", () => {
    longNames = albumService.getArtistsWithLongNames()
    tablePopulator.addArtistsToTable(longNamesTable!, longNames, "longName")
})

loadFirstTime();


