function clasificarEdades(n: number): number[] {
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
console.log(clasificarEdades(270))

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
//     if (palabra.toLowerCase() == invertirCadena(palabra).toLowerCase())
//         return true
//     else return false
// }
// console.log(esPalindromo("asado"))

// function celsiusAFahrenheit(celsius: number): number {
//     return (celsius *9/5)+32
// }
// console.log(celsiusAFahrenheit(100).toFixed(2))
// function filtrarPares(arr: number[]): number[] {

//     const par:number[] = arr.filter(num => !(arr[num]%2===0))

//     return par
//  }

//  console.log(filtrarPares([1,2,3,4,5,6,7,8,9,10]))

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
// console.log(esPalindromo(""))

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
//     let sum:number = arr.reduce((value1,value2)=> value1+value2)
//     return sum/arr.length
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

// function validarTarjeta(numero: string): boolean {
//    let a:number[] = new Array(numero.length)
//    let sum:number = 0
//    const check:number = 7
//     for(let i= 0;i<numero.length;i++){
//         a[i] = Number(numero[i])
//         if(i%2!=0){
//             a[i]*=2
//         }
//     sum += a[i]
//     }
//     if (sum*9%10 == check){
//         return true
//     }
//     else{return false}
// }
// console.log(validarTarjeta("4532015112830366"))

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
// console.log(sumaDigitos(123232323));
