import cipher from "./cipher.js";

//Botón "Comenzar" y el cambio de display

document.getElementById("screen1").style.display="block";

const start = document.getElementById("btnComenzar");
start.addEventListener("click" , comenzar);

function comenzar() {
    document.getElementById("screen1").style.display="none";
    document.getElementById("screen2").style.display="block";
}

//Botón "Cifrar"
const btnCifrar = document.getElementById("btnCifrar");
btnCifrar.addEventListener("click", cifrar);

function cifrar() { 
     let string = document.getElementById("mensaje").value.toUpperCase();
     let offset = document.getElementById("desplazamiento").value;
    document.getElementById("resultado").value = cipher.encode(offset , string);
}

//Botón "Descifrar"
const btnDescifrar = document.getElementById("btnDescifrar");
btnDescifrar.addEventListener("click", descifrar);

function descifrar() {
    let string = document.getElementById("mensaje").value.toUpperCase();
    let offset = document.getElementById("desplazamiento").value;
     document.getElementById("resultado").value = cipher.decode(offset , string);
}

