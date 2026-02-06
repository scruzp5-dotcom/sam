const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   // ====== 3. Comparación de dos números ======
    rl.question("\n3) Ingrese el primer numero: ", (n1) => {
      rl.question("Ingrese el segundo numero: ", (n2) => {
        n1 = Number(n1);
        n2 = Number(n2);

        if (n1 > n2) {
          console.log("El mayor es: " + n1);
        } else if (n2 > n1) {
          console.log("El mayor es: " + n2);
        } else {
          console.log("Los numeros son iguales");
        }
