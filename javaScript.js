const mensaje = document.querySelector(".mensaje-original");
const encriptado = document.querySelector(".mensaje-encriptado");

//asigno evento clic a los elementos boton

// funcion encriptar
const btnEncripta = document.getElementById("encripta");
btnEncripta.addEventListener("click", (e) => {
  e.preventDefault();
  const texto = encriptar(mensaje.value);
  encriptado.value = texto;
});

// funcion desencriptar
const btnDesencripta = document.getElementById("desencripta");
btnDesencripta.addEventListener("click", (e) => {
  e.preventDefault();
  const texto = desEncriptar(mensaje.value);
  encriptado.value = texto;
});

// funciona para copiar el texto
const btnCopiar = document.getElementById("btnCopia");
btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  encriptado.select();
  document.execCommand('copy');
})

//matriz de encriptado
const matriz = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Funciones para encriptar y desencriptar
function encriptar(textoEncriptar) {
  textoEncriptar = textoEncriptar.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (textoEncriptar.includes(matriz[i][0])) {
      textoEncriptar = textoEncriptar.replaceAll(matriz[i][0], matriz[i][1]);
    }
  }
  return textoEncriptar;
}

function desEncriptar(textoDesencriptar) {
  textoDesencriptar = textoDesencriptar.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (textoDesencriptar.includes(matriz[i][1])) {
      textoDesencriptar = textoDesencriptar.replaceAll(
        matriz[i][1],
        matriz[i][0]
      );
    }
  }

  return textoDesencriptar;
}
