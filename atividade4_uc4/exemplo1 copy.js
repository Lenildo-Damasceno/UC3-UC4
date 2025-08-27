import promptSync from "prompt-sync";
const prompt = promptSync();

let num = Number(prompt("Digite um número para tabuada: "));
let operacao = prompt("Digite a operação desejada (x para multiplicação, + para adição): ");

if (operacao === "x") {
  let i = 1;
  while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
  }
} else if (operacao === "+") {
  let i = 1;
  while (i <= 10) {
    console.log(`${num} + ${i} = ${num + i}`);
    i++;
  }
} else {
  console.log("Operação inválida.");
}