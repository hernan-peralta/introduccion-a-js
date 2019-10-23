let formulario = document.getElementsByClassName("tiempo-videos");
let agregarClase = document.getElementById("agregar-video");
let cantidadClases = 1;
let clonDeFormulario = formulario[0].cloneNode(true); //tengo que clonar el clon del formulario sino me clona tambien los valores que estan dentro del campo de texto
let $campoSegundos = document.getElementsByClassName("segundos");
let $campoMinutos = document.getElementsByClassName("minutos");
let $campoHoras = document.getElementsByClassName("horas");
let $numeroClase = document.getElementsByClassName("numero-clase")



agregarClase.onclick = () => {
    cantidadClases ++;
    document.querySelector("div").appendChild(clonDeFormulario.cloneNode(true));
    $numeroClase[$numeroClase.length-1].innerHTML = "Clase " + cantidadClases; // en el lado izquierdo de la asignacion selecciono el ultimo elemento del array que contiene la clase "nombreclase"
}

document.getElementById("calcular-total").onclick = () => {
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    for (let i =0; i<$campoSegundos.length; i++){
        segundos += Number($campoSegundos[i].value);
    }
    for (let i =0; i<$campoMinutos.length; i++){
        minutos += Number($campoMinutos[i].value);
    }
    for (let i =0; i<$campoHoras.length; i++){
        horas += Number($campoHoras[i].value);
    }
    minutos += Math.floor(segundos / 60);
    segundos = Math.floor(segundos % 60);
    horas += Math.floor(minutos / 60);
    minutos = Math.floor(minutos % 60);
    document.getElementById("resultado").innerHTML = "Tiempo total: " + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos.';
}
