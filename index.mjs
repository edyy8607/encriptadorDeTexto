import { texto, caja, caja_mensaje, mensaje, botonEncriptar, botonDesencriptar, botonCopiar, segundaImagen, segundoTexto, } from "./utilidades/elementosHTML.mjs";
import { copiarAlPortapapeles, desencriptarTexto, encriptarTexto } from "./utilidades/index.mjs";

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", () => {
  const textoACopiar = mensaje.value
  copiarAlPortapapeles(textoACopiar)
});

function encriptar() {
  let textoValor = texto.value
  const textoCifrado = encriptarTexto(textoValor)

  if (textoCifrado.length != 0) {
    mostrarMensajeCifrado()
    mensaje.value = textoCifrado;
    
    // cambiar imagen y texto
    segundaImagen.src = "./img/encriptado.png";
    segundoTexto.textContent = "¡Texto encriptado!";

  } else {
    mostrarMensajeVacio()
  }
}

function desencriptar() {
  let textoValor = texto.value
  const textoCifrado = desencriptarTexto(textoValor)

  if (textoCifrado.length != 0) {
    mostrarMensajeCifrado()
    mensaje.value = textoCifrado;

    // cambiar imagen y texto
    segundaImagen.src = "./img/desencriptado.png";
    segundoTexto.textContent = "¡Texto desencriptado!";

  } else {
    mostrarMensajeVacio()
  }
}

function mostrarMensajeCifrado() {
  caja.classList.toggle("caja-no-visible", false);
  caja_mensaje.classList.toggle("caja-no-visible", true);
}

function mostrarMensajeVacio() {
  caja.classList.toggle("caja-no-visible", true);
  caja_mensaje.classList.toggle("caja-no-visible", false);
}