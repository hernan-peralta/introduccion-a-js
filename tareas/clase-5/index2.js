let nombreUsuario = document.getElementById('nombre-usuario');
let edadUsuario = document.getElementById('edad-usuario');
let formEntrada = document.getElementById('entrada-bar');
let ingresar = document.getElementById('ingresar');

formEntrada.onsubmit = () => {
    document.querySelector('h1').innerHTML = 'Bienvenido ' + nombreUsuario.value;
    document.getElementById('resultado').innerHTML = "Nombre: " + nombreUsuario.value + ', Edad: ' + edadUsuario.value;
    return false;
}
