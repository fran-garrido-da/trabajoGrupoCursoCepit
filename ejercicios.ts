/**
 * Completar la lógica de los 20 ejercicios siguientes.
 * Todas las function deben de retornar una respuesta acorde a la definición que tienen.
 * Ej. myFN(...): number {...} >> myFN debe de retornar un number.
 * 
 * INTEGRANTES DEL GRUPO:
 * -Ignacio Tomas Erice
 * -Rodrigo Grigera
 * -Francisco Garrido D'Agata
 * -
 * 
 */

// (1) Para tener control de la gente que hay en una disco el gerente quiere saber cuantas personas de diferentes edades han entrado. 
// No se han permitido la entrada a menores de 18 ni mayores de 40. Para la carga de los datos se usa la función aleatorio(Math.floor(Math.random() * (max - min + 1) ) + min)
// Se sabe que la cantidad total de personas dentro del local es de 270
// Se quiere saber: 	
// Cuántas personas son menores de 21 años
// Cuántas personas mayores o igual a 21 años
// Cuántas personas en total
//Ej: edades = [18, 19, 20, 21, 25, 40]
//    resultado: [3,3]
export function clasificarEdades(n: number): number[] {
    let array:number[] = new Array(n)
     const MIN:number = 18
     const MAX:number = 40
     let contMayor:number = 0
     let contMenor:number = 0
     for (let i = 0;i<n;i++){
         array[i]=Math.floor(Math.random() * (MAX - MIN + 1) ) + MIN
         if (array[i]<21){
             contMenor++
         }else {
             contMayor++
         }
     }
     let resul:number[]=[contMenor,contMayor]
     return resul  
}

// // (2) Dado un número `n`, verifica si es un número primo. Devuelve `true` si es primo, de lo contrario, devuelve `false`.
// // Ejemplo: 
// // 7 >> true
// // 10 >> false
export function esPrimo(n: number): boolean {
    let primo:boolean = true
    if(n < 2){
        return false;
    }
    for (let i:number = n-1;i>1;i--){
        if (n%i === 0){
            primo = false
        }
    }

    return primo
}

// // (3) Dada una cadena de texto, devuelve la cadena invertida.
// // Ejemplo: "hola" -> "aloh"
export function invertirCadena(cadena: string): string {
    let num: number = cadena.length;
    let texto:string = ""
    for (let i = 1; i <= num; i++) {
       texto = texto + cadena[num - i];
    }
    return texto;
}
// // (4) Dada una cadena de texto, cuenta y devuelve el número de vocales presentes en la cadena.
// // Ejemplo: 'hola mundo' >> 4
export function contarVocales(cadena: string): number {
    let contador:number = 0 
    let num:number = cadena.length
    const vocales:string = "aeiou"
    for (let i = 0;i<num;i++){
        if (vocales.includes(cadena[i].toLowerCase()))
            contador++
    }
    return contador
}

// // (5) Dada una palabra, devuelve `true` si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), de lo contrario, devuelve `false`.
// // Ejemplo: "anilina" -> true, "palabra" -> false
export function esPalindromo(palabra: string): boolean {
    let num: number = palabra.length;
    let texto:string = ""
    for (let i = 1; i <= num; i++) {
       texto = texto + palabra[num - i];
    }
    if (palabra.toLowerCase() == texto.toLowerCase())
        return true
    else return false
}

// // (6) Convierte una temperatura en grados Celsius a Fahrenheit y devuelve el resultado.
// // Fórmula: F = (C * 9/5) + 32
export function celsiusAFahrenheit(celsius: number): number {    
    return (celsius *9/5)+32
}

// // (7) Dado un arreglo de números, devuelve un nuevo arreglo que contenga solo los números pares del arreglo original.
export function filtrarPares(arr: number[]): number[] {
   const par = arr.filter(num => num % 2 === 0)
   return par
}

// // (8) Dado un número `n`, devuelve el factorial de `n`. El factorial de un número es el producto de todos los números desde 1 hasta `n`.
// // Ejemplo: factorial(5) >> 5 * 4 * 3 * 2 * 1 = 120
export function factorial(n: number): number {
    let total:number = 1
    for (let i = 1;i<=n;i++){
        total *= i
    }
    return total
}

// // (9) Promedio de un arreglo
// // Crea una función que devuelva el promedio de los elementos de un arreglo de números.
// // Ejemplo: [10, 20, 30] >> 20
export function promedioArreglo(arr: number[]): number {
    let resultado:number = arr.reduce((acc,arr)=> acc+arr,0)
    return resultado/arr.length   
}

