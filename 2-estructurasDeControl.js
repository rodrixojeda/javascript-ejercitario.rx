// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("el numero es par");
    } else {
        console.log("el numero es impar")
    }
}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    let edad=numero
    if (edad < 18) {
        console.log("menor de edad");
    } else if (edad >= 18 && edad <= 65){
        console.log("adulto");
    } else {
        console.log("adulto mayor");
    }
    
}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    let cuentaAtras = 10

while (cuentaAtras > 0) {
console.log(cuentaAtras)
cuentaAtras = cuentaAtras - 1
}
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador=0;
    do {
        console.log("estoy aprendiendo javascript")
        contador++
    } while (contador < 5)


// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    for(numero= 1 < 100;numero <= 10;numero %2 === 0){
        console.log(numero)
    }
}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    let numero= 10
    while(numero < 10) {
        console.log(numero)
        numero = numero + 1
        if(numero=6)
            break
    }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let i= 1; i <= 10; i++){ 
        if(i === 5){
            continue;
        }
        console.log(i);
    }
}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    switch(dia){
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miercoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sabado"); break;
        case 7: console.log("Domingo"); break;
        case 8: console.log("Dia invalido"); break;
    }
}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch(letra.tolowerCase()){
        case 'a':
            case 'e':
                case 'i':
                    case 'o':
                        case 'u':
                            console.log("Es vocal");
                            break;
                            default:
                                console.log("No es vocal");
        }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    function evaluarNumeros(a, b, c){ 
    if (a > 0 && b > 0 && c > 0) {
        console.log("Todos son positivos");
    } else if (a < 0 && b < 0 && c < 0) {
        console.log("Todos son negativos");
    } else if (a < 0 || b < 0 || c < 0) {
        console.log("Al menos uno es negativo");
    } else {
        console.log("Hay una mezcla de positivos y negativos");
    }
}

}
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
}; 
