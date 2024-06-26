import { Album } from "./album.model";

export class AlbumService {

    private musicData: Album[] = [
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

    musicAlbums: Album[];

    constructor() {
        this.musicAlbums = this.musicData.slice();
    }

    deleteArtist(name: string) {
        let albumsWithoutArtist = this.musicAlbums.filter(album => album.artist !== name)
        this.musicAlbums = albumsWithoutArtist
    }

    addAlbum(album: Album) {
        this.musicAlbums.push(album)
    }

    searchArtist(name: string) {
        let albumsFromArtist = this.musicAlbums.filter(album => album.artist.toLowerCase().includes(name.toLowerCase()))
        return albumsFromArtist;
    }

    getAlbumsWithMostSales() {
        return this.musicAlbums.filter(album => album.sales >= 1000000)
    }

    getArtistsWithLongNames() {
        return this.musicAlbums.filter(album => album.artist.length >= 8)
    }

    getTotalSales(albums: Album[]) {
        let totalAlbumSales = 0;
        albums.forEach(album => totalAlbumSales += album.sales)
        return totalAlbumSales;
    }
}