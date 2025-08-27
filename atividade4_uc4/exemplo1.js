import promptSync from "prompt-sync";
const prompt = promptSync();

let num = Number(prompt("Digite um número para tabuada: "));
let operacao = prompt("Digite a operação desejada (x para multiplicação, + para adição): ");

if (operacao === "x") {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
} else if (operacao === "+") {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} + ${i} = ${num + i}`);
  }
} else {
  console.log("Operação inválida.");
}