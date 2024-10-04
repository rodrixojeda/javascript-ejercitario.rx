// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
function despedir() {
    console.log('Adios Pedro')
}

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    function multiplicarPorDos(numero) {
            return numero * 2
    }
    { 
    let resultado = multiplicarPorDos(7)    
    console.log(resultado)
    }

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    function esMayorDeEdad(numero) {
        if( numero > 18 ) 
            return true
        else (numero < 18)
        return false
}
{
    let edad= esMayorDeEdad(23)
    console.log(edad) 
}

// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
function multiplicar(a, b) {
    return a * b;
}
{ 
let resultado = multiplicar(3, 4);
console.log(resultado); // Imprimirá 12
} 

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    function saludarPersonalizado(nombre, apellido) {
        return "hola, rodrigo ojeda"
    }
    {
        console.log(saludarPersonalizado("rodrigo", "ojeda"))
    }

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    function calcularPotencia(base, exponente) {
        return Math.pow (base, exponente)
    }
    {
        let resultado=calcularPotencia(2, 3)
        console.log(resultado)
    }

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    function restar(a, b){
        return a - b
    }
    {
        let resultado= restar(10, 5)
        console.log(resultado)
    }

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    function dividir(a, b){
        return a / b
    }
    { 
    let resultado= dividir(25, 5)
    console.log(resultado)
    }
// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `funcionMultiplicar`.
    let funcionMultiplicar= function (a, b) { 
    
        return a * b 
    }
    {
        let resultado= funcionMultiplicar(3, 4)
        console.log(resultado);
    }

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    let saludar= function (nombre) {
        return "hola," + nombre;
    }
    {
        let mensaje= saludar ("rodrigo");
        console.log(mensaje);
    }

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
let esPar= function (numero) {
    if(numero %2 === 0 )
        return true
    else return false 
}
{
    let resultado = esPar(7);
console.log(resultado); 
}


// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    let multiplicarFlecha=(a, b) => {
        return a * b
    }
    { 
        let resultado=multiplicarFlecha(3, 3);
        console.log(resultado);
        
    }

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    let saludarFlecha= nombre => {
        return "hola," + nombre
    }
    {
        let saludo= saludarFlecha("rodrigo")
            console.log(saludo);
        
    }

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = radio => {
    return A = 3.14 * radio ** 2
}
{
    let resultado= calcularArea(45)
    console.log(resultado)
}

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    if (n === 1) {
        return 1
    } else return n + suma (n - 1)
}
{
    let resultado = suma(5);
console.log(resultado); 
}

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    if (n === 0) {
    return 0;
    } else if (n === 1) {
    return 1;
    } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


console.log(fibonacci(6));

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
      return n * factorial(n - 1); 
    }
}


console.log(factorial(5)); 

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1; 
} else {
        return base * potencia(base, exponente - 1);  }
    }
{ 
    console.log(potencia(2, 3)); // Imprime 8
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    funcionMultiplicar,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};