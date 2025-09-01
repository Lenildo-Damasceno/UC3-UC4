import promptSync from 'prompt-sync';
const prompt = promptSync();

const nomesPessoas = [];
const nomesdeComidas = [];
let resultado = [];

for (let i = 0;  i < 10;i++){
    nomesPessoas.push(prompt("Digite o nome de 10 Pessoas, digite o  nome da " + (i + 1) + "° : "));
}
for (let j = 0; j < 10; j++)
        {nomesdeComidas.push(prompt("Digite o nome de 10 Comidas, digite o  nome da " + (j + 1) + "° : "));}




for (let i = 0; i < 10; i++) {
    resultado.push(nomesPessoas[i] + " - " + nomesdeComidas[i]); //apenas concatenando os nomes
}

console.log("Lista intercalada de pessoas e comidas:");
for (let i = 0; i < resultado.length; i++) {
    console.log(resultado[i]);
}
