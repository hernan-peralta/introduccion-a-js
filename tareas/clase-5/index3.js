let formulario = document.getElementsByClassName("tiempovideos");
let agregarClase = document.getElementById("agregarform");
let cantidadClases = 1;
let clonDeFormulario = formulario[0].cloneNode(true); //tengo que clonar el clon del formulario sino me clona tambien los valores que estan dentro del campo de texto


agregarClase.onclick = () => {
    cantidadClases ++;
    document.querySelector("div").appendChild(clonDeFormulario.cloneNode(true));
    document.getElementsByClassName("nombreclase")[document.getElementsByClassName("nombreclase").length-1].innerHTML = "Clase " + cantidadClases; // en el lado izquierdo de la asignacion selecciono el ultimo elemento del array que contiene la clase "nombreclase"
}

document.getElementById("calculartotal").onclick = () => {
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    for (let i =0; i<document.getElementsByClassName("segundos").length; i++){
        segundos += Number(document.getElementsByClassName("segundos")[i].value);
    }
    for (let i =0; i<document.getElementsByClassName("minutos").length; i++){
        minutos += Number(document.getElementsByClassName("minutos")[i].value);
    }
    for (let i =0; i<document.getElementsByClassName("horas").length; i++){
        horas += Number(document.getElementsByClassName("horas")[i].value);
    }
    minutos += Math.floor(segundos / 60);
    segundos = Math.floor(segundos % 60);
    horas += Math.floor(minutos / 60);
    minutos = Math.floor(minutos % 60);
    document.getElementById("resultado").innerHTML = "Tiempo total: " + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos.';
}
