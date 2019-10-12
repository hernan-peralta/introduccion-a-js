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
    numeros.push((Number($lista[i].innerHTML)));
}



//calculo el promedio
let suma = 0;
for (let i=0; i<numeros.length; i++){
    suma += numeros[i];
}
let promedio = suma/numeros.length;
document.getElementById("promedio").innerHTML = "El promedio es: " + promedio;




//calculo el numero mas pequeño
let numeropequeño = numeros[0];
for (let i=0; i<numeros.length; i++){
    if (numeros[i] < numeropequeño){
        numeropequeño = numeros[i];
    }
}
document.getElementById("maspequeño").innerHTML = "El numero mas pequeño es: " + numeropequeño;
//document.getElementById("maspequeño").innerHTML = "El numero mas pequeño es: " + Math.min(...numeros); //con esta forma no hace falta loops ni nada




//calculo el numero mas grande
let numerogrande = numeros[0];
for (let i=0; i<numeros.length; i++){
    if (numeros[i] > numerogrande){
        numerogrande = numeros[i];
    }
}
document.getElementById("masgrande").innerHTML = "El numero mas grande es: " + numerogrande;
// document.getElementById("masgrande").innerHTML = "El numero mas grande es: " + Math.max(...numeros); //con esta forma no hace falta loops ni nada




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
let masfrecuente = 0;
let numeromasfrecuente = 0;
for (let key in frecuencia){
    if (frecuencia[key]>masfrecuente){
        masfrecuente = frecuencia[key];
        numeromasfrecuente = key;
    };
}


let veces = "vez";
if (masfrecuente > 1){
    veces = "veces";
}

document.getElementById("masfrecuente").innerHTML = `El numero mas frecuente es ${numeromasfrecuente} , y se repite ${masfrecuente} ${veces}.`;
