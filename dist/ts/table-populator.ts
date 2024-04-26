import { Album } from "./album.model"

export class TablePopulator {
    rowTemplate(album: Album, albumType: string): string {
        if (albumType === "bigArtist") {
            return `<tr><td>${album.name}</td><td>${album.artist} es un gran artista!</td><td>${album.sales}</td></tr>`
        }
        else if (albumType === "longName") {
            return `<tr><td>${album.name}</td><td>${album.artist} tiene un nombre muy grande</td><td>${album.sales}</td></tr>`
        }
        else {
            return `<tr><td>${album.name}</td><td>${album.artist}</td><td>${album.sales}</td></tr>`
        }
    }

    addArtistsToTable(tableElement: HTMLElement, albums: Album[], artistType: string = ""){
        tableElement.innerHTML = ""
        tableElement.innerHTML += this.getAlbums(albums, artistType);
    }
    
    getAlbums(albums: Album[], albumType: string): string {
        let tableRows = "";
        albums.forEach(album => tableRows += this.rowTemplate(album, albumType))
        return tableRows;
    }
    
    getTotalSales(albums: Album[]) {
        let totalAlbumSales = 0;
        albums.forEach(album => totalAlbumSales += album.sales)
        return totalAlbumSales;
    }
}