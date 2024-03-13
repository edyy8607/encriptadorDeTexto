function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muheco =
    document.getElementById(
      "muheco"
    ); /*no esta obteniendo la imagen del muheco encriptado*/

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muheco.src = "./img/encriptado.jpg"; // Asegúrate de que la ruta sea correcta
  } else {
    muheco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Opps", "Debes escribir algun texto para poder cifrarlo.", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muheco = document.getElementById("muheco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muheco.src = "./img/desencriptado.jpg";
  } else {
    muheco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooopps!", "Debes escribir algún texto", "warning");
  }
}
