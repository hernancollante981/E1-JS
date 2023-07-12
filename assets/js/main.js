// Ejercicio 1

let numero = 4;
function paridad(numero) {
  if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par`);
  } else {
    console.log(`El numero ${numero} es impar`);
  }
}
paridad(numero);

// Ejercicio 2

let num1 = 3;
let num2 = 2;
function esMayor(num1, num2) {
  if (num1 > num2) {
    console.log(`El numero ${num1} es mayor que ${num2}`);
  } else if (num2 > num1) {
    console.log(`El numero ${num2} es mayor que ${num}`);
  } else {
    console.log(`Los numeros son iguales`);
  }
}
esMayor(num1, num2);

// Ejercicio 3

let num = 5;
function multiploDeCinco(num) {
  if (num % 5 === 0) {
    console.log(`El numero ${num} es múltiplo de cinco`);
  } else {
    console.log(`El numero ${num} no es múltiplo de cinco`);
  }
}
multiploDeCinco(num);

// Ejercicio 4
let numeros = 20;
function imprimirNumeros(numeros) {
  for (let i = 0; i <= numeros; i++) {
    console.log(i);
  }
}
imprimirNumeros(numeros);

// Ejercicio 5

let palabra = "Hola soy Hernan";
let numer = 3;
function imprimirPalabra(palabra, numer) {
  for (let i = 0; i < numer; i++) {
    console.log(palabra);
  }
}
imprimirPalabra(palabra, numer);

// Ejercicio 6
let miArray = [
  "Practicando con Javascript",
  29,
  true,
  ["Soy un array dentro de otro array"],
];
function imprimirArray(miArray) {
  for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
  }
}
imprimirArray(miArray);

// Ejercicio 7

let nuevoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ignorarValor(nuevoArray) {
  for (let i = 0; i < nuevoArray.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(nuevoArray[i]);
  }
}
ignorarValor(nuevoArray);

// Ejercicio 8
let otroArray = [1, 2, 3, 4, 5];
let nuevoNumero = 8;
function arrayMultiplicado(otroArray, nuevoNumero) {
  for (let i = 0; i < otroArray.length; i++) {
    console.log(otroArray[i] * nuevoNumero);
  }
}
arrayMultiplicado(otroArray, nuevoNumero);
