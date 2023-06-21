/* 1 - ordena los libros por año de publicación de forma ascendente.
filtra los libros que tienen un rating mayor o igual a 4.5. crea un nuevo arreglo con solo los títulos de los libros filtrados.
 */

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, rating: 4.2 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, rating: 4.5 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, rating: 4.25 },
  { title: '1984', author: 'George Orwell', year: 1949, rating: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, rating: 4.3 }
];

const booksPorAñoAscendente = books.sort((a,b) => {
	let bookA = a.year;
	let bookB = b.year;
	if (bookA < bookB) {
		return -1;
	} else if (bookA > bookB) {
		return 1;
	} else {
		return 0;
	}
});
console.log(booksPorAñoAscendente);