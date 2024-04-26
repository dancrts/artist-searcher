# Pequeña app de datos musicales

Esta pequeña app no necesita nada especial para correrse, solo abrir el archivo **results.html** y listo.

El compilado de typescript si necesita alguna aplicacion o alguna instalacion de Npm. Personalmente. Los archivos ya vienen compilados.

Realice la prueba con Typescript solamente, debido a que consideré que era mas facil de realizar con typescript puro que con ReactJs. Utilicé TS en vez de JS puro debido a la facilidad para controlar el tipado.

## Explicacion del codigo y pasos a realizar en la prueba (revisar el codigo por favor)

1. El tab "Grandes artistas" corresponde al paso 1, que consistia en filtrar los artistas del arreglo `musicData`, el cual existe como una propiedad dentro de la clase `AlbumService`, dentro del archivo *album.service.ts*. Dentro de este mismo archivo se realiza el filtro de aquellos albumes que hayan tenido mas de 1millon de ventas mediante `getAlbumsWithMostSales()`.
2. El obtener el numero de copias vendidas se y guardarlos en la variable `totalAlbumSales` se realiza mediante la funcion `getTotalSales()` del archivo *album.service.ts*.
3. El obtener un arreglo llamado `longNames` que obtenga los datos filtrados para aquellos albumes cuyo artista tenga un nombre de mas de 8 caracteres se realiza mediante la funcion `getArtistsWithLongNames()`.
4. Las funciones para buscar, borrar y agregar a `musicData` se encuentran dentro del archivo *album.service.ts*, y son `deleteArtists(), addAlbum() y searchArtist()`.
5. El borrado de los artistas Adele, Justin Bieber y Prince, junto con el añadido del album de Radiohead se realizó dentro del archivo *main.ts*.
Debido a que las instrucciones no aclaraban si estos datos debian de ser agregados por el usuario, como un comportamiento, decidí dejarlo como una simple funcion estatica.
6. El codigo del boton y campo de busqueda se encuentra dentro del archivo *main.ts*
