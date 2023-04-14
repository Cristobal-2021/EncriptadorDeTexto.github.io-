const input = document.getElementById("input");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const showMessage = document.getElementById("message");
const closeModalButton = document.getElementById("close-modal-button");
const warningModal = document.getElementById("warningModal");
const warningModalMessage = document.getElementById("modal-message");
const successModal = document.getElementById("successModal");
const closeSuccessModal = document.getElementById("close-modal");
const successModalMessage = document.getElementById("success-modal-message");
const copy = document.getElementById("copy");
const area = document.getElementById("texto-encriptado");

/*   declarar la funcion EncriptarCodigo */
function EncriptarCodigo(str) {
  const string = str.split("");
  const code = ["ai", "enter", "imes", "ober", "ufat"];
  const EncriptarCodigo = [];



  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      EncriptarCodigo.push(code[0]);
    } else if (string[i] === "e") {
      EncriptarCodigo.push(code[1]);
    } else if (string[i] === "i") {
      EncriptarCodigo.push(code[2]);
    } else if (string[i] === "o") {
      EncriptarCodigo.push(code[3]);
    } else if (string[i] === "u") {
      EncriptarCodigo.push(code[4]);
    } else {
      EncriptarCodigo.push(string[i]);
    }
  }
  return EncriptarCodigo.join("");

}

/*   declarar la funcion DesencriptarCodigo */

function desencriptarMensage(str) {
  const regex = /ai|enter|imes|ober|ufat/gi;
}

/*   declarar la funcion invalidar el input de ka letras con tilde */

function InvalidarInput(str) {
  const specialChars = /[`áéíóú´!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

/*   declarar la funcion invalidar el input de las letras Mayusculas */

function InvalidarInputMayuscula(str) {
  const specialCharsMayus = /[ABCDEFGHIJKLMNÑOPKRSTUVWXYZ]/;
  return specialCharsMayus.test(str);
}



encriptar.addEventListener("click", function () {
  if (input.value.length <= 0) {
    warningModalMessage.innerHTML =
      "No ha ingresado ningún mensaje para que se encriptado, por favor ingresar el mensaje.";
    warningModal.style.display = "block";
    return;
  }

  if (InvalidarInputMayuscula(input.value)) {
    warningModalMessage.innerHTML =
      "Solo se aceptan  aceptan letras minusculas";
    warningModal.style.display = "block";
    return;
  }

  if (InvalidarInput(input.value)) {
    warningModalMessage.innerHTML =
      "No se aceptan carácteres especiales, ni tildes. Por favor intente de nuevo.";
    warningModal.style.display = "block";
    return;
  } else {
    showMessage.style.display = "block";
    showMessage.innerHTML = `<textarea readonly="true" id="texto-encriptado" style="width: 245px;
    height: 432px;
    margin-top: 1px;
    border: 1px solid transparent;
    background: transparent;
    color: #0a3871;
    font-size: 20px;
    font-style: Regular;
    line-height: 150%;
    text-align: left;
    vertical-align: top;
    outline: none;
    position: absolute;">${EncriptarCodigo(input.value)}</textarea>`;
    input.value = "";
  }
});


desencriptar.addEventListener("click", function () {
  if (input.value.length <= 0) {
    warningModalMessage.innerHTML =
      "No ha ingresado ningún mensaje para que se desencriptar";
    warningModal.style.display = "block";
    return;
  }
  let string = input.value;
  const regex = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };


  string = string.replace(/ai|enter|imes|ober|ufat/gi, function (matched) {
    return regex[matched];
  });

  showMessage.style.display = "block";
  showMessage.innerHTML = `<textarea readonly="true" id="texto-encriptado" style="width: 245px;
  height: 432px;
  margin-top: 1px;
  border: 1px solid transparent;
  background: transparent;
  color: #0a3871;
  font-size: 20px;
  font-style: Regular;
  line-height: 150%;
  text-align: left;
  vertical-align: top;
  outline: none;">${string}</textarea>`;
  input.value = "";
});


copy.addEventListener("click", function () {
  navigator.clipboard.writeText(document.getElementById("texto-encriptado").value);
  successModalMessage.innerHTML = "El mensaje se ha copiado de manera exitosa";
  successModal.style.display = "block";
});


closeModalButton.addEventListener("click", function () {
  warningModal.style.display = "none";
});

warningModal.addEventListener("click", function () {
  warningModal.style.display = "none";
});

successModal.addEventListener("click", function () {
  successModal.style.display = "none";
});
