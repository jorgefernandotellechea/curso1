/* ordena los elementos de la lista de compras por categoría (category) de forma ascendente.
filtra los elementos de la lista de compras que tienen un precio mayor a $2.0.
crea un nuevo arreglo que contenga objetos con el nombre del artículo y su precio después de aplicar un aumento del 10%. */

const shoppingList = [
  { item: 'Apples', category: 'Fruit', price: 2.5 },
  { item: 'Bread', category: 'Bakery', price: 3.2 },
  { item: 'Milk', category: 'Dairy', price: 1.8 },
  { item: 'Eggs', category: 'Dairy', price: 2.1 },
  { item: 'Tomatoes', category: 'Vegetable', price: 2.9 },
];

const categoryAscendente = shoppingList.sort((a,b) => {
	let itemA = a.category;
	let itemB = b.category;
	if ( itemA < itemB ) {
		return -1;
	} else if ( itemA > itemB ) {
		return 1;
	} else { 
			return 0;
	}
});
console.log(categoryAscendente);

const mayor$2 = categoryAscendente.filter((item) => {
	return ( item.price > 2 );
});
console.log(mayor$2);

const listaConAumento = categoryAscendente.map((item) => {
	return {item: `${item}`, price: `${item.price + (item.price*10/100)}`};
});
console.log(listaConAumento);