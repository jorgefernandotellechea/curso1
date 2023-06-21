/* ordena los productos por precio de forma descendente.
filtra los productos que están en la categoría "Electronics".
crea un nuevo arreglo que contenga objetos con el nombre del producto y el valor total del stock
(precio por cantidad en stock) para cada producto filtrado.
Imprime en la consola el nombre de cada producto y su valor total del stock. */
var products = [
    { id: 1, name: 'iPhone 12', category: 'Electronics', price: 999.99, stock: 10 },
    { id: 2, name: 'AirPods Pro', category: 'Electronics', price: 249.99, stock: 5 },
    { id: 3, name: 'Samsung Galaxy S21', category: 'Electronics', price: 899.99, stock: 8 },
    { id: 4, name: 'Nike Air Max', category: 'Shoes', price: 129.99, stock: 15 },
    { id: 5, name: 'Sony PlayStation 5', category: 'Gaming', price: 499.99, stock: 3 },
];
var precioDescendente = products.sort(function (a, b) {
    var item1 = a.price;
    var item2 = b.price;
    if (item1 < item2) {
        return 1;
    }
    else if (item1 > item2) {
        return -1;
    }
    else {
        return 0;
    }
});
/* console.log(precioDescendente); */
var electronics = products.filter(function (products) {
    return (products.category == 'Electronics');
});
/* console.log(electronics); */
var precioTotalStock = electronics.map(function (item) {
    return { Item: "".concat(item.name), ValorStock: "".concat(item.price * item.stock) };
});
console.log(precioTotalStock);
