const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let num = Number(prompt("Por favor, digite um valor: "));
if (num % 2 === 0) {
  console.log(`${num} é um número par.`);
  if (num > 0) {
    console.log(`${num} é positivo.`);
  } else if (num < 0) {
    console.log(`${num} é negativo.`);
  }
} else {
  console.log(`${num} é um número ímpar.`);
}
