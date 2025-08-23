const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let velocidadePermitida = prompt("Digite a VELOCIDADE PERMITIDA: ");
let velocidadeMedida ; console.log(prompt ("Digite a velocidade do carro (em km/h): "));

if (velocidadeMedida <= velocidadePermitida) {
  console.log("Velocidade dentro do limite.");
} else if (velocidadeMedida <= velocidadePermitida * 0.10) {
  console.log("Atenção: acima do permitido, multa leve!");
} else if (velocidadeMedida <= velocidadePermitida * 1.10) {
  console.log("Atenção: acima do permitido, multa grave!");
}
