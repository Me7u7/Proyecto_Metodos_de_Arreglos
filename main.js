//Arreglos
//Categorías: postres, combos, bebidas
const productos = [
    {nombre: "Donas", precio: 12, categoria: "postres"},
    {nombre: "Gelatina", precio: 15, categoria: "postres"},
    {nombre: "Galletas", precio: 20, categoria: "postres"},
    {nombre: "Pastel Familiar", precio: 350, categoria: "postres"},
    {nombre: "Combo: Pastel individual + malteada", precio: 150, categoria: "combos"},
    {nombre: "Combo: Dona + Café", precio: 37, categoria: "combos"},
    {nombre: "Café", precio: 25, categoria: "bebidas"},
    {nombre: "Malteada", precio: 28, categoria: "bebidas"},
];
//filter() Filtrar productos menores a $100 MXN 
const menos = productos.filter( producto => producto.precio <100);
console.log("Productos por menos de $100 MXN");
menos.forEach(producto => console.log(producto.nombre +" $"+ producto.precio));

//sort() Ordenar alfabéticamente
//localeCompare() comparación alfabética
/* OTRA FORMA DE HACERLO 
const alf = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(productos);

const nombres = productos.map(producto => producto.nombre);
console.log("Productos disponibles");
console.log(nombres);
*/

// UNIENDO SORT Y MAP 
const nombresOrdenados = productos.sort((a,b) => a.nombre.localeCompare(b.nombre)).map(producto => producto.nombre);
console.log("Productos Disponibles: ");
console.log(nombresOrdenados);

//some() Revisa si un elemento del array se cumple :)
const disponible = productos.some(producto => producto.categoria === "postres");
console.log("¿Hay postres en el inventario?");
console.log(disponible)

//every Verifica que todos los elementos cumplan con la condición
const precios = productos.every(producto => producto.precio > 0);
console.log("Todos los productos tienen precio: ");
console.log(precios);

