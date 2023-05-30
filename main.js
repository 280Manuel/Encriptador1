var secreto_usuario = document.getElementById("usuario_txt");
var btn_encriptar = document.getElementById("btn_encriptar");
var btn_desencriptar = document.getElementById("bnt_desencriptar");
var secreto_encriptado = document.getElementById("mostrar_secreto");

function encriptador() {
    var nuevo_secreto_usuario = secreto_usuario.value.replace(/e/g, "enter");
    nuevo_secreto_usuario = nuevo_secreto_usuario.replace(/i/g, "imes");
    nuevo_secreto_usuario = nuevo_secreto_usuario.replace(/o/g, "ober");
    nuevo_secreto_usuario = nuevo_secreto_usuario.replace(/a/g, "ai");
    nuevo_secreto_usuario = nuevo_secreto_usuario.replace(/u/g, "ufat");
    var resultado = nuevo_secreto_usuario;
    mostrar_secreto(resultado);
    if (resultado == "") {
        alert ("No has escrito un secreto")
    }
}

function desencriptador() {
    var desencriptado = secreto_encriptado.value.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    desencriptado = desencriptado.replace(/ames/g, "a");
    var resultado = desencriptado;
    mostrar_secreto(resultado);
    if (secreto_encriptado == "") {
        alert ("No has escrito un secreto")
    }
}

/*
function desencriptador() {
    var desencriptado = document.getElementById("usuario_txt").value
    resultado = desencriptado;
    mostrar_secreto(resultado);
    if (resultado == "") {
        alert ("No has escrito un secreto")
    }
}
*/
function mostrar_secreto(resultado) {
    document.getElementById("mostrar_secreto").value = resultado;
}

