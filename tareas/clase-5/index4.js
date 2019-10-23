//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $lista = document.querySelectorAll("li");
let numeros = [];

for (let i =0; i<$lista.length; i++){
    numeros.push(Number($lista[i].innerHTML));
}



//calculo el promedio
let suma = 0;
for (let i=0; i<numeros.length; i++){
    suma += numeros[i];
}
let promedio = suma/numeros.length;
document.getElementById("promedio").innerHTML = "El promedio es: " + promedio;




//calculo el numero mas pequeño
let numeroPequeño = numeros[0];
for (let i=0; i<numeros.length; i++){
    if (numeros[i] < numeroPequeño){
        numeroPequeño = numeros[i];
    }
}
document.getElementById("mas-pequeño").innerHTML = "El numero mas pequeño es: " + numeroPequeño;
//document.getElementById("mas-pequeño").innerHTML = "El numero mas pequeño es: " + Math.min(...numeros); //con esta forma no hace falta loops ni nada




//calculo el numero mas grande
let numeroGrande = numeros[0];
for (let i=0; i<numeros.length; i++){
    if (numeros[i] > numeroGrande){
        numeroGrande = numeros[i];
    }
}
document.getElementById("mas-grande").innerHTML = "El numero mas grande es: " + numeroGrande;
// document.getElementById("mas-grande").innerHTML = "El numero mas grande es: " + Math.max(...numeros); //con esta forma no hace falta loops ni nada




//calculo el numero mas frecuente
//primero determino la frecuencia de cada uno
let frecuencia = {};
for (let i=0; i<numeros.length; i++){
    if (frecuencia.hasOwnProperty([numeros[i]])){
        frecuencia[numeros[i]] = frecuencia[numeros[i]] + 1;
    }
    else{
        frecuencia[numeros[i]] = 1;
    }
}

//ahora busco el que tenga la mayor cantidad de apariciones
let masFrecuente = 0;
let numeroMasFrecuente = 0;
for (let key in frecuencia){
    if (frecuencia[key]>masFrecuente){
        masFrecuente = frecuencia[key];
        numeroMasFrecuente = key;
    };
}


let veces = "vez";
if (masFrecuente > 1){
    veces = "veces";
}

document.getElementById("mas-frecuente").innerHTML = `El numero mas frecuente es ${numeroMasFrecuente} , y se repite ${masFrecuente} ${veces}.`;
