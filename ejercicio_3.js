const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// ====== 2. Mayor o menor de edad ======
  rl.question("\n2) Ingrese la edad: ", (edad) => {
    edad = Number(edad);

    if (edad >= 18) {
      console.log("Mayor de edad");
    } else {
      console.log("Menor de edad");
    }
