import cipher from "./cipher.js";

document.getElementById("screen1").style.display="block";

const start = document.getElementById("btnComenzar");
start.addEventListener("click" , comenzar);

function comenzar() {
    document.getElementById("screen1").style.display="none";
    document.getElementById("screen2").style.display="block";
}


// let resultado = "";


const btnCifrar = document.getElementById("btnCifrar");
btnCifrar.addEventListener("click", cifrar);

function cifrar() { 
     let string = document.getElementById("mensaje").value.toUpperCase();
     let offset = document.getElementById("desplazamiento").value;
    document.getElementById("resultado").value = cipher.encode (offset , string);
};

const btnDescifrar = document.getElementById("btnDescifrar");
btnDescifrar.addEventListener("click", descifrar);

function descifrar() {
    let string = document.getElementById("mensaje").value.toUpperCase();
    let offset = document.getElementById("desplazamiento").value;
     document.getElementById("resultado").value = cipher.decode (offset , string);
}



/*import cipher from './cipher';
console.log(cipher);*/
