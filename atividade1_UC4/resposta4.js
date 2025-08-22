import PromptSync from "prompt-sync";
const prompt = PromptSync();
let juros_pago = 0;
console.log("Bem-vindo ao sistema de empréstimo!");
let salario = Number(prompt("Qual o valor de seu salário? "));
let solicitado_ep = Number(
  prompt("Informe o valor desejado para o empréstimo => ")
);
let parcelas = Number(prompt("Informe o número de parcelas => "));
if (solicitado_ep <= 0) {
  console.log("Valor inválido para o empréstimo.");
}
if (solicitado_ep / parcelas > 0.3 * salario) {
  console.log("emprestimo negado.");
} else {
  console.log("Empréstimo aprovado.");
}

let total_apagar = solicitado_ep + parcelas * (3.5 / 100);

console.log(`O valor total a ser pago é de R$ ${total_apagar.toFixed(2)}.`);
console.log(
  `EM ${parcelas} parcelas de R$ ${(total_apagar / parcelas).toFixed(2)}.`
);

console.log(`Valor total de juros pago: R$ ${juros_pago.toFixed(2)}.`);

console.log("Obrigado por utilizar nosso sistema de empréstimo.");
