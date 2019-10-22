/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio 
del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados 
(investigar cómo en MDN).
*/

let cuantaGente = 1;
let $formulario = document.getElementsByClassName("input");
let clonDeFormulario = $formulario[0].cloneNode(true);
let $edad = document.getElementsByClassName("edad");
let $textoResultado = document.getElementById("resultado");
let $contenedorForms = document.getElementById("formulario-edad");


document.onload = preguntaMiembros();


function preguntaMiembros(){
    cuantaGente = prompt("¿Cuanta gente hay en el grupo familiar?");
    //cuantaGente -1 porque ya tengo un form en el archivo html
    for (let i=0; i<cuantaGente-1; i++){
        document.getElementById("formulario-edad").appendChild(clonDeFormulario.cloneNode(true));
    }
    //reseteo el input de nuevo a vacio
    $edad[0].value = '';
    //activo nuevamente el boton "calcular" si es que estaba deshabilitado
    document.getElementById("calcular").disabled = false; 
}



//creo y lleno un array con las edades introducidas
document.getElementById("calcular").onclick = () => {
    let edades = [];
    for (let i = 0; i<$edad.length; i++){
        edades.push(Number($edad[i].value));
    }

    //esta linea es para desactivar el boton una vez presionado, ya que de lo contrario sigue agrandando el array "edades"
    document.getElementById("calcular").disabled = true; 
    let mayorEdad = Math.max(...edades);
    let menorEdad = Math.min(...edades);
    
    //calculo el promedio
    let suma = 0;
    for (let i=0; i<edades.length; i++){
        suma += edades[i];
    }
    let edadPromedio = suma/edades.length;

    //muestro el resultado en el elemento <em>
    $textoResultado.innerText = `La mayor edad es ${mayorEdad}, la menor edad es ${menorEdad} y el promedio es ${edadPromedio}.`;
}


//funcionalidad del boton "Empezar de nuevo"
document.getElementById("reset").onclick = () =>{
    while ($contenedorForms.childElementCount > 1){
        $contenedorForms.removeChild($contenedorForms.lastChild);
    }
    preguntaMiembros();
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual 
de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario 
anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let $formSalario = document.getElementsByClassName("form-salario");
let clonFormSalario = $formSalario[0].cloneNode(true);
let $formTrabajo = document.getElementById("formulario-trabajo");
let $calcularSalario = document.getElementById("calcular-salario");
let $salarioInputValue = document.getElementsByClassName("salario-anual");
let $resultadoSalarios = document.getElementById("resultado-salarios");



document.getElementById("agregar").onclick = () =>{
    $formTrabajo.appendChild(clonFormSalario.cloneNode(true));
}



document.getElementById("quitar").onclick = () =>{
    //este condicional esta para que no me deje seguir borrando los inputs hasta no dejar ninguno
    if ($formTrabajo.childElementCount > 1){ 
        $formTrabajo.removeChild($formTrabajo.lastChild);
    }
}


$calcularSalario.onclick = () => {
    let salarios = [];
    for (let i=0; i<$salarioInputValue.length; i++){
        //si el input esta vacio no lo agrego al array
        if ($salarioInputValue[i].value != ""){ 
            salarios.push(Number($salarioInputValue[i].value));
        }
    }

    let mayorSalario = Math.max(...salarios);
    let menorSalario = Math.min(...salarios);

    //calculo el salario anual promedio
    let suma = 0;
    for (let i=0; i<salarios.length; i++){
        suma += salarios[i];
    }
    let salarioAnualPromedio = suma/salarios.length;
    let salarioMensualPromedio = suma / 12;

    $resultadoSalarios.innerText = `El mayor salario anual es ${mayorSalario}, el menor salario anual es ${menorSalario}, el salario anual promedio es ${salarioAnualPromedio} y el salario mensual promedio es ${salarioMensualPromedio}.`;
}
