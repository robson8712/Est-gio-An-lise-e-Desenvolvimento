const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

rl.question("Digite um número: ", function (numero) {
  numero = parseInt(numero);

  function pertenceAFibonacci(numero) {
    let i = 0;
    while (fibonacci(i) <= numero) {
      if (fibonacci(i) === numero) {
        return true;
      }
      i++;
    }
    return false;
  }

  if (pertenceAFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }

  rl.close();
});

