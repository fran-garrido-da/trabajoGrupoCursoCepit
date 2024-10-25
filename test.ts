// function clasificarEdades(n: number): number[] {
//     let array:number[] = new Array(n)
//     const MIN:number = 18
//     const MAX:number = 40
//     let contMayor:number = 0
//     let contMenor:number = 0
//     for (let i = 0;i<n;i++){
//         array[i]=Math.floor(Math.random() * (MAX - MIN + 1) ) + MIN
//         if (array[i]<21){
//             contMenor++
//         }else {
//             contMayor++
//         }
//     }
//     let resul:number[]=[contMenor,contMayor]
//     return resul
// }
// console.log(clasificarEdades(270))

// function esPrimo(n: number): boolean {
//     let primo:boolean = true
//     for (let i:number = n-1;i>1;i--){
//         if (n%i === 0){ //Checkea si el numero i es divisor del numero n
//             primo = false
//         }
//     }
//     return primo
// }
// console.log(esPrimo(152))

// function invertirCadena(cadena: string): string {
//     let num: number = cadena.length;
//     let texto:string = ""
//     for (let i = 1; i <= num; i++) {
//        texto = texto + cadena[num - i]; //agrega la ultima posicion del string a la nueva cadena texto
//     }
//      return texto;
// }

// console.log(invertirCadena("Gracias ignacio"))

// function contarVocales(cadena: string): number {
//const vocales:string[]=["a","e","i","o","u"]
//       // vocales.forEach(vocal => {
//     if (cadena.includes(vocal))
//     contador++
// })

// }

// function contarVocales(cadena: string): number {
//     let contador:number = 0 //contador de vocales
//     let num:number = cadena.length
//     const vocales:string = "aeiou"
//     for (let i = 0;i<num;i++){
//         if (vocales.includes(cadena[i].toLowerCase()))
//             contador++
//     }
//     return contador
// }

// console.log(contarVocales("hUbiera sErvidO"))

// function esPalindromo(palabra: string): boolean {
//     let num: number = palabra.length;
//     let texto:string = ""
//     for (let i = 1; i <= num; i++) {
//        texto = texto + palabra[num - i];
//     }
//     if (palabra.toLowerCase() == texto.toLowerCase())
//         return true
//     else return false
// }
// // // // // // // // function esPalindromo(palabra: string): boolean {
// // // // // // // //     const longitud = palabra.length;
    
// // // // // // // //     for (let i = 0; i < Math.floor(longitud / 2); i++) {
// // // // // // // //         if (palabra[i].toLowerCase() !== palabra[longitud - 1 - i].toLowerCase()) {
// // // // // // // //             return false; // Si hay una discrepancia, no es un palíndromo.
// // // // // // // //         }
// // // // // // // //     }
    
// // // // // // // //     return true; // Si todas las comparaciones son iguales, es un palíndromo.
// // // // // // // // }

// console.log(esPalindromo(""))


// function celsiusAFahrenheit(celsius: number): number {
//     return (celsius *9/5)+32
// }
// console.log(celsiusAFahrenheit(100).toFixed(2))
// function filtrarPares(arr: number[]): number[] {

//     const par:number[] = arr.filter(num => (num % 2 === 0))

//     return par
//  }

//  console.log(filtrarPares([12,6,3,99,54,61,71,81,90,10]))

// function factorial(n: number): number {
//     let total:number = 1
//     for (let i = 1;i<=n;i++){
//         total *= i
//         //total = total x i
//     }
//     return total
// // }
// // console.log(factorial(5))

// // function promedioArreglo(arr: number[]): number {
// //     let resultado:number = arr.reduce((acc,arr)=> acc+arr,0)

// //     return resultado/arr.length
// // }
// // console.log(promedioArreglo([10,20,30]))

// function eliminarDuplicados(arr: number[]): number[] {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] === arr[i]) {
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr;
// }
// // const array = [1, 2, 2, 3,5,5,5,5,6,5,7,4]
// // const resultado = eliminarDuplicados(array)
// console.log(eliminarDuplicados([1, 2, 2, 3,5,5,5,5,6,5,7,4]))

// function multiplicarMatriz(matriz: number[][]): number {
//     let total:number = 1
//     for (let i = 0; i<matriz.length;i++){
//         for(let j = 0; j<matriz[i].length;j++){
//             total *= matriz[i][j]
//         }
//     }
//     return total
// }

// console.log(multiplicarMatriz([[2, 4], [8, 16]]))

// function contarPalabras(frase: string): number {
//     let v1 = frase.split(" ")
//     v1 = v1.filter(item=> !(item == ""))
//     let v1Range = v1.length
//         return v1Range
// }
// console.log(contarPalabras("    pablo         asdasd                           "))

// function calcularMediana(arr: number[]): number {
//     arr.sort((a,b)=>a-b)
//     const mid:number = Math.floor(arr.length/2)
//     return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2
// }
// console.log(calcularMediana([1,2,3,4,5,6,7,8,9,10]))

// function mcd(a: number, b: number): number {
//     let num1:number = Math.max(a,b)
//     let num2:number = Math.min(a,b)
//     let numAux:number
//     if (a>0 && b>0){
//         while (num2!==0){
//             numAux=num2
//             num2 = num1 % num2
//             num1 = numAux
//         }
//     }return num1
// }

// console.log(mcd(105,575))

