/* ordena los elementos de la lista de compras por categoría (category) de forma ascendente.
filtra los elementos de la lista de compras que tienen un precio mayor a $2.0.
crea un nuevo arreglo que contenga objetos con el nombre del artículo y su precio después de aplicar un aumento del 10%. */
var shoppingList = [
    { item: 'Apples', category: 'Fruit', price: 2.5 },
    { item: 'Bread', category: 'Bakery', price: 3.2 },
    { item: 'Milk', category: 'Dairy', price: 1.8 },
    { item: 'Eggs', category: 'Dairy', price: 2.1 },
    { item: 'Tomatoes', category: 'Vegetable', price: 2.9 },
];
var categoryAscendente = shoppingList.sort(function (a, b) {
    var itemA = a.category;
    var itemB = b.category;
    if (itemA < itemB) {
        return -1;
    }
    else if (itemA > itemB) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log(categoryAscendente);
var mayor$2 = categoryAscendente.filter(function (item) {
    return (item.price > 2);
});
console.log(mayor$2);
var listaConAumento = categoryAscendente.map(function (item) {
    return { item: "".concat(item), price: "".concat(item.price + (item.price * 10 / 100)) };
});
console.log(listaConAumento);