// // (10) Eliminar duplicados
// // Escribe una función que elimine los valores duplicados de un arreglo.
// // Ejemplo: [1, 2, 2, 3] >> [1, 2, 3]
export function eliminarDuplicados(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

// // (11) Multiplicar todos los números de una matriz
// // Escribe una función que multiplique todos los elementos de una matriz.
// // Ejemplo: [[1, 2], [3, 4]] >> 24
export function multiplicarMatriz(matriz: number[][]): number {
    let total:number = 1
    for (let i = 0; i<matriz.length;i++){
        for(let j = 0; j<matriz[i].length;j++){
            total *= matriz[i][j]
        }
    }
    return total
}

// // (12) Contar las palabras en una frase
// // Crea una función que reciba una frase y devuelva la cantidad de palabras.
// // Ejemplo: "Hola mundo" >> 2
export function contarPalabras(frase: string): number {
    let v1 = frase.split(" ")
    v1 = v1.filter(item=> !(item == ""))
    let v1Range = v1.length
    return v1Range
}
// // (13) Obtener la mediana de un arreglo
// // Crea una función que calcule la mediana de un arreglo de números.
// // Ejemplo: [1, 2, 3, 4, 5] >> 3
export function calcularMediana(arr: number[]): number {
        arr.sort((a,b)=>a-b)
        const mid:number = Math.floor(arr.length/2)
        return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2
    }

// // (14) Calcular el máximo común divisor (MCD) de dos números
// // Crea una función que calcule el máximo común divisor (MCD) de dos números usando el algoritmo de Euclides.
// // Ejemplo: 48 y 18 >> 6
export function mcd(a: number, b: number): number {
    let num1:number = Math.max(a,b)
    let num2:number = Math.min(a,b)
    let numAux:number
    if (a>0 && b>0){
        while (num2!==0){
            numAux=num2
            num2 = num1 % num2
            num1 = numAux
        }
    }return num1
}

// // (15) Validar un número de tarjeta de crédito usando el algoritmo de Luhn
// // Crea una función que valide si un número de tarjeta de crédito es válido utilizando el algoritmo de Luhn.
// // Ejemplo:
// // '4532015112830366' >> true
// // '1234567812345679' >> false
export function validarTarjeta(numero: string): boolean {
    let texto = numero.replace(/-/g, "");
    let suma = 0;
    let alternar = false;
    if(texto.length !== 16){
        return false
    }
    for (let i = texto.length - 1; i >= 0; i--) {
        let n = parseInt(texto[i], 10);
        if (alternar) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        suma += n;
        alternar = !alternar;
    }
    return suma % 10 === 0;
}

// // (16) Crea una función que reciba un número y devuelva la suma de sus dígitos.
// // Ejemplo: 11 >> 1 + 1 = 2
export function sumaDigitos(n: number): number {
    let numero: string = n.toString();
    let num: number[] = [];
    for (let i = 0; i < numero.length; i++) {
      if (numero[i] == "-") {
        num[i] = Number(numero[i + 1]);
        i++;
      } else {
        num[i] = Number(numero[i]);
      }
    }
    let suma: number = num.reduce((num1, num2) => num1 + num2);
    return suma;
}

// // (17) Verificar si una cadena es un anagrama de otra.
// // Dada dos cadenas de texto, devuelve true si son anagramas entre sí (es decir, si las letras se pueden reorganizar para formar la otra cadena), de lo contrario, devuelve false.
// // Ejemplo: "roma" y "amor >> true
export function esAnagrama(cadena1: string, cadena2: string): boolean {
    let cad1:string = cadena1.trim().split("").sort().join()
     let cad2:string = cadena2.trim().split("").sort().join()
     if (cad1 == cad2){
         return true
     }else return false
     
 }
 // (18) Verificar si un número es perfecto.
// // Un número perfecto es aquel que es igual a la suma de sus divisores propios (excluyendo el propio número). Escribe una función que reciba un número y devuelva true si es un número perfecto, de lo contrario, devuelve false.
// // Ejemplo:
// //  28 >> true (1 + 2 + 4 + 7 + 14 = 28)
// //  10 >> false
export function esNumeroPerfecto(n: number): boolean {
    let sum:number = 0
    for (let i = 1;i<n;i++){
        if(n%i===0){
            sum +=i
        }    
    }
    return sum === n
}

// // (19) Convertir un número a binario.
// // Crea una función que reciba un número entero positivo y devuelva su representación en binario como una cadena de texto.
// // Ejemplo: 255 >> "11111111"
export function convertirABinario(n: number): string {
    let bin: string[] = []; 
    while (n > 0) {
        bin.push((n % 2).toString());
        n = Math.floor(n / 2);
    }
    return bin.reverse().join("");
}

// // (20) Determinar si una cadena es un pangrama.
// // Un pangrama es una frase que contiene todas las letras del alfabeto al menos una vez. Escribe una función que reciba una cadena de texto y devuelva true si es un pangrama, de lo contrario, devuelve false.
// // Ejemplo:
// // "El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo." >> true
// // "Hola Mundo" >> false
export function esPangrama(cadena: string): boolean {
    let cad:string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let cadjoin:string = cad.join("")
    cadena = cadena.replace(/[^a-zA-Z]/g, '')
    let cad2:string[] = cadena.toLowerCase().trim().split("").sort()
    for (let i = 0; i < cad2.length; i++) {
        for (let j = i + 1; j < cad2.length; j++) {
            if (cad2[j] === cad2[i]) {
                cad2.splice(j, 1);
                j--;
            }
        }
    }
    let cad2join:string = cad2.join("")
    return cadjoin == cad2join
}

