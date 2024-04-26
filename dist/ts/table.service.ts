import { Album } from "./album.model"

export class TablePopulator {
    rowTemplate(album: Album, albumType: string): string {
        if (albumType === "bigArtist") {
            return `<div>${album.artist} es un gran artista!</div>`
        }
        else if (albumType === "longName") {
            return `<div>${album.artist} tiene un nombre muy grande</div>`
        } 
        else if (albumType === "searchedByArtist") {
            return `<div>El album ${album.name} tiene de ${album.artist} ha vendido ${album.sales} copias</div>`
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