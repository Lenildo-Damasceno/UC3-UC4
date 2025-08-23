const PromptSync = require("prompt-sync");
const prompt = PromptSync();

const idade = prompt('Por favor, digite sua idade: ');
console.log(`Sua idade é: ${idade}`);
const idadeNum = parseInt(idade, 10);
if (!isNaN(idadeNum)) {
    if (idadeNum >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }
} else {
    console.log('Valor digitado não é um número válido.');
}
// Fim do código