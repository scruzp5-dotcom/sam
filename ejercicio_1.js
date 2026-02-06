const prompt = require("prompt-sync")();

let numero = Number(prompt("Ingrese un numero: "));
if (numero > 0) {
  console.log("Numero positivo");
} else if (numero < 0) {
  console.log("Numero negativo");
} else {
  console.log("Numero cero");
}
