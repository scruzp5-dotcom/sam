const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ====== 1. Número positivo, negativo o cero ======
rl.question("1) Ingrese un numero: ", (numero) => {
  numero = Number(numero);

  if (numero > 0) {
    console.log("Numero positivo");
  } else if (numero < 0) {
    console.log("Numero negativo");
  } else {
    console.log("Numero cero");
  }
