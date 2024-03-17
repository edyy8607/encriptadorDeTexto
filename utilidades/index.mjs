export const encriptarTexto = (texto) => {
  return texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
}

export const desencriptarTexto = (texto) => {
  return texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
}

export const copiarAlPortapapeles = (texto) => {
  navigator.clipboard.writeText(texto)
  alert("Texto copiado al portapapeles")
}