// function validarTarjeta2(numero: string): boolean {
//   let texto = numero.replace(/-/g, "");
//   let sum: number = 0;
//   let a:number[] = new Array(texto.length)
//   const check: number = Number(texto[texto.length - 1]);
//   if(texto.length !== 16){
//         return false
//   }
//   for (let i = texto.length - 2; i >= 0; i--) {
//     a[i] = Number(texto[i]);
//     if (i % 2 != 0) {
//       //si la posicion es par, duplica el digito
//       a[i] *= 2;
//       if (a[i] > 9) {
//         //si el digito duplicado es mayor a 9, le resta 9 y lo suma
//         a[i] = a[i] - 9;
//       } //si es menor a 9, lo suma como esta
//     }

//     sum += a[i];
//   }
//   //console.log(a);
//   console.log(sum)
//   console.log((sum * 9) % 10);
//   if ((sum * 9) % 10 == check) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(validarTarjeta("4242424242424242"));
// console.log(validarTarjeta2("4242424242424242"));

//  function validarTarjeta(numero: string): boolean {
//      let suma = 0;
//      let posicionPar = false;
//       for (let i = numero.length -1; i >= 0; i--) {
//          let digito = parseInt(numero[i]);
//          if (posicionPar) {
//              digito = digito * 2;
//              if (digito >9) {
//                  digito = digito - 9;
//              }
//          }
//          suma = suma + digito;
//          // se invierte el false por true y viseversa
//          posicionPar = !posicionPar;
//       }
//       if (suma % 10 === 0) {
//          return true;
//       } else {
//          return false;
//       }
//      }
//      console.log(validarTarjeta("4012888888888889"))
//--------------------FUNCION USADA-------------------
// function validarTarjeta(numero: string): boolean {
//     let suma = 0;
//     let alternar = false;
//     for (let i = numero.length - 1; i >= 0; i--) {
//         let n = parseInt(numero[i], 10);
//         if (alternar) {
//             n *= 2;
//             if (n > 9) n -= 9;
//         }
//         suma += n;
//         alternar = !alternar;
//     }
//     return suma % 10 === 0;
// }
//---------------------------------------------------------
// function sumaDigitos(n: number): number {
//   let numero: string = n.toString();
//   let num: number[] = [];
//   for (let i = 0; i < numero.length; i++) {
//     if (numero[i] == "-") {
//       num[i] = Number(numero[i + 1]);
//       i++;
//     } else {
//       num[i] = Number(numero[i]);
//     }
//   }
//   console.log(num);
//   let suma: number = num.reduce((num1, num2) => num1 + num2);
//   return suma;
// }
// // // // // // // // // function sumaDigitos(n: number): number {
// // // // // // // // //     let suma: number = 0;
// // // // // // // // //     const numero: string = Math.abs(n).toString();
    
// // // // // // // // //     for (let i = 0; i < numero.length; i++) {
// // // // // // // // //         suma += Number(numero[i]);
// // // // // // // // //     }
    
// // // // // // // // //     return suma;
// // // // // // // // // }

// console.log(sumaDigitos(-123232323));

//  function esAnagrama(cadena1: string, cadena2: string): boolean {
//    let cad1:string = cadena1.trim().split("").sort().join()
//     let cad2:string = cadena2.trim().split("").sort().join()
//     if (cad1 == cad2){
//         return true
//     }else return false

// }
// console.log(esAnagrama("ram on", "an mor"))

//Un número perfecto es aquel que es igual a la suma de sus divisores propios (excluyendo el propio número). 
//Escribe una función que reciba un número y devuelva true si es un número perfecto, de lo contrario, devuelve false
// function esNumeroPerfecto(n: number): boolean {
//     let sum:number = 0
//     for (let i = 1;i<n;i++){
//         if(n%i===0){
//             sum +=i
//         }    
//     }
//     return sum === n
// }
// console.log(esNumeroPerfecto(10))

// function convertirABinario(n: number): string {
//     let bin: string[] = []; // Usar un arreglo para almacenar los dígitos
//     while (n > 0) {
//         bin.push((n % 2).toString()); // Agregar el dígito como cadena
//         n = Math.floor(n / 2);
//     }
//     return bin.reverse().join(""); // Invertir y unir el arreglo para formar la cadena
// }

// console.log(convertirABinario(652))
// function removeNonAlphabeticChars(str) {
//     return str.replace(/[^a-zA-Z]/g, '');
// }
// function esPangrama(cadena: string): boolean {
//     let cad:string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//     let cadjoin:string = cad.join("")
//     cadena = cadena.replace(/[^a-zA-Z]/g, '')
//     let cad2:string[] = cadena.toLowerCase().trim().split("").sort()
//     for (let i = 0; i < cad2.length; i++) {
//         for (let j = i + 1; j < cad2.length; j++) {
//             if (cad2[j] === cad2[i]) {
//                 cad2.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     let cad2join:string = cad2.join("")
//     return cadjoin == cad2join
// }
// console.log(esPangrama("aaa,bbb,ccc,d,e,ff,g,hh,y,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,i,z"))
// // // // // // function esPangrama(cadena: string): boolean {
// // // // // //     const alfabeto: Set<string> = new Set("abcdefghijklmnopqrstuvwxyz".split(""));
// // // // // //     const caracteres: Set<string> = new Set(cadena.toLowerCase().replace(/[^a-z]/g, ''));
    
// // // // // //     return alfabeto.size === caracteres.size && [...alfabeto].every(letra => caracteres.has(letra));
// // // // // // }
