array1 = [-4, -1, 0, 3, 10]
array2 = [-7, -3, 2, 3, 11]


var sortedSquares = function (nums) {
    const square = nums.map(n => n * n);
    square.sort((a,b) => a - b)
    return square
}



 /***************************************************

 var sortedSquares = function (nums) {
    let newArray = []
    for (let i = 0; i < nums.length; i++) {
        newArray.push(nums[i] * nums[i])
        newArray.sort((a, b) => (a - b))

   
    If a - b is negative, a comes before b.
    If a - b is zero, a and b are considered equal.
    If a - b is positive, a comes after b. 
  

    }
    return newArray
}

  ***************************************************/
console.log(sortedSquares(array1))
console.log(sortedSquares(array2))

// FUNCIONA, PERO NO PARA LEETCODE.

/*
1. forEach
forEach ejecuta una función dada una vez para cada elemento del array. No devuelve un nuevo array, simplemente ejecuta la función para efectos secundarios.
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => {
  console.log(numero * numero);
});
// Salida: 
// 1
// 4
// 9
// 16
// 25

sintaxis basica:
array.forEach((elemento, índice, array) => {
  // Lógica a aplicar para cada elemento
});
elemento: El elemento actual del array.
índice: El índice del elemento actual (opcional).
array: El array sobre el que se llamó forEach (opcional).

2. filter
filter crea un nuevo array con todos los elementos que pasan la prueba implementada por la función dada.
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // Salida: [2, 4]

const nuevoArray = array.filter((elemento, índice, array) => {
  // Retorna true para elementos que se incluirán en el nuevo array
  return condición;
});
elemento: El elemento actual del array.
índice: El índice del elemento actual (opcional).
array: El array sobre el que se llamó filter (opcional).

3. reduce
reduce aplica una función a un acumulador y cada valor del array (de izquierda a derecha) para reducirlo a un único valor.
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // Salida: 15

array.reduce((acumulador, valorActual, índice, array) => {
  // lógica para reducir
  return nuevoAcumulador;
}, valorInicial);

const resultado = array.reduce((acumulador, elemento, índice, array) => {
  // Lógica para acumular el resultado
  return nuevoAcumulador;
}, valorInicial);
acumulador: El valor acumulado de la iteración anterior.
elemento: El elemento actual del array.
índice: El índice del elemento actual (opcional).
array: El array sobre el que se llamó reduce (opcional).
valorInicial: Valor inicial para el acumulador (opcional).

4. some
some verifica si al menos un elemento en el array cumple con la función de prueba proporcionada. Devuelve un booleano.
const numeros = [1, 2, 3, 4, 5];
const tieneNumerosPares = numeros.some(numero => numero % 2 === 0);
console.log(tieneNumerosPares); // Salida: true

const resultado = array.some((elemento, índice, array) => {
  // Retorna true si al menos un elemento cumple con la condición
  return condición;
});
elemento: El elemento actual del array.
índice: El índice del elemento actual (opcional).
array: El array sobre el que se llamó some (opcional).

5. every
every verifica si todos los elementos en el array cumplen con la función de prueba proporcionada. Devuelve un booleano.
const numeros = [1, 2, 3, 4, 5];
const todosSonPositivos = numeros.every(numero => numero > 0);
console.log(todosSonPositivos); // Salida: true

const resultado = array.every((elemento, índice, array) => {
  // Retorna true si todos los elementos cumplen con la condición
  return condición;
});
elemento: El elemento actual del array.
índice: El índice del elemento actual (opcional).
array: El array sobre el que se llamó every (opcional).

6. find
find devuelve el primer elemento del array que cumple con la función de prueba proporcionada.
const numeros = [1, 2, 3, 4, 5];
const primerNumeroPar = numeros.find(numero => numero % 2 === 0);
console.log(primerNumeroPar); // Salida: 2

const resultado = array.find((elemento, índice, array) => {
  // Retorna el primer elemento que cumple con la condición
  return condición;
});
elemento: El elemento actual del array.
índice: El índice del elemento actual (opcional).
array: El array sobre el que se llamó find (opcional).

7. findIndex
findIndex devuelve el índice del primer elemento del array que cumple con la función de prueba proporcionada. Si ningún elemento cumple con la condición, devuelve -1.
const numeros = [1, 2, 3, 4, 5];
const indicePrimerNumeroPar = numeros.findIndex(numero => numero % 2 === 0);
console.log(indicePrimerNumeroPar); // Salida: 1

const índice = array.findIndex((elemento, índice, array) => {
  // Retorna el índice del primer elemento que cumple con la condición
  return condición;
});
elemento: El elemento actual del array.
índice: El índice del elemento actual (opcional).
array: El array sobre el que se llamó findIndex (opcional).

8. sort
sort ordena los elementos de un array en su lugar y devuelve el array. Puedes proporcionar una función de comparación para definir el orden.
const numeros = [5, 3, 8, 1, 2];
const numerosOrdenados = numeros.sort((a, b) => a - b);
console.log(numerosOrdenados); // Salida: [1, 2, 3, 5, 8]

const nuevoArray = array.sort((a, b) => {
  // Retorna un valor negativo, cero, o positivo para determinar el orden
  return a - b; // Orden ascendente
});
a: Primer elemento para comparar.
b: Segundo elemento para comparar.

9. map
map crea un nuevo array con los resultados de llamar a una función para cada elemento del array original.
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados); // Salida: [1, 4, 9, 16, 25]

const nuevoArray = array.map((elemento, índice, array) => {
  // Retorna el nuevo valor para el elemento actual
  return nuevoValor;
});
elemento: El elemento actual del array.
índice: El índice del elemento actual (opcional).
array: El array sobre el que se llamó map (opcional).



*/